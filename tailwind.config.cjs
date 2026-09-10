module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071A2B',
        darkblue: '#0B2440',
        bright: '#1677FF',
        greenish: '#20C997',
        offwhite: '#F7F9FC',
        darktext: '#102A43',
        muted: '#627D98'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(2,6,23,0.12)',
        subtle: '0 4px 10px rgba(11,36,64,0.06)'
      },
      fontFamily: {
        heading: ['Inter', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
