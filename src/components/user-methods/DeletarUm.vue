<template>
  <div
    class="flex justify-content-center align-items-center geral-field"
    @submit.prevent="accept()"
  >
    <div
      class="
        content-field
        flex
        justify-content-center
        align-items-center
        flex-column
        gap-4
      "
    >
      <span class="p-float-label">
        <InputText id="email" type="email" v-model="email" />
        <label for="email">
          <i class="pi pi-envelope mb-1" />&nbsp;Digite o email do
          usuario</label
        >
      </span>
      <ConfirmDialog></ConfirmDialog>
      <BtnButton
        @click="deleteUser()"
        label="Deletar Usuario"
        icon="pi pi-trash"
        iconPos="right"
        class="p-button-primary p-button-rounded p-button-sm"
      />
    </div>
  </div>
</template>

<script>
import usuariosRequest from "../../services/appRequest";
export default {
  data() {
    return {
      email: "",
      userEmail: localStorage.getItem("email"),
    };
  },
  methods: {
    deleteUser() {
      this.$confirm.require({
        message: "Realmente deseja continuar?",
        header: "Confirmação",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          const authorization = `Bearer ${localStorage.getItem("token")}`;
          if (this.email === this.userEmail) {
            this.$toast.add({
              severity: "error",
              summary: `barrado `,
              detail: "você não pode deletar a si mesmo",
              life: 3000,
            });
          } else
            usuariosRequest
              .DeleteOne(
                { headers: { Authorization: authorization } },
                this.email
              )
              .then((res) => {
                this.$toast.add({
                  severity: "success",
                  summary: "Confirmado",
                  detail: "Usuario deletado com sucesso",
                  life: 3000,
                });
              })
              .catch((Error) => {
                if (Error.code == "ERR_NETWORK") {
                  this.$toast.add({
                    severity: "error",
                    summary: `Problemas Tecnicos `,
                    detail: "Servidor Indisponivel",
                    life: 3000,
                  });
                } else if (
                  Error.code == "ERR_BAD_REQUEST" &&
                  Error.response.status == "404"
                ) {
                  this.$toast.add({
                    severity: "error",
                    summary: `Dados faltando`,
                    detail: "Digite o email que gostaria de remover",
                    life: 3000,
                  });
                } else if (Error.response.data.statusCode == "401") {
                  this.$toast.add({
                    severity: "error",
                    summary: `${Error.response.data.statusCode}`,
                    detail: `${Error.response.data.message}`,
                    life: 3000,
                  });
                } else {
                  this.$toast.add({
                    severity: "error",
                    summary: `${Error.code}`,
                    detail: `${Error}`,
                    life: 3000,
                  });
                }
              });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Cancelado",
            detail: "Usuario não foi deletado",
            life: 3000,
          });
        },
      });
    },
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