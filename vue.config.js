module.exports = {
    chainWebpack: config => {
        const typeScript = config.module.rule('typescript')
        typeScript
            .rule('typescript')
            .test(/\.tsx?$/)
            .use('ts-loader')
            .loader('ts-loader')
            .options({
                appendTsSuffixTo: [/\.vue$/]
            });
        const vueLoader = config.module.rule('vue-loader')
        vueLoader
            .rule('vue-loader')
            .test(/\.vue?$/)
            .use('vue-loader')
            .loader('vue-loader')
    }
}