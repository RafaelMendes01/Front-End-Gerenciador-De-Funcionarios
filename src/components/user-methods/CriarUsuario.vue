<template>
    <div class="flex justify-content-center align-items-center geral-field" @submit.prevent="accept()">
      <div
        class="
          content-field
          flex
          justify-content-center
          align-items-center
          flex-column
          gap-3
        "
      >
        <span class="p-float-label p-input-icon-left">
          <i class="pi pi-user" />
          <InputText
            id="username"
            type="text"
            placeholder="Digite seu nome"
            class="p-inputtext-lg"
            v-model="User.name"
          />
        </span>
        <span class="p-float-label p-input-icon-left">
          <i class="pi pi-envelope" />
          <InputText
            id="email"
            type="email"
            placeholder="Digite seu email"
            class="p-inputtext-lg"
            v-model="User.email"
          />
        </span>
        <span class="p-float-label p-input-icon-left">
          <i class="pi pi-key" />
          <InputText
            id="password"
            type="password"
            placeholder="Digite sua senha"
            class="p-inputtext-lg"
            v-model="User.password"
          />
        </span>
        <div class="flex gap-3">
          <PDropdown
            v-model="User.role"
            :options="roles"
            optionLabel="name"
            placeholder="Selecione o cargo"
          />
          <ConfirmDialog></ConfirmDialog>
          <BtnButton
            @click="create()"
            label="Criar Usuario"
            icon="pi pi-check"
            iconPos="right"
            class="p-button-success p-button-rounded p-button-sm"
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
    };
  },
  methods: {
    create() {
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
          const authorization = `Bearer ${localStorage.getItem('token')}`
          usuariosRequest.CreateUser({ headers: { Authorization: authorization } }, userdata).then((res) => {
              this.$toast.add({
              severity: "success",
              summary: "Confirmado",
              detail: "Usuario criado com sucesso",
              life: 3000,
            });
          })
          .catch((Error) =>{
              this.$toast.add({
              severity: "error",
              summary: `${Error}`,
              detail: "Requisição falhou",
              life: 3000,
            });
          })
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
</style>