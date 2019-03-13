const path = require('path');

const config = {
    dev: {
        output: path.resolve(__dirname, '../dist'),
        hot: true,
		devtool: 'source-map',
		autoOpenBrowser: true,
		host: 'localhost',
		port: 8080,
    },
    prod: {
        
    }
};

module.exports = config;