/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #A259FF 0%, #613599 100%)',
      },
      colors: {
        customGray: '#F5F5F5',
      },
    },
  },
  plugins: [],
};
