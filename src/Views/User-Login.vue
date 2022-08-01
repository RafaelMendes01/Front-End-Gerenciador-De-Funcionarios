<template>
  <div class="flex">
    <div class="background-img d-flex p-0 m-o"></div>
    <div class="form">
      <meu-form></meu-form>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Login/Login-Form.vue";
export default {
  components: {
    "meu-form": Form,
  },
};
</script>

<style scoped>
@keyframes init {
  from {
    scale: 1.5;
    filter: invert(1);
    opacity: 0;
  }
  to {
    scale: 1;
    filter: invert(0);
    opacity: 1;
  }
}
.background-img {
  background-image: url("@/assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 70%;
  filter: saturate(0.8);
  animation: init 1s ease-in-out;
}
.form {
  width: 30%;
  animation: init 1s ease-in-out;
}
</style>