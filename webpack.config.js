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
            use:['ts-loader'],
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