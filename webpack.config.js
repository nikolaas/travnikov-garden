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
const SpritesmithPlugin = require('webpack-spritesmith');
const autoprefixer = require('autoprefixer');
const createFileNameGenerator = require('./libs/create-file-name-generator');
const hashedName = createFileNameGenerator(PRODUCTION_MODE);

const paths = {
    src: path.resolve(__dirname, 'src'),
    generatedSrc: path.resolve(__dirname, 'generated_src'),
    pages: path.resolve(__dirname, 'src', 'pages'),
    dist: path.resolve(__dirname, 'dist')
};

const generatePage = createPageGenerator(paths.pages);

const dependencies = findImports('src/**/*.js', { flatten: true });

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
        'html-loader',
        {
            loader: 'pug-html-loader',
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
                    minimize: PRODUCTION_MODE,
                    sourceMap: true
                }
            }
        ]
    })
};
//правила обработки стилей приложения
const appStylesRule = {
    test: /\.styl/,
    include: /src|generated_src/,
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
};
//правила обработки шрифтов
const fontsRule = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '../fonts/[name].[ext]',
            outputPath: 'fonts/'
        }
    }
};
//правила обработки шрифтов
const imagesRule = {
    test: /\.png$/,
    include: /src|generated_src/,
    use: {
        loader: 'file-loader',
        options: {
            name: '../images/[name].[ext]',
            outputPath: 'images/'
        }
    }
};

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
        new CleanWebpackPlugin([paths.dist, paths.generatedSrc], {root: __dirname}),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common', 'vendors'],
            minChunks: 2
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