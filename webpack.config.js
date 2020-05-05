
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) =>{
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    console.log('env',env);
    return {
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
            //use:['style-loader','css-loader','sass-loader']  //Setup css inside of webpack. Use allows us to load multiple loaders in an array
            use: CSSExtract.extract({
                use: [{
                    loader: 'css-loader',
                    options:{
                        sourceMap:true       //sourcemap makes debugging more user friendly in the console
                    }
                }, {
                    loader: 'sass-loader',
                    options:{
                        sourceMap:true
                    }
                }
            ]
            })
        }]
    },
    plugins:[CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true //For all 404 pages, send back the index.html file
    }
    };
};

// Expose an object to another file
// module.exports = {
    
// };

// loader lets you customize how a file is loaded
