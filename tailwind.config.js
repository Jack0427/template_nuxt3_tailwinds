module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './composables/**/*.{js,ts}',
      './plugins/**/*.{js,ts}',
      './app.{js,ts,vue}'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', '微軟正黑體', 'sans-serif'] // 改預設字體
    },
    extend: {
      // 擴充
      fontFamily: {
        'google-sans': ['Noto Sans TC', '微軟正黑體', 'sans-serif'] // 新增字體
      },
      colors: {
        custcolor: {
          primary: '#26252F'
        },
        boxShadow: {
          primary: '0 1px 4px 0 rgba(0, 0, 0, 0.25)'
        }
      },
      variants: {
        extend: {}
      },
      plugins: []
    }
  }
}
