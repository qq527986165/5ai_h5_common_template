const path = require('path');

module.exports = {
	lintOnSave: false,

	devServer: {
		open: true,

		proxy: {
			'/api': {
				target: 'https://mbh5.wuaitec.com',
				changeOrigin: true
			}
		}
	},

	outputDir: path.resolve(__dirname, './dist'),

	assetsDir: 'item',

	indexPath: 'index.html',

	productionSourceMap: false,

	configureWebpack: config => {
		Object.assign(config, {
			// 开发生产共同配置
			resolve: {
				extensions: ['.js', '.vue', '.json'],
				alias: {
					'vue$': 'vue/dist/vue.esm.js',
					'@': path.resolve(__dirname, './src'),
					'views': path.resolve(__dirname, './src/views'),
					'assets': path.resolve(__dirname, './src/assets'),
					'components': path.resolve(__dirname, './src/components'),
					'api': path.resolve(__dirname, './src/api'),
					'store': path.resolve(__dirname, './src/store'),
					'base': path.resolve(__dirname, './src/base'),
				}
			},

			externals: {},
		});
	}
};
