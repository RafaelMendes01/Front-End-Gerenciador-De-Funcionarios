<template>
  <div class="flex justify-content-center align-items-center geral-field">
    <div class="content-field flex justify-content-center align-items-center flex-column">
       <div v-for="usuario of Usuarios" :key="usuario.email">
        <p>{{usuario.nome}},{{usuario.email}}, {{usuario.role}}</p>
       </div>
    </div>
  </div>
</template>

<script>
import usuarios from '../../services/appRequest'
export default {
  data() {
    return {
      Usuarios:[]
    }

  },
  mounted(){
    usuarios.ListUsers().then(resposta =>{
     this.Usuarios = resposta.data;
    })
  }
};
</script>

<style scoped>
.geral-field{
    height: 100vh;
}
.content-field{
    background-color: #070c25;
    border-radius: 25px;
    height: 90%;
    width: 95%;
    color: #cf227a;
}
</style>