'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	context: __dirname + '/frontend',
	entry: {
		app: './app'
	},
	output: {
		path: 'ui',
		filename: 'build.js'
	},
	watch: NODE_ENV === 'development',
	watchOptions: {
		aggregateTimeout: 200
	},
	devtool: "source-map",
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('css-loader!resolve-url-loader!sass-loader')
		}]
	},
	plugins: [
		new ExtractTextPlugin('styles.css',{allChunks:true})
	]
}
