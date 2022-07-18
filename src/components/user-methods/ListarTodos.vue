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
      <DataTable
        :value="Usuarios"
        showGridlines
        responsiveLayout="scroll"
        :paginator="true"
        :rows="6"
        :reorderableColumns="true"
        @columnReorder="onColReorder"
      >
        <PColumn field="nome" header="nome"></PColumn>
        <PColumn field="email" header="email"></PColumn>
        <PColumn field="role" header="cargo"></PColumn>
      </DataTable>
    </div>
  </div>
</template>

<script>
import usuarios from "../../services/appRequest";
export default {
  data() {
    return {
      Usuarios: [],
    };
  },
  mounted() {
    usuarios.ListUsers().then((resposta) => {
      this.Usuarios = resposta.data;
    });
  },
  methods: {
    onColReorder() {
      this.$toast.add({
        severity: "success",
        summary: "Coluna reordenada",
        life: 8080,
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