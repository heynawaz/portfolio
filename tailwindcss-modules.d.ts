// tailwindcss-modules.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
  export default function flattenColorPalette(object: Record<string, any>): Record<string, string>;
}
