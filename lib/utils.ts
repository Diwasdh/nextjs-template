// lib/utils.ts

// Classnames helper (Tailwind friendly)
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Sleep / delay
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Slug generator
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

// Random ID generator
export const randomId = (length = 8) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + length);

// Date formatting
export const formatDate = (date: Date, locale = 'en-US') =>
  new Intl.DateTimeFormat(locale).format(date);

// Clamp a number
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
