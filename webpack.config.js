const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    cache: true,
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./js/app.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        port: 7000,
        stats: {
            colors: true,
            timings: true
        }
    },
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{presets: ['es2015']}
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourceMap"
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use:'css-loader!sass-loader'
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/screen.css"),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            hash: true
        })
    ]
};

module.exports = config;