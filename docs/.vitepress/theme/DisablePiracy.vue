<script setup>
    import { onMounted } from 'vue'
    onMounted(() => {
        // 禁止右键菜单
        // document.oncontextmenu = () => false

        // 禁止文本选择
        // document.onselectstart = () => false

        // 禁止复制
        document.oncopy = () => false

        // 禁止剪切
        document.oncut = () => false
    })
</script>

<template>
    <!-- 用于隐藏开发模式下 console 的警告消息 -->
</template>
