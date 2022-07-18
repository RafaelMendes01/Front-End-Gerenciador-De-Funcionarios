<template>
  <div class="navbar-field">
    <SideBar v-model:visible="visibleLeft">
      <div class="flex flex-column mt-3 ml-5">
        <router-link to="/dashboard/CriarUsuario" class="link"><i class="pi pi-user-plus icon mr-2 icon"></i>Criar</router-link>
        <router-link to="/dashboard/ListarTodos" class="link"><i class="pi pi-list icon mr-2 icon"></i>Listar Todos</router-link>
        <router-link to="/dashboard/ListarUm" class="link"><i class="pi pi-search icon mr-2 icon"></i>Listar Um</router-link>
        <router-link to="#" class="link"><i class="pi pi-user-edit icon mr-2 icon"></i>Atualizar</router-link>
        <router-link to="/dashboard/DeletarUm" class="link"><i class="pi pi-trash icon mr-2 icon"></i>Deletar</router-link>
      </div>
    </SideBar>
    <img
      src="@/assets/logo.svg"
      alt="logo"
      class="logo cursor-pointer p-2"
      @click="visibleLeft = true"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleLeft: false,
    };
  },
};
</script>

<style scoped>
.navbar-field {
  background-color: #071426;
  height: 13%;
  width: 100%;
}
.logo {
  width: 4rem;
  height: 4rem;
}
.logo:hover{
  scale: 1.1;
  filter: brightness(1.3);
}
.link{
    color: #cf227a;
    text-decoration: none;
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 0.5rem;
}
.link:hover{
  scale: 1.1;
  filter: brightness(1.3);
}
.icon{
  font-size: 22px;
}
</style>