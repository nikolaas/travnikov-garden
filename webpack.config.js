const activateProfile = require('./libs/activate-profile');
const activeProfile = activateProfile(process.env.npm_lifecycle_event, 'production');
const PRODUCTION_MODE = activeProfile.isProduction();
const path = require('path');
const merge = require('webpack-merge');
const findImports = require('find-imports');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const createPageGenerator = require('./libs/create-page-generator');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const createFileNameGenerator = require('./libs/create-file-name-generator');
const hashedName = createFileNameGenerator(PRODUCTION_MODE);


const paths = {
    src: path.resolve(__dirname, 'src'),
    pages: path.resolve(__dirname, 'src', 'pages'),
    dist: path.resolve(__dirname, 'dist')
};

const generatePage = createPageGenerator(paths.pages);

const dependencies = findImports('src/**/*.js', { flatten: true });

const common = {
    entry: {
        vendors: dependencies,
        common: path.resolve(paths.pages, 'common'),
        index: path.resolve(paths.pages, 'index'),
        about: path.resolve(paths.pages, 'about')
    },
    output: {
        filename: `js/${hashedName('[name]', 'js', '[chunkhash]', '[hash]')}`,
        path: paths.dist
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: paths.src,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]]
                    }
                }
            },
            {
                test: /\.pug$/,
                include: paths.src,
                use: [
                    'html-loader',
                    {
                        loader: 'pug-html-loader',
                        options: {pretty: true}
                    }
                ]
            },
            {
                test: /\.css/,
                include: /node_modules/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: PRODUCTION_MODE,
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.styl/,
                include: paths.src,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: PRODUCTION_MODE,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({browsers: 'last 2 versions'})
                                ]
                            }
                        },
                        {
                            loader: 'stylus-loader',
                            options: {
                                preferPathResolver: 'webpack',
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.styl']
    },
    plugins: [
        new CleanWebpackPlugin([paths.dist], {root: __dirname}),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common', 'vendors'],
            minChunks: 2
        }),
        new ExtractTextWebpackPlugin({
            filename: `css/${hashedName('[name]', 'css', '[contenthash]')}`,
            disable: !PRODUCTION_MODE
        }),
        generatePage('index'),
        generatePage('about')
    ],
    devtool: 'source-map'
};

const production = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
};

const development = {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: paths.dist,
        inline: true,
        hot: true
    }
};

let config;
switch(activeProfile.name) {
    case 'production': {
        config = merge(common, production);
        break;
    }
    case 'development': {
        config = merge(common, development);
        break;
    }
}

module.exports = config;