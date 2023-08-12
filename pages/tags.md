---
title: Tags
comments: false
---

<h1 style="margin-bottom: 32px">Tags</h1>

<div class="tag-container" style="display: flex;flex-wrap: wrap;">
    <div class="tag" style="border: 1px solid gray;border-radius: 8px;margin: 4px;padding: 2px 8px;cursor: pointer;" v-for="tag in unselectedTags" :key="tag" @click="clickTag(tag)">
        <p class="tag-label" style="margin: 0;">{{ tag }}</p>
    </div>
</div>

<hr />

<div class="tag-container" style="display: flex;flex-wrap: wrap;">
    <div class="tag" style="border: 1px solid gray;border-radius: 8px;margin: 4px;padding: 2px 8px;cursor: pointer;" v-for="tag in selectedTags" :key="tag" @click="clickTag(tag)">
        <p class="tag-label" style="margin: 0;">{{ tag }}</p>
    </div>
</div>

<ul v-if="selectedPosts.length === 0">
    <li v-for="post of posts">
        <a :href="post.url">[{{ post.frontmatter.date }}]{{ post.frontmatter.title }}</a>
    </li>
</ul>

<ul v-else>
    <li v-for="post of selectedPosts">
        <a :href="post.url">[{{ post.frontmatter.date }}]{{ post.frontmatter.title }}</a>
    </li>
</ul>

<script setup>
import { data as tags } from '/tags.data.js'
import { data as posts } from '/posts.data.js'
import { reactive, computed } from 'vue'

const selectedTags = reactive([])
const unselectedTags = computed(() => {
    return tags.filter(tag => selectedTags.indexOf(tag) === -1)
})
const selectedPosts = computed(() => {
    return posts
        .filter(post => {
            if (!post.frontmatter.tag) { return false }
    
            if ('[object String]' === Object.prototype.toString.call(post.frontmatter.tag)) {
                return selectedTags.indexOf(post.frontmatter.tag) > -1
            }
    
            return post.frontmatter.tag.reduce((a, b) => {
                if (selectedTags.indexOf(b) > -1) { a = true }
                return a
            }, false)
        })
})

const clickTag = tag => {
    const tagIndex = selectedTags.indexOf(tag)
    if (tagIndex > -1) {
        selectedTags.splice(tagIndex, 1)
        return void 0
    }
    selectedTags.push(tag)
}
</script>
