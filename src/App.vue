<template>
  <app-topo></app-topo>

  <router-view> </router-view>
  <app-rodape id="rodape"></app-rodape>
</template>

<script>
import AppTopo from "./components/AppTopo.vue";
import AppRodape from "./components/AppRodape.vue";

export default {
  components: {
    AppTopo,

    AppRodape,
  },
  data() {
    return {};
  },
  methods: {
    mostrarNavBar() {
      if (window.scrollY >= 120) {
        let nav = document.getElementById("menu-fixo");
        nav.classList.add("fixed");
      } else {
        let nav = document.getElementById("menu-fixo");
        nav.classList.remove("fixed");
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.mostrarNavBar);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap");

* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: ease-in-out 0.2s;
}
.container {
  margin: auto;
  max-width: 1170px !important;
  padding: 0 15px;
}
</style>