<template>
  <div dir="rtl" style="width: 100vw">
    <div class="m-3">
      <div>ثبت آدرس</div>
      <div class="bg-white mt-2" style="">
        <div class="p-3">
          <div class="fw-bold" style="font-size: 12px">
            لطفا مشخصات و آدرس خود را وارد کنید
          </div>
          <div class="mt-3">
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustom01"
                  class="form-label fw-bold font-custom"
                  >نام</label
                >
                <div class="d-flex position-relative">
                  <input
                    type="text"
                    v-model="inputs.firstName"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="مثال: محمد"
                    required
                  />

                  <i @click="clearInput" class="bi bi-x-circle-fill text-gray position-absolute" style="bottom: 5px; left: 11px; cursor: pointer;"></i>
                </div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustom02"
                  class="form-label fw-bold font-custom"
                  >نام خانوادگی</label
                >
                <input
                  type="text"
                  v-model="inputs.lastName"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="مثال: رضایی"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustomUsername"
                  class="form-label fw-bold font-custom"
                  >شماره تلفن همراه</label
                >
                <div class="has-validation">
                  <input
                    type="number"
                    v-model="inputs.phoneNumber"
                    class="form-control"
                    id="validationCustomUsername"
                    placeholder="مثال: 09121234567"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustomUsername"
                  class="form-label fw-bold font-custom"
                  >شماره تلفن ثابت (اختیاری)</label
                >
                <div class="has-validation">
                  <input
                    type="number"
                    v-model="inputs.fixNumber"
                    class="form-control"
                    id="validationCustomUsername"
                    placeholder="مثال: 09121234567"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustom02"
                  class="form-label fw-bold font-custom"
                  >آدرس</label
                >
                <input
                  type="text"
                  v-model="inputs.address"
                  class="form-control"
                  id="validationCustom02"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-12 mb-3 d-flex">
                <label
                  for="validationCustom02"
                  class="form-label fw-bold font-custom ms-5"
                  >جنسیت</label
                >
                <div class="form-check ms-5">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    خانم
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    آقا
                  </label>
                </div>
              </div>
              <div class="col-12 mb-3">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const inputs = reactive({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  fixNumber: "",
  address: "",
});

const clearInput = () => {
  console.log(3333)
  inputs.values = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    fixNumber: "",
    address: "",
  };
};
</script>

<style scoped>
.font-custom {
  font-size: 12px;
}
::placeholder {
  color: #bdbdbd;
  font-size: 14px;
}
.form-control:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #00bfa5;
}
.text-gray {
  color: #B6B6B6;
}
</style>
