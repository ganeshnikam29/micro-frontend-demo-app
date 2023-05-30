const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin') 

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081
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

module.exports = merge(commonConfig, devConfig)

