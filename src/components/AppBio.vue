<template>
  <section class="">
      <div id="faixa-bio" class=" py-16 bg-cor-2">
            <div class="container">
              <p class="text-5xl text-right 
              ">Quem sou eu?</p>
            </div>
      </div>
    <div class="container">
      
        <div id="conteudo-bio" class="">
          <div id="foto-bio" class="inline-block w-1/2 mx-auto">
        
              <img
                class=" m-auto w-3/4 rounded-b-full relative -top-44 object-cover"
                src="../../imagens/bio.jpg"
                alt="Foto Lucas Louveira"
              />
            
          </div>
          <div id="texto-bio" class="inline-block align-top w-1/2 p-5">
            <ul class=" flex flex-col gap-5 text-lg py-5">
              <li>
                Graduado em educação física UNIGRAN CAPITAL; 
              </li>
              <li>
                Especializado em preparação de bodybuilders pela UNIGUAÇU;
              </li>
              <li>
                Graduando nutrição pela CLARENTIANO;
              </li>
              <li>
                Mais de 20mil atendimentos no Brasil;
              </li>
              <li>
                Referência em consultoria presencial e online com experiência em atendimento clinico em consultório a mais de 7 anos;
              </li>
              <li>
                Praticante de musculação com mais de 10 anos de experiência;
              </li>
            </ul>
          </div>
            
        </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#foto-bio{
  max-height: 500px;
  height: 100%;
}
#texto-bio p{
  letter-spacing: 0.5px;
}
@media(max-width: 800px){
    #foto-bio img{
      top:0;
      border-radius: 0px;
    }
    #faixa-bio{
      padding: 40px;
    }
    
  }
@media(max-width: 669px){
  #faixa-bio p{
    text-align: center;
   margin: 0px;
  }
  #texto-bio{
    width: 100%;
    display: block;
  }
  #foto-bio{
    width: 80%;
    display: block;
    margin: auto;
  }
}
@media (max-width: 400px) {
  #conteudo-bio{
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }
  #texto-bio{
    width: 100%;
  }
  #foto-bio{
   width: 100%;
  }
}
</style>