/*
 * Copyright (c)  2017 Caipi Labs .
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var path    = require("path")
var webpack = require("webpack")

var production = process.argv.indexOf("--production") > -1

module.exports = [
    {
        entry   : {
            "example/vanilla/NewsListComp" : ["./src/example/vanilla/NewsListComp.js", './src/example/vanilla/index.html'],
            "example/react/App" : ["./src/example/react/App.js", './src/example/react/index.html'],
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