import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'max-1200': { 'max': '1200px' },
        'max-930': { 'max': '930px' },
        'max-800': { 'max': '800px' },
        'max-750': { 'max': '750px' },
        'max-720': { 'max': '720px' },
        'max-600': { 'max': '600px' },
        'max-700': { 'max': '700px' },
        'max-500': { 'max': '500px' },
      }
    },
  },
  plugins: [],
} satisfies Config;
