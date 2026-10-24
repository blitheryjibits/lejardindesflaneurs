"use client";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ArrowSwap = ({ size = 24 }: IconProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        overflow: "hidden",
        cursor: "pointer",
      }}
      className="arrow-swap"
    >
      {/* Arrow A */}
      <svg
        className="arrow arrow-a"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <title>arrow a</title>
        <path
          d="M6 12 H16 M16 12 L13 9 M16 12 L13 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Arrow B */}
      <svg
        className="arrow arrow-b"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <title>arrow b</title>
        <path
          d="M6 12 H16 M16 12 L13 9 M16 12 L13 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
