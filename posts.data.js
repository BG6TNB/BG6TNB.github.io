import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
    transform(rawData) {
        return rawData
            .filter(post => {
                if (process.env.NODE_ENV === 'development') { return true }
                if (post.frontmatter.title && post.frontmatter.index !== false) { return true }
                return false
            })
            .map(post => {
                if (!post.frontmatter.title) {
                    post.frontmatter.title = '[ Title not defined ]'
                }
                if (post.frontmatter.index === false && post.frontmatter.title.indexOf('Unindexed') === -1) {
                    post.frontmatter.title = '[ Unindexed ]' + post.frontmatter.title
                }
                if (!post.frontmatter.date) {
                    post.frontmatter.date = '1970/01/01'
                }
                post.url = post.url.replace('/posts', '')
                return post
            })
            .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    }
})
