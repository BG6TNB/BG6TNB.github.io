import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
    transform(rawData) {
        const data = rawData
            .filter(post => {
                if (process.env.NODE_ENV === 'development') { return true }
                if (post.frontmatter.title && post.frontmatter.index !== false && post.frontmatter.tag) { return true }
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

                return post
            })
            .reduce((result, post) => {
                const temp = post.url.split('/')
                if (temp.length === 3) { return result }

                const series = temp[2]
                if (Object.keys(result).indexOf(series) === -1) {
                    result[series] = []
                }

                post.url = post.url.replace('/posts', '')
                
                result[series].push(post)
                return result
            }, {})
        return Object.entries(data)
    }
})
