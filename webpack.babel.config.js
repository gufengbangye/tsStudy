const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        index:'./src/reactHello.tsx'
    },
    output:{
        filename:'build.[name].js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.tsx?$/,
            use:[{
                loader: 'babel-loader',
                options:{
                    presets: [
                        "@babel/preset-typescript",
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ]
                }
            }],
            exclude: /.node_modules/
        }
        ]
    },
    devServer: {
        // contentBase: path.resolve(__dirname,'dist'),
        port: 3003
    },
    mode:'development',
    resolve:{
        extensions:['.ts','.tsx','.js']
    },
    plugins:[new htmlWebpackPlugin({
        template: path.resolve(__dirname,'index.html')
    })]
}