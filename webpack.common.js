const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    test_1: './src/test_1.js',
    test_2: './src/test_2.js',
    test_3: './src/test_3.js',
    test_4: './src/test_4.js',
    test_5: './src/test_5.js',
    test_6: './src/test_6.js',
    test_7: './src/test_7.js',
    test_8: './src/test_8.js',
    test_9: './src/test_9.js',
    test_10: './src/test_10.js',
    test_11: './src/test_11.js',
    test_12: './src/test_12.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.jpg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),
    //Section
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/videos.html',
      filename: './videos.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index']
    }),

    //Articles
    new HtmlWebpackPlugin({
      template: './src/articles/its-all-in-the-hat.html',
      filename: './articles/its-all-in-the-hat.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/a-bit-weird.html',
      filename: './articles/a-bit-weird.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/and-again-about-the-movies.html',
      filename: './articles/and-again-about-the-movies.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/cooler-than-lightning.html',
      filename: './articles/cooler-than-lightning.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/definitely-useless.html',
      filename: './articles/definitely-useless.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/egg-geometry.html',
      filename: './articles/egg-geometry.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/future-arrived.html',
      filename: './articles/future-arrived.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/gentle-dogo-tsap.html',
      filename: './articles/gentle-dogo-tsap.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/hit-my-door.html',
      filename: './articles/hit-my-door.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/invention-of-the-future.html',
      filename: './articles/invention-of-the-future.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/its-all-in-the-hat.html',
      filename: './articles/its-all-in-the-hat.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/kids-in-a-cage.html',
      filename: './articles/kids-in-a-cage.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/lets-read.html',
      filename: './articles/lets-read.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/make-it-in-time.html',
      filename: './articles/make-it-in-time.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/misunderstood-genius.html',
      filename: './articles/misunderstood-genius.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/not-only-in-the-movies.html',
      filename: './articles/not-only-in-the-movies.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/obvious-and-unlikely.html',
      filename: './articles/obvious-and-unlikely.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/only-in-the-movies.html',
      filename: './articles/only-in-the-movies.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/rails-rails-sleepers.html',
      filename: './articles/rails-rails-sleepers.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/soar-into-the-skies.html',
      filename: './articles/soar-into-the-skies.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/speed-i-am-speed.html',
      filename: './articles/speed-i-am-speed.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/this-is-cyberpunk.html',
      filename: './articles/this-is-cyberpunk.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/total-concentration.html',
      filename: './articles/total-concentration.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/viewing-the-future.html',
      filename: './articles/viewing-the-future.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/who-invented-the-parachute.html',
      filename: './articles/who-invented-the-parachute.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/wow-pipe-ah-ah.html',
      filename: './articles/wow-pipe-ah-ah.html',
      chunks: ['index']
    }),

    //tests
    new HtmlWebpackPlugin({
      template: './src/tests/what-kind-of-inventor-are-you.html',
      chunks: ['index', 'test_1'],
      filename: './tests/what-kind-of-inventor-are-you.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/inventing-the-ussr.html',
      filename: './tests/inventing-the-ussr.html',
      chunks: ['index', 'test_2']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/guess-who.html',
      filename: './tests/guess-who.html',
      chunks: ['index', 'test_3']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/created-by-us.html',
      filename: './tests/created-by-us.html',
      chunks: ['index', 'test_4']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/unusual-horse.html',
      filename: './tests/unusual-horse.html',
      chunks: ['index', 'test_5']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/just-lightning.html',
      filename: './tests/just-lightning.html',
      chunks: ['index', 'test_6']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/not-the-least-bit-weird.html',
      filename: './tests/not-the-least-bit-weird.html',
      chunks: ['index', 'test_7']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/reality-or-fantasy.html',
      filename: './tests/reality-or-fantasy.html',
      chunks: ['index', 'test_8']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/dont-hit-people.html',
      filename: './tests/dont-hit-people.html',
      chunks: ['index', 'test_9']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/benefit-in-good.html',
      filename: './tests/benefit-in-good.html',
      chunks: ['index', 'test_10']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/dynasphere-and-future.html',
      filename: './tests/dynasphere-and-future.html',
      chunks: ['index', 'test_11']
    }),

    new HtmlWebpackPlugin({
      template: './src/tests/total-concentration.html',
      filename: './tests/total-concentration.html',
      chunks: ['index', 'test_12']
    }),

    //videos
    new HtmlWebpackPlugin({
      template: './src/videos/its-just-a-coincidence.html',
      filename: './videos/its-just-a-coincidence.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/beauty-micrometer.html',
      filename: './videos/beauty-micrometer.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/better-over-the-years.html',
      filename: './videos/better-over-the-years.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/how-to-come-up.html',
      filename: './videos/how-to-come-up.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/i-want-to-fly.html',
      filename: './videos/i-want-to-fly.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/videos/into-the-snow.html',
      filename: './videos/into-the-snow.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/iron-washing.html',
      filename: './videos/iron-washing.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/its-just-a-coincidence.html',
      filename: './videos/its-just-a-coincidence.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/lets-go-lets-go.html',
      filename: './videos/lets-go-lets-go.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/new-oddities.html',
      filename: './videos/new-oddities.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/videos/weirder-and-earlier.html',
      filename: './videos/weirder-and-earlier.html',
      chunks: ['index']
    }),

    //Components
    new HtmlWebpackPlugin({
      template: './src/components.html',
      chunks: ['index'],
      filename: './components.html'
    }),

    //404

    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html',
      chunks: ['index']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/sidebar-white.html'),
        location: 'sidebar-white',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/sidebar-black.html'),
        location: 'sidebar-black',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/socialmedia.html'),
        location: 'socialmedia',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header.html'),
        location: 'header',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/icon.html'),
        location: 'icon',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/rec-cards-article.html'),
        location: 'rec-cards-article',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header-section.html'),
        location: 'header-section',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/rec-cards-tests.html'),
        location: 'rec-cards-tests',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
