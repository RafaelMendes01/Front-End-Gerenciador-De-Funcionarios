<template>
  <form></form>
  <div
    class="flex justify-content-center align-items-center geral-field"
    @submit.prevent="ListarUm()"
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
          email-field
        "
      >
        <span class="p-float-label">
          <InputText
            type="text"
            class="p-inputtext-lg"
            v-model="UserEmail"
            id="email"
          />
        <label for="email" class="text-lg"> <i class="pi pi-envelope mb-1" />&nbsp;Digite o email do usuario</label>
        </span>
        <BtnButton
          label="Pesquisar"
          icon="pi pi-search"
          iconPos="right"
          class="p-button-primary p-button-rounded p-button-sm"
          @click="ListarUm()"
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
          card
        "
      >
        <DataTable
          :value="Usuario"
          showGridlines
          responsiveLayout="scroll"
          :reorderableColumns="true"
          @columnReorder="onColReorder"
          :row="1"
        >
          <PColumn field="nome" header="Nome"></PColumn>
          <PColumn field="email" header="Email do usuario"></PColumn>
          <PColumn field="role" header="Cargo"></PColumn>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import usuarios from "../../services/appRequest";
export default {
  data() {
    return {
      UserEmail: "",
      Usuario: "",
    };
  },
  methods: {
    onColReorder() {
      this.$toast.add({
        severity: "success",
        summary: "Coluna reordenada",
        life: 3000,
      });
    },
    ListarUm() {
      const authorization = `Bearer ${localStorage.getItem("token")}`;
      usuarios
        .ListOne({ headers: { Authorization: authorization } }, this.UserEmail)
        .then((resposta) => {
          this.Usuario = resposta;
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
@media only screen and (max-width: 590px) {
  .geral-field{
    flex-direction: column !important;
  }
  .content-field{
    flex-direction: column !important;
  }
  .email-field{
    border-right: none !important;
  }
}
</style>