
module.exports = {
    entry: {
        <%= variable %>: './src/<%= repo %>.js',
    },
    output: {
        path: "./dist",
        filename: "[name].bundle.js",
        library: '<%= variable %>',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'}
        ]
    },
};
