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
    'marrom': {
        '50': '#faf7f0',
        '100': '#f1e7d4',
        '200': '#e3cda4',
        '300': '#d4b075',
        '400': '#ca9855',
        '500': '#c3854c',
        '600': '#a96336',
        '700': '#8d4a30',
        '800': '#743c2c',
        '900': '#603327',
        '950': '#361a12',
    },

    'crater-brown': {
        '50': '#f9f5f3',
        '100': '#f2e8e2',
        '200': '#e4cfc4',
        '300': '#d2af9f',
        '400': '#bf8a78',
        '500': '#b1705e',
        '600': '#a45e52',
        '700': '#894c45',
        '800': '#6f3f3d',
        '900': '#4a2c2a',
        '950': '#301b1a',
    },
    'cape-palliser': {
        '50': '#f9f6f1',
        '100': '#eee6d7',
        '200': '#dbcbac',
        '300': '#c9ad80',
        '400': '#bc9663',
        '500': '#b17d4f',
        '600': '#9c6644',
        '700': '#824f3b',
        '800': '#6b4135',
        '900': '#59372e',
        '950': '#321c16',
    },
    
    
    
      
      },
      backgroundImage:{
        "wave":"url(../public/wave-haikei.svg)",
        "blob":"url(../public/blob-scene-haikei.svg)",
        "blob-lg":"url(../public/blob-lg.svg)",
        "bola":"url(../public/bola.svg)",
      }
      ,

      fontFamily:{
        poetsenOne:"var(--font-PoetsenOne)",
        roboto:"var(--font-roboto)",
        poppins:"var(--font-poppins)"
      },
      screens:{
        'xxsm':'375px'
      }
      
    },
  },
  plugins: [],
};
export default config;
