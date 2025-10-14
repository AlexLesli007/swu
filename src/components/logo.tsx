import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-labelledby="titleDesc"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
      >
        <title id="titleDesc">SwiftUnion Logo</title>
        <desc>A pink square with the letters SU in white.</desc>

        <rect
          width="100"
          height="100"
          fill="hsl(var(--primary))"
          rx="12"
        ></rect>
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fontSize="60"
          fontWeight="bold"
          fill="hsl(var(--primary-foreground))"
          fontFamily="'PT Sans', sans-serif"
        >
          SU
        </text>
      </svg>
      <div
        className="text-3xl font-bold"
        style={{
          color: 'hsl(var(--primary))',
          fontFamily: "'PT Sans', sans-serif",
        }}
      >
        SwiftUnion
      </div>
    </div>
  );
}
