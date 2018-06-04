const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const setPath = folderName => {
    return path.join(__dirname, folderName);
};

const isProd = () => {
    return process.env.NODE_ENV === 'production';
};

const buildingForLocal = () => {
    return NODE_ENV === 'development';
};

// const setPublicPath = () => {
//   let env = NODE_ENV;
//   if (env === 'production') {
//       return 'http://0.0.0.0/'
//   }
// };

const extractHTML = new HtmlWebpackPlugin({
    title: 'History Search',
    filename: 'index.html',
    inject: true,
    template: setPath('/src/tpl/tpl.ejs'),
    environment: process.env.NODE_ENV,
    isLocalBuild: buildingForLocal(),
    imgPath: (!buildingForLocal()) ? 'assets' : 'src/assets'
});

const config = {

}