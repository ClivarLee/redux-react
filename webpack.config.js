var webpack = require('webpack');
module.exports={
   entry:[
     './index.js',
     'whatwg-fetch'
   ],
    output:{
      filename:'dist/bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
        })
        ,
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify("production")
           }
        })
    ],
    module:{
      loaders:[
        {
          test:/\.jsx?$/,
          exclude:/(node_modules|bower_components)/,
          loader:'babel',
          query:{
            presets:['es2015','react']
          }
        },
        {
          test:/\.css$/,loader:'style!css'
        }
      ]

    }
}
