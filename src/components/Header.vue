<template>
  <header dir="rtl" class="bg-white shadow-sm">
    <div
      class="container-fluid d-flex justify-content-between align-items-center custom-height"
    >
      <img src="@/assets/img/achare-logo.png" alt="Logo" class="logo mr-md-custom" />
      <nav class="d-flex ml-md-custom">
        <router-link
          to="/"
          class="nav-link fw-bold custom-font-size"
          :class="{ active: isActive('/address-list') }"
        >
          ثبت آدرس
        </router-link>
        <router-link
          to="/address-list"
          class="nav-link fw-bold custom-font-size"
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
  width: 45px;
  height: 25px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 0px 16px;
}

.nav-link.active {
  color: #00bfa5;
}

.custom-height {
  height: 48px;
}

.custom-font-size {
  font-size: 12.5px;
}

@media (min-width: 768px) {
  .custom-height {
    height: 74px;
  }
  .fw-md-normal {
    font-weight: normal;
  }
  .custom-font-size {
    font-size: 14px;
  }
  .mr-md-custom {
    margin-right: 60px;
  }
  .ml-md-custom {
    margin-left: 60px;
  }
  .logo {
  width: 70px;
  height: 39px;
}
}
</style>
