<!-- COMMENT -->
<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div class="page-a">
    <hello-world @click="$router.push({ name: 'page.b' })">Go PageB</hello-world>
  </div>
</template>

<style scoped>
.page-a {}

.hello {
  background: yellow;
}

::v-deep h1 {
  color: green;
}
</style>