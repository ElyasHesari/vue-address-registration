<template>
  <header dir="rtl" class="bg-light py-3">
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <img src="@/assets/img/achare-logo.png" alt="Logo" class="logo" />
      <nav class="d-flex">
        <router-link to="/" class="nav-link" :class="{ active: isActive('/address-list') }">
          ثبت آدرس
        </router-link>
        <router-link
          to="/address-list"
          class="nav-link"
          :class="{ active: isActive('/') }"
        >
          مشاهده آدرس‌ ها
        </router-link>
      </nav>
    </div>
  </header>
  <!-- <div>Header</div> -->
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (routePath) => {
  return route.path === routePath;
};
</script>
<style scoped>
.logo {
  height: 40px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
}

.nav-link.active {
  /* background-color: #007bff; */
  color: #00BFA5;
  /* border-radius: 4px; */
}
</style>
