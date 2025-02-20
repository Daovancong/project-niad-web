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
        'max-480': { 'max': '480px' },
        'max-400': { 'max': '400px' },
        'max-320': { 'max': '320px' },
        'max-280': { 'max': '280px' },
        'max-240': { 'max': '240px' },
        'min-992': { 'min': '992px' }
      }
    },
  },
  plugins: [],
} satisfies Config;
