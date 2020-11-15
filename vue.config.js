module.exports = {
  // publicPath: './',
  // assetsDir: './'
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.229:80',
        // ws: true,
        changeOrigin: true,
				pathRewrite:{
						'^/api':''
				}
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
	configureWebpack:{
		resolve:{
			alias:{
				'assets':'@/assets'
			}
		}
	}
}