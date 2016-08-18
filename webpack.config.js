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
		},
		{ 
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},
		{ 
	      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		  loader: "file"
		},
        { 
        	test: /\.(woff|woff2)/,
        	loader:"url-loader?prefix=font/&limit=5000&minetype=application/font-woff"
        },
        { 
        	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        	loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        },
        { 
        	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        	loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }]
	},
	plugins: [
		new ExtractTextPlugin('styles.css',{allChunks:true})
	]
}
