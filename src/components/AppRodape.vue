<template>
  <footer class="bg-slate-200">
    <div class="container pt-14 pb-10">
      
      <div id="links-rodape" class="flex flex-col gap-10 items-center flex-wrap">
        <div class="flex gap-10 flex-wrap">
          <a href="#home">Home</a>
          <a href="#planos">Planos</a>
          <a href="#bio">Bio</a>
          <a href="#alunos">Alunos</a>
          <a href="#contato">Contato</a>
        </div>
        <div id="img-rodape" class="w-1/2">
          <img class="w-full" src="../../imagens/img-rodape.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
#img-rodape{
  max-width: 250px;
}
@media (max-width: 400px) {
  #links-rodape {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    height: 230px;
    justify-content: left;
  }
}
</style>