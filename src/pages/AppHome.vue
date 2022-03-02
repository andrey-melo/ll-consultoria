<template>
  <app-banner ></app-banner>
    
  <app-planos id="planos"></app-planos>

  <app-bio id="bio"></app-bio>

  <app-alunos id="alunos"></app-alunos>

  <app-fale-conosco id="contato"></app-fale-conosco>
</template>

<script>
import AppBanner from "../components/AppBanner.vue";
import AppPlanos from "../components/AppPlanos.vue";
import AppBio from "../components/AppBio.vue";
import AppAlunos from "../components/AppAlunos.vue";
import AppFaleConosco from "../components/AppFaleConosco.vue";

export default {
    components:{
        AppBanner,
        AppPlanos,
        AppBio,
        AppAlunos,
        AppFaleConosco
    }
}
</script>

<style>

</style>