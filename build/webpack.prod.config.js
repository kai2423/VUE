const merge = require('webpack-merge');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config');

const proWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		})
	]
});

module.exports = proWebpackConfig;