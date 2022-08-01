<template>
  <div
    class="flex justify-content-center align-items-center geral-field"
    @submit.prevent="accept()"
  >
    <div class="content-field flex justify-content-center">
      <div
        class="
          form
          content-field
          flex
          justify-content-center
          align-items-center
          flex-column
          h-full
          border-right-1
          surface-border
          border-noround-right
          gap-3
        "
      >
        <span class="p-float-label">
          <InputText
            type="text"
            class="p-inputtext-lg"
            v-model="oldEmail"
            id="email"
          />
            <label for="email" class="text-lg"> <i class="pi pi-envelope mb-1" />&nbsp;Digite o email do usuario</label>
        </span>
        <ConfirmDialog></ConfirmDialog>
        <BtnButton
          label="Atualizar"
          icon="pi pi-pencil"
          iconPos="right"
          class="p-button-warning p-button-rounded p-button-sm"
          @click="updateUser()"
        />
      </div>
      <div
        class="
          data
          content-field
          flex
          justify-content-center
          align-items-center
          flex-column
          gap-2
        "
      >
          <InputText
            id="username"
            type="text"
            placeholder="Novo nome"
            class="p-inputtext-lg"
            v-model="User.name"
          />
          <InputText
            id="email"
            type="email"
            placeholder="Novo email"
            class="p-inputtext-lg"
            v-model="User.email"
          />
         <PPassword v-model="User.password" placeholder="Digite sua senha" class="p-inputtext-lg" id="password" toggleMask/>
        <PDropdown
          v-model="User.role"
          :options="roles"
          optionLabel="name"
          placeholder="Novo cargo"
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
      oldEmail: "",
      User: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  methods: {
    updateUser() {
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
            .UpdateOne(
              { headers: { Authorization: authorization } },
              this.oldEmail,
              userdata
            )
            .then((res) => {
              this.$toast.add({
                severity: "success",
                summary: "Confirmado",
                detail: "Usuario alterado com sucesso",
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
              else if (Error.code == "ERR_BAD_REQUEST" && Error.response.status == "404") {
                this.$toast.add({
                  severity: "error",
                  summary: `Email inexistente`,
                  detail: "Preencha o campo de email",
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
            detail: "Usuario não foi alterado",
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