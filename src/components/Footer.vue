<template>
  <footer
    class="bg-white shadow-custom mt-auto custom-height d-flex flex-column align-items-center justify-content-center"
  >
    <button class="btn btn-custom" type="button">ثبت و ادامه</button>
  </footer>
</template>
<style scoped>
.custom-height {
  height: 80px;
}
.shadow-custom {
  box-shadow: 0 -5px 8px -5px rgba(0, 0, 0, 0.15);
}
.btn-custom {
  background-color: #00bfa5;
  color: white;
  font-weight: bold;
  font-size: 16px;
  width: 90%;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .custom-height {
    height: 84px;
  }
  .btn-custom {
    background-color: #00bfa5;
    color: white;
    font-weight: bold;
    font-size: 16px;
    width: 224px;
    height: 46px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>