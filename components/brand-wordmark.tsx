import React from "react";

type BrandWordmarkProps = {
  variant: "header" | "hero";
};

const variantClassName = {
  header: "brand-wordmark--header text-base font-semibold leading-none",
  hero: "brand-wordmark--hero text-5xl font-semibold leading-none sm:text-7xl",
} as const;

export function BrandWordmark({ variant }: BrandWordmarkProps) {
  return (
    <span className={`brand-wordmark ${variantClassName[variant]}`}>
      <span className="brand-word brand-word--good">Good</span>{" "}
      <span className="brand-word brand-word--code">Code</span>{" "}
      <span className="brand-word brand-word--bad">Bad</span>{" "}
      <span className="brand-word brand-word--code">Code</span>
    </span>
  );
}
