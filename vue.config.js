module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/yurij2015.github.io/'
        : '/'
    // https://github.com/Yurij2015/yurij2015.github.io
    // chainWebpack: config => {
    //     config
    //         .plugin('html')
    //         .tap(args => {
    //             args[0].title = 'Портфоліо'
    //             return args
    //         })
    // }
}