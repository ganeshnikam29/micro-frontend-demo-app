const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'container',
            remotes: {
                ReactMFERemoteApp: 'reactMFE@http://localhost:8081/remoteEntry.js',
                RemoteVueApp: `vueRemote@http://localhost:8082/remoteEntry.js`
            },
            shared: ['react', 'react-dom']
        }), 
    ]

}


module.exports = merge(commonConfig, devConfig)

