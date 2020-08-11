const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: "./src/pages/index.js" },
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // применять это правило только к CSS-файлам
                test: /\.css$/,
                // при обработке этих файлов нужно использовать
                // MiniCssExtractPlugin.loader и css-loader
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1
                      }
                    },
                    'postcss-loader'
                  ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // регулярное выражение, которое ищет все файлы с такими расширениями
                test: /\.(png|svg|jpg|gif|woff2|woff)$/,
                // при обработке этих файлов нужно использовать file-loader
                use: [
                    {
                        loader: 'file-loader',
                    },
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html' // путь к файлу index.html
    }),
    new MiniCssExtractPlugin(),
    ],


};

