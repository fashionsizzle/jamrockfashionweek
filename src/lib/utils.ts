export type ClassValue = string | number | false | null | undefined;

/**
 * Minimal class-name combiner (no clsx/tailwind-merge dependency).
 * Filters out falsy values and joins the rest with a space.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
