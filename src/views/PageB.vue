<!-- COMMENT -->
<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div class="page-b">
    <hello-world @click="$router.push({ name: 'page.a' })">Go PageA</hello-world>
  </div>
</template>

<style scoped>
.page-b {}

.hello {
  background: green;
}

::v-deep h1 {
  color: red;
}
</style>