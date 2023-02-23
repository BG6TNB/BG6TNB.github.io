import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-after': () => h(Comments)
        })
    }
}
