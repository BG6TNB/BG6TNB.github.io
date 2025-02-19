import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'

export default defineConfig({
    lang: 'zh-CN',

    title: 'BG6TNB',
    description: "BG6TNB's blog",

    head: [
        ['script', {
            async: true,
            'X-Content-Type-Options': 'nosniff',
            src: 'https://hm.baidu.com/hm.js?79bbcd8ef541b101c2c353b8efddc38d'
        }]
    ],

    themeConfig: {
        siteTitle: 'BG6TNB',
        nav: [
            // { text: '全部文章', link: '/archive' },
            // { text: '合集', link: '/series' },
            { text: '标签', link: '/tags' },
            { text: '开源项目', link: '/open-source' },
            { text: '关于', link: '/about' }
        ],
        sidebar: {},
        socialLinks: [
            { icon: 'github', link: 'https://github.com/BG6TNB/BG6TNB.github.io' }
        ],
        footer: {
            message: '<a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0;margin:0 auto 5px;" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>本站所有文章没有额外声明的情况下均采用<a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">《知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议》</a>进行许可。',
            copyright: 'Copyright © 2023-present BG6TNB'
        }
    },

    lastUpdated: true,

    sitemap: {
        hostname: 'https://bg6tnb.github.io/',
        transformItems: (items) => items.map(item => {
            // https://www.sitemaps.org/protocol.html
            item.changefreq = 'daily'
            return item
        })
    },

    srcExclude: ['**/README.md'],
    rewrites: {
        'pages/:page': ':page',
        'posts/:post': ':post',
        'posts/:series/:post': ':series/:post'
    },

    markdown: {
        preConfig: md => {
            md.use(container, 'translator', {

                validate: (params) => {
                    return params.trim().indexOf('translator') > -1
                },

                render: (tokens, idx) => {
                    if (tokens[idx].nesting === 1) {

                        const closeIdx = tokens.findIndex((token, index) => (index > idx && token.type === 'container_translator_close'))
                        const content = tokens.slice(idx, closeIdx).filter(token => token.content).map(token => md.render(token.content))
                        const commentIndex = content.findIndex(str => str.indexOf('<!--') > -1)

                        const original = content.slice(0, commentIndex)
                        const translation = content.slice((commentIndex + 1), content.length)

                        return `<details class="translator"><summary>${translation.join('')}</summary>`
                    }
                    return '</details>'
                }
            })
        }
    }
})
