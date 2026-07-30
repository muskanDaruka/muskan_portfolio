import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRange(start: string, end: string) {
  return `${start} — ${end}`;
}

// export const basePath = process.env.NODE_ENV === "production" ? "/muskan_portfolio" : "";
export const basePath = "";