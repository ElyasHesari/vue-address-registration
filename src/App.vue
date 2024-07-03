<template>
  <div class="bg-custom d-flex flex-column min-vh-100">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
 
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<style>
.bg-custom {
  background-color: #f5f5f5;
}
</style>


