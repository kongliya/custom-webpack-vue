module.exports = {
    presets: [
        '@babel/env',
        {
            targets:{
                "browsers": ["> 1%","last 2 versions", "not ie <= 8"]
            },
            useBuiltIns: 'usage', // 设置以后,babel编译的时候就不用整个polyfills,只加载你使用的polyfills,这样就可以减少包的大小;
            corejs: 2, // corejs是一个给低版本浏览器提供接口的库,设置为false或者不设置就是引入的是corejs之中的库，而且是在全局中引入,也就是说侵入了全局的变量;
            // 如果你的全局有一个引入,不想要引入的库影响全局,就需要把corejs设置为2;
        }
    ]
}