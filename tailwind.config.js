module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },//screen ends here
      colors:{
        orange:  'hsl(26, 100%, 55%)',
        paleOrange : 'hsl(25, 100%, 94%)',
        grayishBlue : 'hsl(220, 14%, 75%)',
        lightGrayishBlue : 'hsl(223, 64%, 98%)',
      } //color ends here
    }, //extend ends here
  }, //theme ends here
  plugins: [],
}
