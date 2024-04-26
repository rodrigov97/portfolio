import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        default: {
          primary: '#14b8a6',
          secondary: '#0f766e',
          accent: '#5eead4',
          neutral: '#14b8a6',
          'base-100': '#212121',
          info: '#38bdf8',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#dc2626',
        },
      },
    ],
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};
export default config;
