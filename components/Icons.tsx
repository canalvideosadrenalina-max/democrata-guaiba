import type { ReactNode } from "react";
import type { ValueIcon } from "@/lib/content";

type IconProps = {
  className?: string;
};

function Glyph({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function DemocracyIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M4 20h16" />
      <path d="M6 20V10" />
      <path d="M10 20V10" />
      <path d="M14 20V10" />
      <path d="M18 20V10" />
      <path d="M4 10h16" />
      <path d="M12 3l8 7H4l8-7z" />
    </Glyph>
  );
}

export function RepresentationIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <circle cx="7" cy="8" r="2" />
      <circle cx="17" cy="8" r="2" />
      <circle cx="12" cy="11" r="2" />
      <path d="M3.8 19c.3-2.2 1.6-3.4 3.2-3.4S9.8 16.8 10.2 19" />
      <path d="M13.8 19c.3-2.2 1.6-3.4 3.2-3.4s2.8 1.2 3.2 3.4" />
      <path d="M8.8 19c.3-2.4 1.5-3.6 3.2-3.6s2.9 1.2 3.2 3.6" />
    </Glyph>
  );
}

export function RightsIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <circle cx="12" cy="7" r="2.4" />
      <path d="M8 20c.4-2.8 1.8-4.2 4-4.2s3.6 1.4 4 4.2" />
      <path d="M4 12h4.2" />
      <path d="M15.8 12H20" />
    </Glyph>
  );
}

export function EnvironmentIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M5 19C6 12 11 5 19 5c0 8-7 13-14 14z" />
      <path d="M9 15c1.6-1.8 3.4-4 5.5-6.5" />
    </Glyph>
  );
}

export function EqualityIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <circle cx="8" cy="7" r="2" />
      <circle cx="16" cy="7" r="2" />
      <path d="M4.5 19c.4-2.6 1.8-4 3.5-4s3.1 1.4 3.5 4" />
      <path d="M12.5 19c.4-2.6 1.8-4 3.5-4s3.1 1.4 3.5 4" />
      <path d="M4 12h16" />
    </Glyph>
  );
}

export function ProgressIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M12 21V9" />
      <path d="M12 9c0-3 2.2-5 5-5-0.4 3-1.6 5-5 5z" />
      <path d="M12 13c0-2.4-1.8-4-4.2-4 .4 2.4 1.6 4 4.2 4z" />
    </Glyph>
  );
}

const iconMap = {
  representation: RepresentationIcon,
  democracy: DemocracyIcon,
  progress: ProgressIcon,
  rights: RightsIcon,
  environment: EnvironmentIcon,
  equality: EqualityIcon,
} as const;

export function ValueIconGlyph({ name, className }: { name: ValueIcon; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h12" />
    </Glyph>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </Glyph>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Glyph>
  );
}
