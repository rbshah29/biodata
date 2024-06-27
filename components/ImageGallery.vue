<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(image, index) in images" :key="index" class="overflow-hidden rounded-lg shadow-lg">
        <img :src="image" :alt="`Gallery image ${index + 1}`" class="w-full h-64 object-cover">
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    images: {
      type: Array,
      default: () => []
    }
  })
  </script>