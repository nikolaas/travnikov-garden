const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function createPageGenerator(pagesDir) {
    return function (page) {
        return new HtmlWebpackPlugin({
            filename: `${page}.html`,
            template: path.resolve(pagesDir, `${page}.pug`),
            chunks: ['vendors', 'common', page]
        });
    };
};