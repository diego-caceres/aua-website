import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { Play, Pause, Maximize, Minimize, Compass } from "lucide-react";
import { video360Url } from "../constants/info";

const Inmersion360 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const gyroEnabledRef = useRef(false);
  const alphaOffsetRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [started, setStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [gyroActive, setGyroActive] = useState(false);
  const [gyroSupported, setGyroSupported] = useState(false);

  useEffect(() => {
    const mainContent = document.querySelector("main");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
    setGyroSupported("DeviceOrientationEvent" in window);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Hidden video element as texture source
    const video = document.createElement("video");
    video.src = video360Url;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.playsInline = true;
    videoRef.current = video;

    // Renderer
    const width = container.clientWidth || 800;
    const height = Math.round(width * (9 / 16));
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Scene & camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);

    // Sphere with inverted normals — camera looks from inside
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    const sphere = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ map: texture })
    );
    scene.add(sphere);

    // View angles
    let lon = 0;
    let lat = 0;

    // --- Drag ---
    let isPointerDown = false;
    let prevX = 0;
    let prevY = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (gyroEnabledRef.current) return;
      isPointerDown = true;
      prevX = e.clientX;
      prevY = e.clientY;
      renderer.domElement.setPointerCapture(e.pointerId);
      renderer.domElement.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      lon -= (e.clientX - prevX) * 0.3;
      lat = Math.max(-85, Math.min(85, lat + (e.clientY - prevY) * 0.3));
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onPointerUp = () => {
      isPointerDown = false;
      renderer.domElement.style.cursor = gyroEnabledRef.current ? "default" : "grab";
    };

    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", onPointerUp);

    // --- Device orientation (gyroscope) ---
    const onDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!gyroEnabledRef.current) return;
      const { alpha, beta } = e;
      if (alpha === null || beta === null) return;

      // Calibrate on first reading so view starts from current direction
      if (alphaOffsetRef.current === null) alphaOffsetRef.current = alpha;

      lon = -(alpha - alphaOffsetRef.current);
      // beta: 0 = flat, 90 = upright portrait → shift so upright = lat 0
      lat = Math.max(-85, Math.min(85, -(beta - 90)));
    };

    window.addEventListener("deviceorientation", onDeviceOrientation);

    // Video event listeners
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onMeta = () => setDuration(video.duration);
    const onPlay = () => { setIsPlaying(true); setStarted(true); };
    const onPause = () => setIsPlaying(false);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    // Render loop
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);
      camera.lookAt(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );
      if (video.readyState >= 2) texture.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    // Resize — handles window resize and fullscreen transitions
    const onResize = () => {
      const w = container.clientWidth;
      const h = document.fullscreenElement
        ? window.innerHeight
        : Math.round(w * (9 / 16));
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("fullscreenchange", onResize);

    return () => {
      cancelAnimationFrame(raf);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("deviceorientation", onDeviceOrientation);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("fullscreenchange", onResize);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      renderer.dispose();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  const toggleGyro = async () => {
    if (gyroEnabledRef.current) {
      gyroEnabledRef.current = false;
      alphaOffsetRef.current = null;
      setGyroActive(false);
      if (containerRef.current?.querySelector("canvas")) {
        (containerRef.current.querySelector("canvas") as HTMLElement).style.cursor = "grab";
      }
      return;
    }
    // iOS 13+ requires explicit permission from a user gesture
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === "function"
    ) {
      const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
      if (permission !== "granted") return;
    }
    alphaOffsetRef.current = null; // recalibrate on next reading
    gyroEnabledRef.current = true;
    setGyroActive(true);
    if (containerRef.current?.querySelector("canvas")) {
      (containerRef.current.querySelector("canvas") as HTMLElement).style.cursor = "default";
    }
  };

  const toggleFullscreen = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (!document.fullscreenElement) {
      wrapper.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Number(e.target.value);
  };

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div>
          <Link
            to="/gallery"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 md:mb-0 md:fixed md:left-6 md:top-36 md:z-20 md:bg-black md:bg-opacity-40 md:px-3 md:py-1 md:rounded-full md:shadow-lg"
            style={{ pointerEvents: "auto" }}
          >
            ← Galería
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 border-l-4 border-blue-400 pl-3">
          Acompañanos a explorar el fondo del mar en apnea!
        </h1>
        <p className="text-blue-200 mb-8 pl-4">
          {gyroActive
            ? "Inmersión en 360° - Mové el teléfono para explorar la inmersión."
            : "Inmersión en 360° - Haz clic y arrastra para explorar la inmersión en todas direcciones."}
        </p>

        <div ref={wrapperRef} className="rounded-xl overflow-hidden shadow-2xl bg-black">
          <div className="relative">
            <div ref={containerRef} className="w-full" />

            {!started && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 rounded-full bg-blue-500/80 flex items-center justify-center hover:bg-blue-400/90 transition-colors">
                  <Play size={36} className="text-white ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 px-3 py-2 bg-black/60">
            <button
              onClick={togglePlay}
              className="text-white hover:text-blue-300 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <span className="text-xs text-blue-300/70 w-10 shrink-0">
              {fmt(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={seek}
              className="flex-1 h-1 accent-blue-400"
            />
            <span className="text-xs text-blue-300/70 w-10 shrink-0 text-right">
              {fmt(duration)}
            </span>
            {gyroSupported && (
              <button
                onClick={toggleGyro}
                className={`transition-colors ml-1 ${
                  gyroActive ? "text-blue-400" : "text-white hover:text-blue-300"
                }`}
                title={gyroActive ? "Desactivar giroscopio" : "Activar giroscopio"}
              >
                <Compass size={20} />
              </button>
            )}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-blue-300 transition-colors ml-1"
              title="Pantalla completa"
            >
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </div>

        <p className="text-blue-300/60 text-sm mt-3 text-center">
          Filmado con cámara Insta360 · Mejor experiencia en pantalla completa
        </p>
      </div>
    </div>
  );
};

export default Inmersion360;
