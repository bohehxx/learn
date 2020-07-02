const webpack = require('./node_modules/webpack');

module.exports = {
    output: {
        filename: '[name].[chunkhash].js'
    },
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            path: 'manifest.json',
            name: '[name]_[chunkhash]',
            context: __dirname
        })
    ]
};
