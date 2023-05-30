const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'container',
            remotes: {
                ReactMFERemoteApp: `reactMFE@${process.env.PRODUCTION_DOMAIN}/reactapp/remoteEntry.js`,
                RemoteVueApp: `vueRemote@${process.env.PRODUCTION_DOMAIN}/vueapp/remoteEntry.js`
            },
            shared: ['react', 'react-dom']
        }),
    ]

}

module.exports = merge(commonConfig, prodConfig)
