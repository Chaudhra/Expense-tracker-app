const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// will be 'production' on Heroku, 'test' when testing, or 'development' otherwise
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// If NODE_ENV is set to test (from package.json Jest property) then we''' use
// encironment variables from .env.test to connect to a test firebase DB
// This also means that process.env now has keys and values defined in the specific .env file
// The dotenv npm package is used to load environment variables from a .env file into process.env
if (process.env.NODE_ENV === 'test'){
    require('dotenv').config({path:'.env.test'});
}else if (process.env.NODE_ENV === 'development'){
    require('dotenv').config({path:'.env.development'});
};


module.exports = (env) =>{
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    console.log('env',env);
    return {
        entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public','dist'),
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
    plugins:[
        CSSExtract,
        // Node ENV variables do not get passed down to client side JS. For security reasons. 
        // We manually pass them to the client side JS
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_API_ID': JSON.stringify(process.env.FIREBASE_API_ID),
            'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
        })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true, //For all 404 pages, send back the index.html file
        publicPath:'/dist/'  //folder for compiled assets to live
    }
    };
};

// Expose an object to another file
// module.exports = {
    
// };

// loader lets you customize how a file is loaded
