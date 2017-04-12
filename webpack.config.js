const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const createPageGenerator = require('./libs/create-page-generator');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const autoprefixer = require('autoprefixer');
const vendors = require('./vendors');

const NODE_ENV = process.env.NODE_ENV || 'production';
const PRODUCTION_MODE = NODE_ENV === 'production';
const MINIMIZE = process.env.MINIMIZE != null ? process.env.MINIMIZE === 'true' : PRODUCTION_MODE;

const paths = {
    src: path.resolve(__dirname, 'src'),
    generatedSrc: path.resolve(__dirname, 'generated_src'),
    pages: path.resolve(__dirname, 'src', 'pages'),
    dist: path.resolve(__dirname, 'dist')
};

const generatePage = createPageGenerator(paths.pages);

//правила обработки js
const jsRule = {
    test: /\.js$/,
    include: paths.src,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [['es2015', {modules: false}]]
        }
    }
};
//правила обработки шаблонов (pug)
const pugRule = {
    test: /\.pug$/,
    include: paths.src,
    use: [
        'apply-loader',
        {
            loader: 'pug-loader',
            options: {pretty: true}
        }
    ]
};
//правила обработки вендорных стилей
const vendorsStylesRule = {
    test: /\.css/,
    include: /node_modules/,
    use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    minimize: MINIMIZE,
                    sourceMap: true
                }
            }
        ]
    })
};
//правила обработки стилей приложения
const appStylesRule = {
    test: /\.styl/,
    include: [
        paths.src,
        paths.generatedSrc
    ],
    use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    minimize: MINIMIZE,
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
};
//правила обработки шрифтов
const fontsRule = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]?hash=[hash]',
            outputPath: 'fonts/',
            publicPath: '../fonts/'
        }
    }
};
//правила обработки шрифтов
const imagesRule = {
    test: /\.png$/,
    include: [
        paths.src,
        paths.generatedSrc
    ],
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]?hash=[hash]',
            outputPath: 'images/',
            publicPath: '../images/'
        }
    }
};

const common = {
    entry: {
        vendors: vendors,
        common: path.resolve(paths.pages, 'common'),
        index: path.resolve(paths.pages, 'index'),
        about: path.resolve(paths.pages, 'about')
    },
    output: {
        filename: 'js/[name].js?hash=[hash]',
        path: paths.dist
    },
    module: {
        rules: [
            jsRule,
            pugRule,
            vendorsStylesRule,
            appStylesRule,
            fontsRule,
            imagesRule
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.styl'],
        modules: ['node_modules', 'generated_src']
    },
    plugins: [
        new CleanWebpackPlugin([paths.dist], {root: __dirname}),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common', 'vendors'],
            minChunks: 2
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(paths.src, 'resources', 'images'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(paths.generatedSrc, 'sprite.png'),
                css: path.resolve(paths.generatedSrc, 'sprite.styl')
            },
            apiOptions: {
                cssImageRef: "~sprite.png"
            }
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].css?path=[contenthash]',
            // Похоже что webpack использует возвожности, недоступные в IE 8
            // соответственно динамическая загрузка стилей не поддерживается,
            // поэтому для отладки в IE 8 нужно закомментировать эту строку
            // disable: !PRODUCTION_MODE
        }),
        generatePage('index'),
        generatePage('about')
    ],
    devtool: 'source-map'
};

const production = {
    plugins: [
        ...uglifyJsPlugin()
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
switch(NODE_ENV) {
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

function uglifyJsPlugin() {
    const plugins = [];
    if (MINIMIZE) {
        console.log('!!!!');
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }
    return plugins
}