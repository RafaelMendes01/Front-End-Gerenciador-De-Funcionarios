<template>
  <div class="navbar-field flex">
    <SideBar v-model:visible="visibleLeft" id="sidebar">
      <div class="flex flex-column mt-3 ml-5">
        <router-link to="/dashboard/CriarUsuario" class="link"
          ><i class="pi pi-user-plus icon mr-2 icon"></i>Criar</router-link
        >
        <router-link to="/dashboard/ListarTodos" class="link"
          ><i class="pi pi-list icon mr-2 icon"></i>Listar Todos</router-link
        >
        <router-link to="/dashboard/ListarUm" class="link"
          ><i class="pi pi-search icon mr-2 icon"></i>Listar Um</router-link
        >
        <router-link to="/dashboard/AtualizarUsuario" class="link"
          ><i class="pi pi-user-edit icon mr-2 icon"></i>Atualizar</router-link
        >
        <router-link to="/dashboard/DeletarUm" class="link"
          ><i class="pi pi-trash icon mr-2 icon"></i>Deletar</router-link
        >
      </div>
    </SideBar>
    <i
      class="pi pi-bars menu cursor-pointer pl-3 flex align-items-center"
      @click="visibleLeft = true"
    >
    </i>
    <div class="logo-field">
      <img
        src="@/assets/logo.svg"
        alt="logo"
        class="logo"
        @click="visibleLeft = true"
      />
    </div>
    <user-avatar class="flex align-items-center" />
  </div>
</template>

<script>
import UserAvatar from "../user/user-avatar.vue";
export default {
  components: {
    "user-avatar": UserAvatar,
  },
  data() {
    return {
      visibleLeft: false,
    };
  },
  updated(){
    const sidebar = document.getElementById('sidebar');
    if(window.innerWidth <= 500){
      sidebar.classList.add("w-8");
    }
    else{
      sidebar.classList.remove("w-8")
    }
  }
};
</script>

<style scoped>
.navbar-field {
  background-color: #071426;
  height: 13%;
  width: 100%;
}
.menu {
  color: #cf227a;
  font-size: 30px;
}
.logo {
  width: 3rem;
  height: 3rem;
}
.logo-field{
  width: 48%;
  display: flex;
  justify-content: end;
  align-items: center;

}
.menu:hover {
  scale: 1.1;
  filter: brightness(1.3);
}
.link {
  color: #cf227a;
  text-decoration: none;
  font-size: 22px;
  font-weight: bolder;
  margin-bottom: 0.5rem;
}
.link:hover {
  scale: 1.1;
  filter: brightness(1.3);
}
.icon {
  font-size: 22px;
}
</style>