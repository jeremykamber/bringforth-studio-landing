module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bf: {
          lightBg: '#F2F2F2',
          darkBg: '#131313',
          primaryLight: '#000000',
          primaryDark: '#ffffff'
        }
      }
    }
  },
  plugins: []
};
