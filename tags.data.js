import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
    transform(rawData) {
        return rawData
            .filter(post => {
                if (process.env.NODE_ENV === 'development') { return true }
                if (post.frontmatter.index !== false) { return true }
                return false
            })
            .reduce((a, b) => {
                if (!b.frontmatter.tag) { return a }

                switch (Object.prototype.toString.call(b.frontmatter.tag)) {
                    case '[object String]':
                        a.push(b.frontmatter.tag)
                        break;
                    case '[object Array]':
                        a.push(...b.frontmatter.tag)
                        break;
                }

                return a
            }, [])
            .filter((tag, index, tags) => tags.indexOf(tag) === index)
    }
})
