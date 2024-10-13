import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': {
        '50': '#f4f8fb',
        '100': '#e8eff6',
        '200': '#cbe0ec',
        '300': '#9dc6dc',
        '400': '#68a6c8',
        '500': '#458cb2',
        '600': '#337096',
        '700': '#2b5a79',
        '800': '#264c64',
        '900': '#254155',
        '950': '#182b39',
    },
    'laranja': {
        '50': '#fff8eb',
        '100': '#ffebc6',
        '200': '#ffcd72',
        '300': '#ffb94a',
        '400': '#ff9f20',
        '500': '#f97a07',
        '600': '#dd5502',
        '700': '#b73806',
        '800': '#942a0c',
        '900': '#7a230d',
        '950': '#460f02',
    },
    
    
      },
      fontFamily:{
        poetsenOne:"var(--font-PoetsenOne)",
        roboto:"var(--font-roboto)"
      }
    },
  },
  plugins: [],
};
export default config;
