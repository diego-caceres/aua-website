import FloatingDice from './FloatingDice';

interface DiceBrandProps {
  href?: string;
  textColor?: string;
  separatorColor?: string;
  diceColor?: string;
}

export default function DiceBrand({
  href = '#',
  textColor = 'var(--color-accent-1)',
  separatorColor = 'var(--color-accent-2)',
  diceColor,
}: DiceBrandProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-sm font-medium inline-flex items-center gap-5"
      style={{ color: textColor }}
    >
      <span>
        built by diegocaceres<span style={{ color: separatorColor }}>.</span>dev
      </span>
      <FloatingDice color={diceColor ?? textColor} />
    </a>
  );
}
