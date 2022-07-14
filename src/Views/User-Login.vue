<template>
  <div class="flex">
    <div class="background-img d-flex p-0 m-o">
    </div>
    <div class="form">
      <meu-form></meu-form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Login/Login-Form.vue'
export default {
  components: {
    'meu-form': Form
  }
}
</script>

<style scoped>
.background-img{
  background-image: url("@/assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 70%;
  filter: saturate(0.8);
}
.form{
  width: 30%;
}
</style>