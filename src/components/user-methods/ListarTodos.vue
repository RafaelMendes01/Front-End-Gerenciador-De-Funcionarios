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
        id="DataTable"
      >
        <PColumn field="nome" header="Nome"></PColumn>
        <PColumn field="email" header="Email do usuario"></PColumn>
        <PColumn field="role" header="Cargo"></PColumn>
      </DataTable>
    </div>
  </div>
</template>

<script>
import usuarios from "../../services/appRequest";
import { SocketModule } from "@/services/Socket";
export default {
  data() {
    return {
      Usuarios: [],
      socketService: SocketModule.connect(),
    };
  },
  methods: {
    ListarTodos() {
      const authorization = `Bearer ${localStorage.getItem("token")}`;
      usuarios
        .ListUsers({ headers: { Authorization: authorization } })
        .then((resposta) => {
          this.Usuarios = resposta.data;
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
    onColReorder() {
      this.$toast.add({
        severity: "success",
        summary: "Coluna reordenada",
        life: 8080,
      });
    },
  },
  created(){
     this.ListarTodos();
  },
  updated() {
    this.socketService.registerListener("new-user", "new-user", () => {
      this.$toast.add({
        severity: "warn",
        summary: `aviso`,
        detail: `um novo usuario foi criado`,
        life: 3000,
      });
      this.ListarTodos();
    });
    this.socketService.registerListener("removed-user", "removed-user", () => {
      this.$toast.add({
        severity: "warn",
        summary: `aviso`,
        detail: `um usuario foi deletado da aplicação`,
        life: 3000,
      });
      this.ListarTodos();
    });
    this.socketService.registerListener("update", "update", () => {
      this.$toast.add({
        severity: "warn",
        summary: `aviso`,
        detail: `os dados de um usuario foram alterados`,
        life: 3000,
      });
    });
    this.ListarTodos();
    const table = document.getElementById('DataTable');
    if(window.innerWidth <= 450){
      table.classList.add("p-datatable-sm");
    }
    else{
      table.classList.remove("p-datatable-sm");
    }
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