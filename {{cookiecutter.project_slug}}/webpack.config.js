const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

const getNodeModules = () => {
	return fs.readdirSync('node_modules')
		.filter((x) => ['.bin'].indexOf(x) === -1)
		.map((mod) => 'commonjs ' + mod);
};

const getPlugins = () => [
	new CleanWebpackPlugin()
];

const getModuleRules = () => [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader"
		}
	}
];

module.exports = {
	target: 'node',
	entry: './src/index.js',
	output: {
		path: distPath,
		filename: 'bundle.js'
	},
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: true,
		__dirname: true
	},
	devtool: 'sourcemap',
	externals: getNodeModules(),
	module: { rules: getModuleRules() },
	plugins: getPlugins()
};
