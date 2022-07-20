<template>
  <div class="flex justify-content-center align-items-center geral-field">
    <div class="content-field flex justify-content-center align-items-center flex-column">
       <h2>Bem Vindo!!!😃</h2>
       <h4>Para realizar suas operações clique no botao do canto superior esquerdo da tela</h4>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: localStorage.getItem('email')
    }
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