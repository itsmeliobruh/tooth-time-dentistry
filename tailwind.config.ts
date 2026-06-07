import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C937E6',
        'primary-dark': '#9A1DB8',
        'primary-light': '#E07AF0',
        secondary: '#2FA5A7',
        'secondary-dark': '#1E7A7C',
        'bg-pearl': '#F8F3FF',
        'text-dark': '#1A0E26',
        'text-body': '#3D2F4F',
        muted: '#7A6A8A',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
