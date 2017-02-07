module.exports = {
    entry: {
        index: './src/js/index.js'    
    },
    output: {
        filename:'[name].js',
        path:__dirname + '/dist'
    },
     module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    watch: true
};
