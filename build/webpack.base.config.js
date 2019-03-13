const path = require('path');
const config = require('../config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/main.js',
    output: {
        filename: '[name]_[hash:8].js',
        path: config.dev.output
    },
    resolve: {
		extensions: ['.js', '.vue', 'json'],
		alias: {
            '@': path.resolve(__dirname, '../src'),
            '_c': path.resolve(__dirname, '../src/components/')
		}
	},
    module: {
        rules: [
			{
				test: /\.vue$/,
				use: [
                    'vue-loader',
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
				test: /\.less$/,
				use: [ 
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
                exclude: /node_modules/
            },
            {
				test: /\.css$/,
				use: [ 
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff?|eot|ttf|otf|svg|woff2)(\?.*)?$/,
                use: [ 'url-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
			filename: '[name]_[hash:8].css'
		})
	]
};