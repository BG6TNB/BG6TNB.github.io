<script setup>
const { urls } = defineProps({
    urls: Array
})
</script>

<template>
    <div class="gallery">
        <div class="gallery-cell" v-for="url in urls" :key="url">
            <img class="gallery-img" :src="url" />
        </div>
    </div>
</template>

<style scoped>
.gallery {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}

.gallery-cell {
    height: 300px;
}

.gallery-img {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
}
</style>
