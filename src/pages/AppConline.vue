<template>
  
    
      <div class="border-solid border-8 border-darkslateblue">
        <div class="bg-yellowgreen w-4/5 py-5 m-auto">
          <h1 class="text-5xl text-center">Consultoria Online</h1>
        </div>
        <p class="text-center w-1/2 m-auto py-10">
          Anamnese feita e enviada por mim para eu ter acesso a todas as informações
          do planejamento Fotos do corpo a cada 10 dias para fazermos comparativos de
          sua evolução Você deverá enviar relatórios (feedbacks) e seu peso corporal
          em jejum. OBS: Necessário ter balança para se pesar em casa.
        </p>
        <section id="section-compra" class="flex w-4/5 justify-around ">
          <div class="w-1/2 h-screen border-2"></div>
          <div class="w-1/3">
            <ul class="list-disc flex gap-5 flex-col p-5">
              <li>
                Anamnese feita e enviada por mim para eu ter acesso a todas as
                informações do planejamento
              </li>
              <li>
                Fotos do corpo a cada 10 dias para fazermos comparativos de sua
                evolução
              </li>
              <li>
                Você deverá enviar relatórios (feedbacks) e seu peso corporal em
                jejum. (necessário balança)
              </li>
              <li>
                Monitoramento e ajustes dos materias de acordo com as fotos e
                relatórios enviados.
              </li>
            </ul>
            <p class="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sequi, asperiores, eveniet, veniam omnis placeat a fugiat dignissimos
              rem odit dolorem nihil deleniti enim. Ea maxime earum pariatur provident
              esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, vitae ipsum ducimus nihil repudiandae minima molestiae
              molestias tempora omnis, nemo consectetur quaerat voluptates totam ipsam
              corporis mollitia, modi iusto earum.
            </p>
          </div>
        </section>
  <div class="w-4/5 bg-yellowgreen h-5 py-5 m-auto"></div>
      </div>

</template>

<script>
export default {};
</script>


<style>
@media (max-width: 1040px) {
  #section-compra {
    flex-direction: column;
    justify-content: space-around;
  }
  #section-compra div {
    width: 50%;
  }
}
</style>