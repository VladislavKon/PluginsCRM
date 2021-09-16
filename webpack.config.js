const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env)=> {
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserPlugin({
    //             terserOptions: {
    //                 format: {
    //                     comments: false,
    //                 },
    //             },
    //             extractComments: false,
    //         }),
    //     ],
    // },  
    // entry: './Webresources/src/Main.ts',
    // output: {
    //     filename: 'MainWebresources.js',
    //     path: path.resolve(__dirname, 'Webresources/dist'),
    //     libraryTarget: 'var',
    //     library: 'WebResources',
    // },
    // { rules
            //     test: /\.ts$/,
            //     include: [path.resolve(__dirname, 'Webresources/src')],
            //     use: 'ts-loader',
            // },
    const modules = {
        js: {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        debug:{
                test: /\.(js|tsx)$/,
                use: "source-map-loader",
                enforce: "pre"
            },
        css:{
                test: /\.css/,
                use: ["style-loader", "css-loader"],                
            },
    }
    const resolve = {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    }
    // devtool: 'inline-source-map',
    // mode: 'development',
    // watch: true,
    // watchOptions: {
    //   aggregateTimeout: 500,
    //   poll: 3000,
    //   ignored: /node_modules/
    // },
    return {
        modules,
        resolve,
    }  
};