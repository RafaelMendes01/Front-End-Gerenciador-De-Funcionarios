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
        <InputText
          id="username"
          type="text"
          class="p-inputtext-lg"
          v-model="User.name"
        />
        <label for="email" class="text-lg"> <i class="pi pi-user" />&nbsp;Digite seu nome</label>
      </span>
      <span class="p-float-label">
        <InputText
          id="email"
          type="email"
          class="p-inputtext-lg"
          v-model="User.email"
        />
        <label for="email" class="text-lg" > <i class="pi pi-envelope" />&nbsp;Digite seu email</label>
      </span>
         <PPassword v-model="User.password" placeholder="Digite sua senha" class="p-inputtext-lg" id="password" toggleMask/>
      <div class="flex gap-3">
        <PDropdown
          v-model="User.role"
          :options="roles"
          optionLabel="name"
          placeholder="Selecione o cargo"
        />
        <ConfirmDialog></ConfirmDialog>
        <BtnButton
          @click="CreateUser()"
          label="Criar Usuario"
          icon="pi pi-check"
          iconPos="right"
          class="p-button-success p-button-rounded p-button-sm btn-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import usuariosRequest from "../../services/appRequest";
export default {
  data() {
    return {
      roles: [{ name: "user" }, { name: "admin" }],
      User: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
      getEmail: localStorage.getItem('email')
    };
  },

  methods: {
    CreateUser() {
      this.$confirm.require({
        message: "realmente deseja continuar?",
        header: "Confirmação",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          const userdata = {
            username: this.User.name,
            email: this.User.email,
            password: this.User.password,
            role: this.User.role.name,
          };
          const authorization = `Bearer ${localStorage.getItem("token")}`;
          usuariosRequest
            .CreateUser({ headers: { Authorization: authorization } }, userdata)
            .then((res) => {
              this.$toast.add({
                severity: "success",
                summary: "Confirmado",
                detail: "Usuario criado com sucesso",
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
              } else if (Error.response.data.statusCode == "401") {
                this.$toast.add({
                  severity: "error",
                  summary: `${Error.response.data.statusCode}`,
                  detail: `${Error.response.data.message}`,
                  life: 3000,
                });
              } 
              else if (Error.code == "ERR_BAD_RESPONSE" && Error.response.status == "500") {
                this.$toast.add({
                  severity: "error",
                  summary: `Email duplicado`,
                  detail: "Esse email ja foi cadastrado na aplicação",
                  life: 3000,
                });
              } 
              else if (Error.code == "ERR_BAD_REQUEST" && Error.response.status == "400"){
                this.$toast.add({
                  severity: "error",
                  summary: `Dados incorretos`,
                  detail: "Preencha todos os campo da aplicação ou envie dados validos",
                  life: 3000,
                });
              }
              else {
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
            detail: "Usuario não foi criado",
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
@media only screen and (max-width: 400px) {
  .btn-button{
    height: 90%;
  }
}
</style>