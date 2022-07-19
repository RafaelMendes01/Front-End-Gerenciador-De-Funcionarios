<template>
<form ></form>
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
        "
      >
        <span class="p-float-label p-input-icon-left">
          <i class="pi pi-envelope" />
          <InputText
            type="text"
            placeholder="Digite o email do usuario"
            class="p-inputtext-lg"
            v-model="UserEmail"
          />
        </span>
        <BtnButton
          label="Pesquisar"
          icon="pi pi-search"
          iconPos="right"
          class="p-button-info p-button-rounded p-button-sm"
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
        <PColumn field="nome" header="nome"></PColumn>
        <PColumn field="email" header="email"></PColumn>
        <PColumn field="role" header="cargo"></PColumn>
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
        UserEmail: '',
        Usuario: ''
    };
  },
  methods: {
    onColReorder() {
      this.$toast.add({
        severity: "success",
        summary: "Coluna reordenada",
        life: 8080,
      });
    },
    ListarUm() {
      const authorization = `Bearer ${localStorage.getItem('token')}`
      usuarios.ListOne( { headers: { Authorization: authorization } },this.UserEmail).then((resposta) => {
        this.Usuario = resposta
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