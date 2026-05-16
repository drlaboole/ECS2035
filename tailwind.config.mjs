/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Charte Livret Vert
        'ecs-green': {
          DEFAULT: '#00854B',
          dark: '#006B3D',
          light: '#E6F5EC',
          lighter: '#F4FBF6'
        },
        'ecs-grey': {
          DEFAULT: '#4B5563',
          light: '#9CA3AF'
        }
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        wider: '0.08em'
      }
    }
  },
  plugins: []
};
