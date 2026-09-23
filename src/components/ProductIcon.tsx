import type { ProductIconName } from "../data";

interface ProductIconProps {
  name: ProductIconName;
}

function ProductIcon({ name }: ProductIconProps) {
  if (name === "shirt") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 12 12 17 5 30l10 5 4-7v24h26V28l4 7 10-5-7-13-10-5c-2 5-18 5-20 0Z" />
      </svg>
    );
  }

  if (name === "glove") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M17 45c-7-5-10-14-7-22 2-5 8-8 14-5l4 2c2-5 9-8 14-5 7 4 11 13 9 22-1 5-4 10-8 14H24c-3-1-5-3-7-6Z" />
        <path d="M22 50h23v8H22z" />
      </svg>
    );
  }

  if (name === "wrap") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="29" cy="31" r="18" />
        <circle cx="29" cy="31" r="8" />
        <path d="M45 36h12v16H40c-4 0-7-3-7-7" />
      </svg>
    );
  }

  if (name === "cap") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 35c0-13 8-22 20-22 11 0 18 8 18 20H13v2Z" />
        <path d="M13 35c8 4 17 5 27 2 8-2 14-1 19 3-10 8-31 10-46 3V35Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 12h15l3 12 3-12h15l5 18-8 5-2-7-2 26H21l-2-26-2 7-8-5 5-18Z" />
    </svg>
  );
}

export default ProductIcon;
