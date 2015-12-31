/*
* webpack config js
*/
var webpack = require('webpack');
var path = require('path');
var htmlWebpack = require('html-webpack-plugin')
var openBrowser = require('open-browser-webpack-plugin')
var curEnv = require('./setEnv')


var config = {
	dev:path.join(__dirname,'app/'),
	dist:path.join(__dirname, 'dist/')
}
module.exports = {
	entry:{
		index:path.join(config.dev, 'js','index.js')
	},
	output:{
		path:path.join(config.dist),
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:"babel?presets[]=es2015,presets[]=react"
			}

		]
	},
	plugins:[
		new htmlWebpack({
			title:"redux",
			filename:'index.html',
			template:config.dev+'index.html'
		}),
		new openBrowser({
			url:curEnv+":3000"
		})
	],
	devServer:{
		contentBase:config.dist,

	}


}
