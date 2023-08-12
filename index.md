<ul>
    <li v-for="post of posts">
        <a :href="post.url">[{{ post.frontmatter.date }}]{{ post.frontmatter.title }}</a>
    </li>
</ul>

<script setup>import { data as posts } from '/posts.data.js'</script>
