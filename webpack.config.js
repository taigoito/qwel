module.exports = {
  mode: 'production',
  entry: './assets/js/init.js',
  output: {
   path: `${__dirname}/assets/`,
   filename: 'init.js'
  },
  module: {
   rules: [
    {
     test: /.js$/,
     use: {
      loader: 'babel-loader',
      options: {
       presets: ['@babel/preset-env']
      }
     }
    }
   ]
  }
 }
