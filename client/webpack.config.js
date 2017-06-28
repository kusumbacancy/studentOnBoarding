var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var config = {
   entry: './src/main.js',

   output: {
      //path:path.join(__dirname,'/dist/'),
      path: path.join(__dirname, '../', 'public'),
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: process.env.PORT,
      //host:'192.168.1.86',
      historyApiFallback: true
   },
   resolve: {
      // modulesDirectories: ['node_modules', './src'],
        alias: {
          App: path.resolve(__dirname, 'src'),
          Common: path.resolve(__dirname, 'src/Common'),
          Redux: path.resolve(__dirname, 'src/redux'),
          Alert: path.resolve(__dirname, 'src/Common/Elements/Alert'),
          Debbie: path.resolve(__dirname, 'src/Common/Elements/Debbie'),
          moment: 'moment/moment.js',
        } ,
       extensions: ['.js', '.jsx', '.css']
   },
   module: {
      loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
			          query: {
                 presets: ['es2015', 'react', "stage-0"]
             }
          }
      ]
   },
   plugins: [
       new CopyWebpackPlugin([
           { from: path.join(__dirname,'/index.html'), to: path.join(__dirname, '../', 'public'), },
           { from: path.join(__dirname,'/src/assets'), to: path.join(__dirname, '../', 'public/assets') },

       ])
   ]
}

module.exports = config;
