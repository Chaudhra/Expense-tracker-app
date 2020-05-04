const path = require('path');

// Expose an object to another file
module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        // Tells webpack to run babel everytime it sees a .js file
        rules:[{
            loader:'babel-loader',
            test:/\.js$/, //$ sign says we are looking for any files that end in.js
            exclude:/node_modules/
        },{
            test: /\.s?css$/,  //The ? makes the s optional
            use:['style-loader','css-loader','sass-loader']  //Setup css inside of webpack. Use allows us to load multiple loaders in an array

        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true //For all 404 pages, send back the index.html file
    }
};

// loader lets you customize how a file is loaded
