import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/malahiteam/*.md', {
    transform(rawData) {
        return Object.entries(rawData.reduce((a, b) => {
            if (b.frontmatter.title && b.frontmatter.index !== false && b.frontmatter.tag) {
                if (Object.keys(a).indexOf(b.frontmatter.tag) > -1) {
                    a[b.frontmatter.tag].push(b)
                    return a
                }
                a[b.frontmatter.tag] = [b]
            }
            return a
        }, []))
    }
})
