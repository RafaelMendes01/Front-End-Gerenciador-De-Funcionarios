<template>
  <div class="flex justify-content-center align-items-center geral-field">
    <div
      class="
        content-field
        flex
        justify-content-center
        align-items-center
        flex-column
      "
    >
      <h2>Bem Vindo!!! 😃</h2>
      <h4 class="text-center">
        Para realizar suas operações clique no botao do canto superior esquerdo
        da tela
      </h4>
    </div>
  </div>
</template>

<script>
import { SocketModule } from "@/services/Socket";
export default {
  data() {
    return {
      email: localStorage.getItem("email"),
      SocketService: SocketModule,
    };
  },
  mounted() {
    this.SocketService.connect().registerListener(
      "is-logged",
      "is-logged",
      (data) => {
        const MyEmail = localStorage.getItem("email");
        if (MyEmail == data.email.user.email) {
          this.$toast.add({
            severity: "warn",
            summary: "Aviso",
            detail: "Você sera deslogado em 3 segundos",
            life: 3000,
          });
          setTimeout(() => {
            localStorage.clear()
            window.location.replace("/");
          }, 3000);
        }
      }
    );
  },
};
</script>

<style scoped>
.geral-field {
  height: 100vh;
}
.content-field {
  background-color: #070c25;
  border-radius: 25px;
  height: 90%;
  width: 95%;
  color: #cf227a;
}
</style>