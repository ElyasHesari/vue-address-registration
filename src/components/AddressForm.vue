<template>
  <div dir="rtl" style="height: max-content; margin-bottom: 80px">
    <div class="m-3">
      <div style="font-size: 16px">ثبت آدرس</div>
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
                    v-model="firstName"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="مثال: محمد"
                    required
                  />

                  <i
                    v-if="firstName"
                    @click="clearInput('firstName')"
                    class="bi bi-x-circle-fill text-gray position-absolute"
                    style="bottom: 8px; left: 11px; cursor: pointer"
                  ></i>
                </div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustom02"
                  class="form-label fw-bold font-custom"
                  >نام خانوادگی</label
                >
                <div class="d-flex position-relative">
                  <input
                    type="text"
                    v-model="lastName"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="مثال: رضایی"
                    required
                  />

                  <i
                    v-if="lastName"
                    @click="clearInput('lastName')"
                    class="bi bi-x-circle-fill text-gray position-absolute"
                    style="bottom: 8px; left: 11px; cursor: pointer"
                  ></i>
                </div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustomUsername"
                  class="form-label fw-bold font-custom"
                  >شماره تلفن همراه</label
                >
                <div class="has-validation">
                  <div class="d-flex position-relative">
                    <input
                      dir="rtl"
                      type="tel"
                      v-model="phoneNumber"
                      class="form-control"
                      id="validationCustom01"
                      placeholder="مثال 091212345687"
                      required
                    />

                    <i
                      v-if="phoneNumber"
                      @click="clearInput('phoneNumber')"
                      class="bi bi-x-circle-fill text-gray position-absolute"
                      style="bottom: 8px; left: 11px; cursor: pointer"
                    ></i>
                  </div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="d-flex">
                  <label
                  for="validationCustomUsername"
                  class="form-label fw-bold font-custom"
                  >شماره تلفن ثابت (اختیاری)</label>
                  <span style="margin-right: 100px; font-size: 13px; color: #757575;">*با پیش شماره</span>
                </div>
                <div class="has-validation">
                  <div class="d-flex position-relative">
                    <input
                      type="tel"
                      dir="rtl"
                      v-model="fixNumber"
                      class="form-control"
                      id="validationCustom01"
                      placeholder="مثال 02144526780"
                      required
                    />

                    <i
                      v-if="fixNumber"
                      @click="clearInput('fixNumber')"
                      class="bi bi-x-circle-fill text-gray position-absolute"
                      style="bottom: 8px; left: 11px; cursor: pointer"
                    ></i>
                  </div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  for="validationCustom02"
                  class="form-label fw-bold font-custom"
                  >آدرس</label
                >
                <div class="d-flex position-relative">
                  <input
                    type="text"
                    v-model="address"
                    class="form-control"
                    id="validationCustom01"
                    placeholder=""
                    required
                  />

                  <i
                    v-if="address"
                    @click="clearInput('address')"
                    class="bi bi-x-circle-fill text-gray position-absolute"
                    style="bottom: 8px; left: 11px; cursor: pointer"
                  ></i>
                </div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-12 mb-3 d-flex">
                <label
                  for="validationCustom02"
                  class="form-label fw-bold font-custom ms-5"
                  >جنسیت</label
                >
                <div class="form-check ms-5 d-flex">
                  <input
                    class="custom-radio ms-2"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1" style="font-size: 12px; font-weight: bold;">
                    خانم
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input
                    class="custom-radio ms-2"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2 " style="font-size: 12px; font-weight: bold;">
                    آقا
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref(null);
const fixNumber = ref(null);
const address = ref("");

const clearInput = (inputType) => {
  if (inputType === "firstName") {
    firstName.value = "";
  } else if (inputType === "lastName") {
    lastName.value = "";
  } else if (inputType === "phoneNumber") {
    phoneNumber.value = "";
  } else if (inputType === "fixNumber") {
    fixNumber.value = "";
  } else {
    address.value = "";
  }
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
.form-control {
  height: 46px;
}
.form-control:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #00bfa5;
}
.text-gray {
  color: #b6b6b6;
}

.custom-radio {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #00bfa5; /* رنگ border دایره radio */
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
}

.custom-radio:checked::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: #00bfa5; /* رنگ دایره داخلی radio */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* سیببببببببببب */





</style>
