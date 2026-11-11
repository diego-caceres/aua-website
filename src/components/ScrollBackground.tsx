import React, { useEffect, useRef } from 'react';

const MAX_SCROLL = 2000; // scroll distance over which the water goes from light to deep
const SMOOTHING = 0.12; // fraction of the remaining distance covered per frame (lower = more glide)

// Interpolate between light blue and dark blue
const LIGHT_BLUE = { r: 59, g: 130, b: 246 }; // blue-500
const DARK_BLUE = { r: 30, g: 58, b: 138 }; // blue-900

type Placement = { x: number; y: number; scale?: number; flip?: boolean };

// Positions are in viewport percentages; x is capped at 88 for the fish that
// swim near the right edge so they never extend beyond it.
const creatures: {
  src: string;
  alt: string;
  wrapperClass: string;
  imgClass: string;
  place: (scrollY: number, progress: number) => Placement;
}[] = [
  {
    src: '/fishes/fish-shape-of-red-snapper-svgrepo-com.svg',
    alt: 'Fish',
    wrapperClass: 'opacity-20',
    imgClass: 'w-24 h-16 filter brightness-0 invert opacity-60',
    place: (s, p) => ({
      x: Math.min(50 + Math.sin(s * 0.001) * 30, 88),
      y: 20 + Math.cos(s * 0.0008) * 15,
      scale: 0.8 + p * 0.4,
    }),
  },
  {
    src: '/fishes/fish-2-svgrepo-com.svg',
    alt: 'Fish',
    wrapperClass: 'opacity-15',
    imgClass: 'w-18 h-12 filter brightness-0 invert opacity-50',
    place: (s, p) => ({
      x: Math.min(80 + Math.sin(s * 0.0012 + Math.PI) * 25, 88),
      y: 60 + Math.cos(s * 0.001 + Math.PI) * 20,
      scale: 1.2 + p * 0.3,
      flip: true,
    }),
  },
  {
    src: '/fishes/shark.svg',
    alt: 'Shark',
    wrapperClass: 'opacity-25',
    imgClass: 'w-20 h-14 filter brightness-0 invert opacity-40',
    place: (s, p) => ({
      x: Math.min(20 + Math.sin(s * 0.0015 + Math.PI / 2) * 35, 88),
      y: 80 + Math.cos(s * 0.0009 + Math.PI / 2) * 10,
      scale: 0.6 + p * 0.5,
    }),
  },
  {
    src: '/fishes/manta-ray-svgrepo-com.svg',
    alt: 'Manta Ray',
    wrapperClass: 'opacity-30',
    imgClass: 'w-28 h-18 filter brightness-0 invert opacity-30',
    place: (s, p) => ({
      x: 30 + Math.sin(s * 0.0008 + Math.PI / 4) * 20,
      y: 40 + Math.cos(s * 0.0006 + Math.PI / 4) * 25,
      scale: 1.0 + p * 0.2,
    }),
  },
];

const bubbles: {
  dotClass: string;
  place: (scrollY: number) => Placement;
}[] = [
  {
    dotClass: 'w-2 h-2 bg-white rounded-full opacity-60',
    place: (s) => ({ x: 10 + Math.sin(s * 0.002) * 5, y: 30 + ((s * 0.05) % 100) }),
  },
  {
    dotClass: 'w-3 h-3 bg-white rounded-full opacity-40',
    place: (s) => ({ x: 70 + Math.cos(s * 0.0025) * 8, y: 50 + ((s * 0.03) % 100) }),
  },
  {
    dotClass: 'w-1 h-1 bg-white rounded-full opacity-80',
    place: (s) => ({ x: 40 + Math.sin(s * 0.003 + Math.PI / 3) * 6, y: 70 + ((s * 0.04) % 100) }),
  },
];

const toTransform = ({ x, y, scale = 1, flip = false }: Placement) =>
  `translate3d(${x.toFixed(3)}vw, ${y.toFixed(3)}vh, 0) scale(${scale.toFixed(4)})${flip ? ' scaleX(-1)' : ''}`;

const toBackground = (progress: number) => {
  const r = Math.round(LIGHT_BLUE.r + (DARK_BLUE.r - LIGHT_BLUE.r) * progress);
  const g = Math.round(LIGHT_BLUE.g + (DARK_BLUE.g - LIGHT_BLUE.g) * progress);
  const b = Math.round(LIGHT_BLUE.b + (DARK_BLUE.b - LIGHT_BLUE.b) * progress);
  return `linear-gradient(135deg, rgb(${r}, ${g}, ${b}) 0%, rgb(${Math.max(r - 40, 0)}, ${Math.max(g - 40, 0)}, ${Math.max(b - 20, 0)}) 100%)`;
};

// The scene is driven outside React: a requestAnimationFrame loop eases a
// smoothed scroll value toward the real one and writes transforms straight to
// the DOM. That keeps the fish gliding on every frame while the user scrolls
// (and settling gently afterwards) instead of re-rendering per scroll event.
const ScrollBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const creatureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    let target = mainContent.scrollTop;
    let current = target;
    let frame = 0;

    const render = () => {
      const progress = Math.min(current / MAX_SCROLL, 1);
      if (containerRef.current) {
        containerRef.current.style.background = toBackground(progress);
      }
      creatures.forEach((creature, i) => {
        const el = creatureRefs.current[i];
        if (el) el.style.transform = toTransform(creature.place(current, progress));
      });
      bubbles.forEach((bubble, i) => {
        const el = bubbleRefs.current[i];
        if (el) el.style.transform = toTransform(bubble.place(current));
      });
    };

    const tick = () => {
      const delta = target - current;
      if (Math.abs(delta) < 0.5) {
        current = target;
        frame = 0;
      } else {
        current += delta * SMOOTHING;
        frame = requestAnimationFrame(tick);
      }
      render();
    };

    const handleScroll = () => {
      target = mainContent.scrollTop;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    render();
    mainContent.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      mainContent.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: toBackground(0) }}
    >
      {creatures.map((creature, i) => (
        <div
          key={creature.src}
          ref={(el) => { creatureRefs.current[i] = el; }}
          className={`absolute left-0 top-0 will-change-transform ${creature.wrapperClass}`}
          style={{ transform: toTransform(creature.place(0, 0)) }}
        >
          <img src={creature.src} alt="" aria-hidden="true" className={creature.imgClass} />
        </div>
      ))}

      {bubbles.map((bubble, i) => (
        <div
          key={i}
          ref={(el) => { bubbleRefs.current[i] = el; }}
          className="absolute left-0 top-0 opacity-10 will-change-transform"
          style={{ transform: toTransform(bubble.place(0)) }}
        >
          <div className={bubble.dotClass}></div>
        </div>
      ))}
    </div>
  );
};

export default ScrollBackground;
