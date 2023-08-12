// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import Comments from './Comments.vue'

export default {
    extends: Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'doc-after': () => h(Comments)
        })
    },
    enhanceApp({ app, router, siteData }) {
        // ...
    }
}
