const { resolve } = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, 'public'),
        port: 3000,
        historyApiFallback: true
    }
}