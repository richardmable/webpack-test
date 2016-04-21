'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {  
    context: APP,
     entry: {
           app: ['webpack/hot/dev-server', './index.js']
    },
    plugins: [  
    	   new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: APP,
        filename: 'bundle.js'
    }
};
