

var config = {

  devtool: 'eval-source-map',

  // We add an entry to connect to the hot loading middleware from
  // the page
  entry: './src/client/app/index.jsx',
  output: {
    path: './src/client/public',
    filename: 'bundle.js',
    publicPath: '/'
  },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};

module.exports = config;
