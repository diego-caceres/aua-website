const SIZE = 16;
const HALF = SIZE / 2;

type DotPos = [number, number];

const FACES: DotPos[][] = [
  /* 1 */ [[1, 1]],
  /* 2 */ [[0, 2], [2, 0]],
  /* 3 */ [[0, 2], [1, 1], [2, 0]],
  /* 4 */ [[0, 0], [0, 2], [2, 0], [2, 2]],
  /* 5 */ [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
  /* 6 */ [[0, 0], [1, 0], [2, 0], [0, 2], [1, 2], [2, 2]],
];

function Face({ dots, transform, color }: { dots: DotPos[]; transform: string; color: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: SIZE,
        height: SIZE,
        transform,
        backfaceVisibility: 'hidden',
        border: `1px solid ${color}`,
        borderRadius: 4,
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
        padding: 3,
        boxSizing: 'border-box',
        backgroundColor: 'rgba(255,255,255,0.03)',
      }}
    >
      {dots.map(([row, col], i) => (
        <div
          key={i}
          style={{
            gridRow: row + 1,
            gridColumn: col + 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 2, height: 2, borderRadius: '50%', backgroundColor: color }} />
        </div>
      ))}
    </div>
  );
}

interface FloatingDiceProps {
  color?: string;
}

export default function FloatingDice({ color = 'var(--color-accent-1)' }: FloatingDiceProps) {
  return (
    <>
      <style>{`
        @keyframes rotateDice {
          0%   { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(380deg) rotateY(360deg); }
        }
        @keyframes floatDice {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-3px); }
        }
      `}</style>

      <div
        style={{
          display: 'inline-block',
          width: SIZE,
          height: SIZE,
          verticalAlign: 'middle',
          pointerEvents: 'none',
          animation: 'floatDice 4s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: SIZE,
            height: SIZE,
            position: 'relative',
            transformStyle: 'preserve-3d',
            animation: 'rotateDice 7s linear infinite',
          }}
        >
          <Face dots={FACES[0]} transform={`translateZ(${HALF}px)`} color={color} />
          <Face dots={FACES[5]} transform={`rotateY(180deg) translateZ(${HALF}px)`} color={color} />
          <Face dots={FACES[1]} transform={`rotateY(90deg) translateZ(${HALF}px)`} color={color} />
          <Face dots={FACES[4]} transform={`rotateY(-90deg) translateZ(${HALF}px)`} color={color} />
          <Face dots={FACES[2]} transform={`rotateX(90deg) translateZ(${HALF}px)`} color={color} />
          <Face dots={FACES[3]} transform={`rotateX(-90deg) translateZ(${HALF}px)`} color={color} />
        </div>
      </div>
    </>
  );
}
