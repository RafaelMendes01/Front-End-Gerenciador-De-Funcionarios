<template>
<form @submit.prevent="handleSubmitLogin">
  <div class="form-group flex flex-column align-content-center gap-5">
    <div class="flex justify-content-center align-content-center logo">
      <img src="@/assets/logo.svg" alt="logo" />
    </div>
    <div class="flex justify-content-center align-content-center gap-2">
      <i class="pi pi-envelope icon mt-1"></i>
      <input
        v-model="user.email"
        type="email"
        placeholder="  Digite seu email"
        class="input"
      />
    </div>
    <div class="flex justify-content-center align-content-center gap-2">
      <i class="pi pi-key icon mt-1"></i>
      <input
        v-model="user.password"
        type="password"
        placeholder="  Digite sua senha"
        class="input"
      />
    </div>
    <div class="flex justify-content-center align-content-center btn-field">
      <button class="btn-login" type="submit">Login</button>
    </div>
  </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmitLogin(){
      const email = this.user.email;
      const lastEmail = localStorage.getItem('email')
      if(email !== lastEmail){
        localStorage.setItem('email', this.user.email)
        this.$store.dispatch('handleSubmitLogin', this.user)
      }
      else{
        this.$toast.add({
              severity: "error",
              summary: `Erro`,
              detail: "Esse usuario ja esta logado",
              life: 3000,
            });
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  background-color: #05103d;
  height: 100vh;
}
.input {
  color: #cf227a;
  border-radius: 20px;
  border: 2px solid #cf227a;
  background-color: #0e1b47;
  width: 70%;
  height: 2.5rem;
}
.input::placeholder {
  color: #cf227a;
  opacity: 0.9;
}
.icon {
  color: #cf227a;
  font-size: 30px;
}
.logo {
  width: 100%;
  height: 15%;
  margin-top: 30%;
}
.btn-login {
  background-color: #f30a82;
  color: white;
  border: none;
  border-radius: 22px;
  width: 40%;
  height: 100%;
  transition: filter 0.5s, scale 0.5s;
}
.btn-login:hover {
  filter: brightness(1.8);
  scale: 1.1;
}
.btn-field {
  height: 6%;
}
</style>