<script setup>
    import Giscus from '@giscus/vue'
    import { useRoute, useData } from 'vitepress'
    import { computed } from 'vue'

    const route = useRoute()
    const isEnableComments = computed(() => (
        route.data.frontmatter.comments === void 0 ||
        route.data.frontmatter.comments === true
    ) ? true : false)

    const data = useData()
    const themeStyle = computed(() => data.isDark.value ? 'dark' : 'light')
</script>

<template>
    <Giscus v-if="isEnableComments"
        id="comments"
        repo="BG6TNB/BG6TNB.github.io"
        repoId="R_kgDOI-5CYA"
        category="Announcements"
        categoryId="DIC_kwDOI-5CYM4CUZ-x"
        mapping="title"
        strict="0"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="bottom"
        :theme="themeStyle"
        lang="zh-CN"
    />
</template>
