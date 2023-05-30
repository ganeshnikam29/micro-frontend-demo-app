const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'container',
            remotes: {
                ReactMFERemoteApp: `reactMFE@${domain}/reactapp/remoteEntry.js`,
                RemoteVueApp: `vueRemote@${domain}/vueapp/remoteEntry.js`
            },
            shared: ['react', 'react-dom']
        }),
    ]

}

module.exports = merge(commonConfig, prodConfig)
