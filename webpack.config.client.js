//const webpack = require('webpack');
const path = require('path');
const srcPath = path.resolve(__dirname, 'src/Public');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
   context: srcPath,
   target: 'web',

   entry: {
     //vendor: './symptom_selector/selector.js',
     app: '../js/app.js'
   },
   output: {
       path: srcPath,
       filename: '[name].bundle.js',
       publicPath: '/'
   },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                  presets:['es2015', 'react']
                }
            }

          ]

    },

    devtool: 'source-map'
};
