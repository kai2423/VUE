const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: config.dev.devtool,
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
		stats: 'minimal',
		hot: config.dev.hot,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
    },
    plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
});

module.exports = devWebpackConfig;