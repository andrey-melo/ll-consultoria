<template>
  <footer class="bg-slate-200">
    <div class="container">
      <div id="links-rodape" class="flex justify-center gap-10 pt-10 pb-5 px-3 text-center">
        <a href="#home">Home</a>
        <a href="#planos">Planos</a>
        <a href="#bio">Bio</a>
        <a href="#alunos">Alunos</a>
        <a href="#contato">Contato</a>
      </div>
      <div id="img-rodape" class="w-1/4 m-auto pb-5">
      
        <img class="w-full" src="../../imagens/img-rodape.png" alt="" />
      
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 321px) {
  #links-rodape{
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    height: 230px;
    justify-content: left;
    
  }
  #img-rodape{
    width: 80%;
    padding-top: 5px;
  }
  
}
</style>