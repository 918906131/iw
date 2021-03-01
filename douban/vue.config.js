module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.29:3000',
                pathRewrite: {
                    '^/api': ''
                },
            },
        }
    }
}