module.exports = {
  content: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.ts']
  },
  theme: {
    extend: {
      colors: {
        'gray-black': '#262626',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
