module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'application.js'
    },

    devServer: {
        inline: true,
        port: 5000,
        historyApiFallback: true,
        proxy: {
            '/api*' : {
                target: 'http://localhost:8000'
            }
        },
        contentBase: './'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-1']
            }
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}