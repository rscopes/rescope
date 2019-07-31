/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *   MIT License
 *
 *   Copyright (c) 2018 Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

var fs      = require("fs")
var webpack = require("webpack")


var production    = process.argv.indexOf("--production") > -1
	|| process.argv.indexOf("-p") > -1;
var nodeExternals = require('webpack-node-externals');
module.exports    = [
	{
		entry    : {
			"ReScope": "./src/index.js",
		},
		devtool  : production ? "source-map" : 'inline-source-map',
		output   : {
			path         : __dirname,
			filename     : production ? "../../dist/[name].min.js" : "../../dist/[name].js",
			publicPath   : "/",
			libraryTarget: 'commonjs2'
		},
		target   : 'node', // in order to ignore built-in modules like path, fs, etc.
		externals: [nodeExternals(), './index', 'rscopes', 'rscopes'],
		resolve  : {
			extensions: [
				"",
				".js",
				".json",
			],
		},
		
		module : {
			loaders: [
				{
					test   : /\.js$/,
					exclude: /node_modules/,
					loader : 'babel-loader',
					query  : {
						
						cacheDirectory: true, //important for performance
						presets       : [
							'babel-preset-react',
							'babel-preset-es2015',
							'babel-preset-stage-0'
						
						].map(require.resolve),
						plugins       : [
							"babel-plugin-syntax-dynamic-import",
							"babel-plugin-add-module-exports",
							'babel-plugin-transform-decorators-legacy'
						].map(require.resolve)
					}
				},
				{
					test   : /\.json$/,
					loaders: [
						"json",
					],
				},
				{
					test   : /\.(html|txt)$/,
					loaders: [
						"file-loader?name=[path][name].[ext]&context=./src",
					],
				},
			],
		},
		plugins: (
			[
				new webpack.BannerPlugin(fs.readFileSync("./etc/wp/LICENCE.HEAD.MD").toString()),
				
				new webpack.DefinePlugin({
					                         __PROD__: production
				                         }),
				production ? new webpack.optimize.UglifyJsPlugin(
					{
						compress: {
							screw_ie8   : true, // React doesn't support IE8
							warnings    : false,
							drop_console: true
						},
						mangle  : {
							screw_ie8: true
						},
						output  : {
							comments : false,
							screw_ie8: true
						}
					}) : p => false,
			
			]
		),
	},
	{
		entry  : {
			"ReScope": "./src/index.js",
		},
		devtool: production ? "source-map" : 'inline-source-map',
		output : {
			path         : __dirname,
			filename     : production ? "../../dist/[name].browser.min.js" : "../../dist/[name].browser.js",
			publicPath   : "/",
			libraryTarget: 'var'
		},
		
		resolve: {
			extensions: [
				"",
				".js",
				".json",
			],
		},
		
		module : {
			loaders: [
				{
					test   : /\.js$/,
					exclude: /node_modules/,
					loader : 'babel-loader',
					query  : {
						
						presets: [
							'babel-preset-react',
							'babel-preset-es2015',
							'babel-preset-stage-0'
						].map(require.resolve),
						plugins: [
							"babel-plugin-add-module-exports",
						].map(require.resolve)
					}
				},
				{
					test   : /\.json$/,
					loaders: [
						"json",
					],
				},
				{
					test   : /\.(html|txt)$/,
					loaders: [
						"file-loader?name=[path][name].[ext]&context=./src",
					],
				},
			],
		},
		plugins: (
			[
				new webpack.DefinePlugin({
					                         __PROD__: production
				                         }),
				production ? new webpack.optimize.UglifyJsPlugin(
					{
						compress: {
							screw_ie8   : true, // React doesn't support IE8
							warnings    : false,
							drop_console: true
						},
						mangle  : {
							screw_ie8: true
						},
						output  : {
							comments : false,
							screw_ie8: true
						}
					}) : p => false,
			
			]
		),
		
	}
]