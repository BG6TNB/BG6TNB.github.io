export default {
    lang: 'zh-CN',
    title: 'BG6TNB',
    description: '业余无线电爱好者、穿越机飞手，不定期翻译国外的优秀文章或原创内容。',
    head: [
        ['script', {
            async: true,
            'X-Content-Type-Options': 'nosniff',
            src: 'https://hm.baidu.com/hm.js?79bbcd8ef541b101c2c353b8efddc38d'
        }]
    ],
    themeConfig: {
        siteTitle: 'BG6TNB',
        sidebar: {
            'elrs': [
                {
                    text: 'ExpressLRS',
                    items: [
                        { text: 'Lua 脚本使用指南', link: '/elrs/lua-howto' }
                    ]
                }
            ]
        },
        footer: {
            message: '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0;margin:0 auto 5px;" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>本站所有文章没有额外声明的情况下均采用<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">《知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议》</a>进行许可。',
            copyright: 'Copyright © 2023-present BG6TNB'
        }
    },
    srcExclude: ['**/README.md']
}