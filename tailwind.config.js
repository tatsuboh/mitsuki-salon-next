/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['var(--font-noto-serif)'],
        'zen-maru': ['var(--font-zen-maru)'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out',
        glow: 'glow 2s ease-in-out infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
        bubble: 'bubbleFloat 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        bubbleFloat: {
          '0%': { opacity: '0', transform: 'translateY(100px) scale(0)' },
          '10%': { opacity: '0.5' },
          '50%': { opacity: '0.8', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-100vh) scale(0.5)' },
        },
      },
    },
  },
  plugins: [],
}