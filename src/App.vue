<template>


  <app-nav-bar></app-nav-bar>
  <router-view></router-view>
  <app-banner ></app-banner>
    
  <app-planos id="planos"></app-planos>

  <app-bio id="bio"></app-bio>

  <app-alunos id="alunos"></app-alunos>

  <app-fale-conosco id="contato"></app-fale-conosco>

  <app-rodape id="rodape"></app-rodape>
</template>

<script>
import AppNavBar from "./components/AppNavBar.vue";
import AppRodape from "./components/AppRodape.vue";


export default {
  components: {
    AppNavBar,
    AppRodape,
 
  },
  data() {
    return {
    };
  },
  methods: {
    mostrarNavBar() {
      if(window.scrollY >= 120){
        let nav = document.getElementById("menu-fixo");
        nav.classList.add("fixed");
       
      }else{
        let nav = document.getElementById("menu-fixo");
        nav.classList.remove("fixed");
   
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.mostrarNavBar)
  },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container{
  margin : auto;
  max-width: 1170px !important;
  padding:0 15px;
}

body{
  padding-top: 120px;
}

</style>