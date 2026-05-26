import type { ReactNode, SVGProps } from "react";
import { trackIconKeys, type TrackIconKey } from "@/lib/content/track-icons";
import type { TrackSlug } from "@/lib/content/tracks";

type TrackIconProps = {
  track: TrackSlug;
  className?: string;
};

function IconSvg({
  children,
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

const iconShapes = {
  "code-2": (
    <>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m13 5-2 14" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.3-3.5 1.9 1.9 0 0 1 1.2-3.5h1A4 4 0 0 0 21 10a7 7 0 0 0-7-7h-2Z" />
      <circle cx="7.5" cy="10" r="0.7" />
      <circle cx="10.5" cy="7" r="0.7" />
      <circle cx="14.5" cy="7.5" r="0.7" />
    </>
  ),
  braces: (
    <>
      <path d="M8 4H7a3 3 0 0 0-3 3v1a3 3 0 0 1-2 3 3 3 0 0 1 2 3v3a3 3 0 0 0 3 3h1" />
      <path d="M16 4h1a3 3 0 0 1 3 3v1a3 3 0 0 0 2 3 3 3 0 0 0-2 3v3a3 3 0 0 1-3 3h-1" />
    </>
  ),
  brackets: (
    <>
      <path d="M8 4H5v16h3" />
      <path d="M16 4h3v16h-3" />
      <path d="M11 8h2" />
      <path d="M10 12h4" />
      <path d="M11 16h2" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.5" />
      <ellipse cx="12" cy="12" rx="8" ry="3" />
      <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)" />
    </>
  ),
  component: (
    <>
      <rect height="7" rx="1.5" width="7" x="4" y="4" />
      <rect height="7" rx="1.5" width="7" x="13" y="4" />
      <rect height="7" rx="1.5" width="7" x="4" y="13" />
      <path d="M13 17h7" />
      <path d="M17 13v7" />
    </>
  ),
  route: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 6h3a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8" />
    </>
  ),
  server: (
    <>
      <rect height="6" rx="2" width="16" x="4" y="4" />
      <rect height="6" rx="2" width="16" x="4" y="14" />
      <path d="M8 7h.01" />
      <path d="M8 17h.01" />
      <path d="M12 7h4" />
      <path d="M12 17h4" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="m8 8 3 7" />
      <path d="m16 8-3 7" />
      <path d="M8 7h8" />
    </>
  ),
  hexagon: (
    <>
      <path d="m12 3 7.5 4.5v9L12 21l-7.5-4.5v-9L12 3Z" />
      <path d="M9 9h6" />
      <path d="M9 12h6" />
      <path d="M9 15h4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  terminal: (
    <>
      <rect height="14" rx="2" width="18" x="3" y="5" />
      <path d="m7 10 3 2-3 2" />
      <path d="M12 15h5" />
    </>
  ),
  "file-code": (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v5h4" />
      <path d="m10 12-2 2 2 2" />
      <path d="m14 12 2 2-2 2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c8 1 14-5 14-14-9 0-15 6-14 14Z" />
      <path d="M5 19c3-6 7-9 14-14" />
      <path d="M9 18c0-3-1-5-3-7" />
    </>
  ),
  coffee: (
    <>
      <path d="M6 8h11v5a5 5 0 0 1-5 5H9a3 3 0 0 1-3-3V8Z" />
      <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3v2" />
      <path d="M12 3v2" />
      <path d="M16 3v2" />
      <path d="M5 21h14" />
    </>
  ),
  chip: (
    <>
      <rect height="12" rx="2" width="12" x="6" y="6" />
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M9 18v4" />
      <path d="M15 18v4" />
      <path d="M2 9h4" />
      <path d="M2 15h4" />
      <path d="M18 9h4" />
      <path d="M18 15h4" />
    </>
  ),
  "plus-plus": (
    <>
      <path d="M5 8h6" />
      <path d="M8 5v6" />
      <path d="M13 8h6" />
      <path d="M16 5v6" />
      <path d="M5 16h6" />
      <path d="M8 13v6" />
      <path d="M13 16h6" />
      <path d="M16 13v6" />
    </>
  ),
  hash: (
    <>
      <path d="M8 4 6 20" />
      <path d="M18 4l-2 16" />
      <path d="M4 9h17" />
      <path d="M3 15h17" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.5-3.1 7.5-8 9-4.9-1.5-8-4.5-8-9V6l8-3Z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </>
  ),
  "git-branch": (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h4a6 6 0 0 1 6 6v4" />
      <path d="M6 8v10" />
    </>
  ),
  zap: (
    <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </>
  ),
  gauge: (
    <>
      <path d="M5 19a8 8 0 1 1 14 0" />
      <path d="m12 15 4-4" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
      <path d="M12 9h.01" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12 4 7.5" />
      <path d="m12 12 8-4.5" />
      <path d="M12 12v9" />
    </>
  ),
  wind: (
    <>
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M4 13h14a3 3 0 1 1-3 3" />
      <path d="M3 18h7" />
    </>
  ),
} as const satisfies Record<TrackIconKey, ReactNode>;

export function TrackIcon({ track, className = "h-5 w-5" }: TrackIconProps) {
  return (
    <IconSvg className={className} data-track-icon={track}>
      {iconShapes[trackIconKeys[track]]}
    </IconSvg>
  );
}
