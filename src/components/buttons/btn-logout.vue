<template>
  <div class="flex justify-content-end align-items-center teste" @submit.prevent="Logout()">
    <BtnButton
      icon="pi pi-sign-out"
      class="p-button-rounded p-button-danger"
      aria-label="Cancel"
      v-tooltip="'Sair da aplicação'"
      @click="Logout()"
    />
  </div>
</template>

<script>
export default {
  methods: {
    Logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
         window.location.replace('/');
    },
  },
};
</script>

<style scoped>
.teste {
  width: 90%;
}
</style>