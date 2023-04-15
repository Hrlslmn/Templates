const path = require('path')

module.exports = {
    entry:"./src/app.js",
    output:{
        path : path.resolve(__dirname , 'dist/assets'),
        filename : 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist/'),
        devMiddleware: {
          publicPath: '/assets/'
        },
        port: 3000,
        hot: "only"
      },
      module:{
        //setting rules for only specific js files
        rules:[{
          //files ending with .js 
          test: /\.js$/,
          //exclude any js files from node_modules
          exclude: /node_modules/,
          //Indicate which loader to use
          use:{
            loader:'babel-loader',
            options:{
              presets:['@babel/preset-env']
            }
          }
        }]
      }
    };
