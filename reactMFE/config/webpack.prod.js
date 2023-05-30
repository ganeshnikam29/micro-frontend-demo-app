const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactMFE',
            filename: 'remoteEntry.js',
            exposes: {
                "./ReactMFEApp": './src/bootstrap'
            },
            shared: ['react', 'react-dom']
        }),
       
    ]

}

module.exports = merge(commonConfig, prodConfig)
