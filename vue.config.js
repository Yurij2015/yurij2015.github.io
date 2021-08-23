// файл vue.config.js должен быть расположен в корневом каталоге проекта

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/'
}