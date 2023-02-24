import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'
import DisablePiracy from './DisablePiracy.vue'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-after': () => h(Comments),
            'layout-top': () => h(DisablePiracy)
        })
    }
}
