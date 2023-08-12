---
title: Series
comments: false
---

# Series

<template v-for="[title, section] in series">
    <h2>{{title}}</h2>
    <p v-for="post in section">
        <a :href="post.url">[{{ post.frontmatter.date }}]{{ post.frontmatter.title }}</a>
    </p>
</template>

<script setup>import { data as series } from '/series.data.js'</script>
