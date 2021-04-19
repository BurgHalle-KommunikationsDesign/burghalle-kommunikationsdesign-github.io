import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#7b7b7b'
  },

  pwa: {
    icon: {
      fileName: 'favicon.png'
    }
  },

  generate: {
    dir: 'docs'
  }
})
