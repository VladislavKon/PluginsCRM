const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },  
    entry: './Webresources/src/Main.ts',
    output: {
        filename: 'MainWebresources.js',
        path: path.resolve(__dirname, 'Webresources/dist'),
        libraryTarget: 'var',
        library: 'WebResources',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'Webresources/src')],
                use: 'ts-loader',
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],                
            },            
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'inline-source-map',
    mode: 'development',
    watch: true,
    watchOptions: {
      aggregateTimeout: 500,
      poll: 3000,
      ignored: /node_modules/
    },  
};