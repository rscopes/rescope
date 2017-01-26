var path    = require("path")
var webpack = require("webpack")

var production = process.argv.indexOf("--production") > -1

module.exports = [
    {
        entry   : {
            "example/vanilla/NewsListComp" : ["./src/example/vanilla/NewsListComp.js", './src/example/vanilla/index.html'],
        },
        devtool : 'source-map',
        // description de nos sorties
        output  : {
            path       : __dirname,
            filename   : "[name].js",
            publicPath : "/",
        },

        resolve : {
            extensions : [
                "",
                ".js",
                ".json",
            ],
        },

        module  : {
            loaders : [
                {
                    test    : /\.js$/,
                    exclude : /node_modules/,
                    loader  : 'babel-loader',
                    query   : {

                        presets : [
                            'babel-preset-react',
                            'babel-preset-es2015',
                            'babel-preset-stage-0'
                        ].map(require.resolve),
                        plugins : [
                            "babel-plugin-add-module-exports",
                        ].map(require.resolve)
                    }
                },
                {
                    test    : /\.json$/,
                    loaders : [
                        "json",
                    ],
                },
                {
                    test    : /\.(html|txt)$/,
                    loaders : [
                        "file-loader?name=[path][name].[ext]&context=./src",
                    ],
                },
            ],
        },
        plugins : (
            [
                new webpack.DefinePlugin({
                    __PROD__ : production
                }),
            ]
        ),

    }
]