<template>
  <div class="bg-cor-3 pt-24 pb-20">
    <div class="container">
      <h1 class="text-white text-center text-4xl">Planos de treino</h1>
      <h2 class="text-white text-center text-2xl py-3">
        <span class="bg-cor-4 p-2 leading-loose"
          >Com o planejamento bem elaborado,&nbsp;<br />&nbsp;o objetivo é
          certo!</span
        >
      </h2>
      <section id="planos" class="py-10 flex justify-around">
       
            <div
            id="card-presencial"
               class="
               bg-white
               rounded-xl
               relative
               overflow-hidden
               border border-cor-1
               shadow-pricing
               py-10
               px-8
               w-2/6
               "
               >
               <span class="text-primary font-semibold text-2xl block mb-4 border-b-4 border-cor-2">
               Consultoria Presencial
               </span>
               
               <p
                  class="
                  text-base text-body-color
                  pb-8
                  "
                  >
                  Na semana do atendimento receberá de forma antecipada via WhatsApp, todas as instruções de local da consulta e as vestimentas adequadas para avaliação física. Na consulta serão realizadas uma série de perguntas sobre sua rotina e saúde, avaliações físicas e metabólicas. Isso nos dará precisão no seu planejamento, sendo o mais direcionado e eficiente possível.
               </p>
               <div class="mb-7">
                  <p class="text-base mt-3 font-semibold">
                    Adipometria
                  </p>
                  <p class="text-base mt-3 font-semibold">
                     Perimetria
                  </p>
                  <p class="text-base mt-3 font-semibold">
                     Análise Corporal
                  </p>
                  <p class="text-base mt-3 font-semibold">
                     Análise Postural
                  </p>
               </div>
               <h2 class="font-bold text-dark mb-5 text-[42px] text-center">
                  R${{this.valorPresencial.toFixed(2)}}
                  <span class="text-base text-body-color font-medium">
                  / Mês
                  </span>
               </h2>
               <select class="p-4 w-full mb-4 border-2 border-cor-1 outline-none" @change="mudarPlanoPresencial()" name="planoPresencial" id="selectPresencial">
                 <option value="Selecionar">Selecionar</option>
                <option value="Mensal">Mensal</option>
                <option value="Bimestral">Bimestral</option>
                <option value="Trimestral">Trimestral</option>
                <option value="Semestral">Semestral</option>
                <option value="Anual">Anual</option>
                <option value="Mensal - Treino ou Dieta">
                  Mensal - Treino ou Dieta
                </option>
                <option value="Bimestral - Treino ou Dieta">
                  Bimestral - Treino ou Dieta
                </option>
                <option value="Trimestral - Treino ou Dieta">
                  Trimestral - Treino ou Dieta
                </option>
                <option value="Semestral - Treino ou Dieta">
                  Semestral - Treino ou Dieta
                </option>
                <option value="Anual - Treino ou Dieta">
                  Anual - Treino ou Dieta
                </option>
               </select>
               <button
                  class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-cor-1
                  bg-transparent
                  border-2 border-cor-1
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-cor-1 hover:border-primary
                  transition
                  "
                  >
               Saber mais!
               </button>
            </div>
         
             <div
             id="card-online"
               class="
               bg-white
               rounded-xl
               relative
               overflow-hidden
               border border-cor-1
               shadow-pricing
               py-10
               px-8
               w-2/6
               "
               >
               <span class="text-primary font-semibold text-2xl block mb-4 border-b-4 border-cor-2">
               Consultoria Online
               </span>
               
               <p
                  class="
                  text-base text-body-color
                  pb-4
                  "
                  >
                 Você terá acesso a um questionário onde todas suas informações
                deverão ser preenchidas como: objetivo, idade, altura, lesões ou
                dores, experiência de treino, horas de sono, rotina alimentar.
                Todas essas informações servirão para montar um planejamento de
                treino e dieta individualizado para você, feito pela minha
                empresa.
               </p>
               <div class="mb-5">
                  <p class="text-base mt-3 font-semibold">
                    Análise Postural e Estética
                  </p>
                    <small> Feita por meio de fotos e vídeos que serão enviadas por você
                  no questionário de anamnese.</small>  
                  
                  <p class="text-base mt-3 font-semibold">
                     Treino e Acompanhamento
                  </p>
                  <small>
                    Seu treino será enviado com toda estrutura de exercícios e
                  aeróbios, garantindo todo o suporte na execução.
                  </small>
               </div>
               <h2 class="font-bold text-dark mb-5 text-[42px] text-center">
                  R${{this.valorOnline.toFixed(2)}}
                  <span class="text-base text-body-color font-medium">
                  / Mês
                  </span>
               </h2>
               <select class="p-4 w-full mb-4 border-2 border-cor-1 outline-none" @change="mudarPlanoOnline()" name="planoOnline" id="selectOnline">
                 <option value="Selecionar">Selecionar</option>
                <option value="Mensal">Mensal</option>
                <option value="Bimestral">Bimestral</option>
                <option value="Trimestral">Trimestral</option>
                <option value="Semestral">Semestral</option>
                <option value="Anual">Anual</option>
                <option value="Mensal - Treino ou Dieta">
                  Mensal - Treino ou Dieta
                </option>
                <option value="Bimestral - Treino ou Dieta">
                  Bimestral - Treino ou Dieta
                </option>
                <option value="Trimestral - Treino ou Dieta">
                  Trimestral - Treino ou Dieta
                </option>
                <option value="Semestral - Treino ou Dieta">
                  Semestral - Treino ou Dieta
                </option>
                <option value="Anual - Treino ou Dieta">
                  Anual - Treino ou Dieta
                </option>
               </select>
               <button
                  class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-cor-1
                  bg-transparent
                  border-2 border-cor-1
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-cor-1 hover:border-primary
                  transition
                  "
                  >
               Saber mais!
               </button>
            </div>
      </section>
    </div>
  </div>



</template>

<script>
export default {
  data() {
    return {
      valorPresencial: 0,
      valorOnline: 0,
      produtoOnline: "",
      produtoPresencial: "",
    };
  },
  methods: {
    mudarPlanoPresencial() {
      const elementoPresencial = document.querySelector("#selectPresencial");
      if (elementoPresencial.value == "Selecionar") {
        this.valorPresencial = 0;
      }
      if (elementoPresencial.value == "Mensal") {
        this.valorPresencial = 350;
      }
      if (elementoPresencial.value == "Mensal - Treino ou Dieta") {
        this.valorPresencial = 350;
      }
      if (elementoPresencial.value == "Bimestral") {
        this.valorPresencial = 570/2;
      }
      if (elementoPresencial.value == "Bimestral - Treino ou Dieta") {
        this.valorPresencial = 430/2;
      }
      if (elementoPresencial.value == "Trimestral") {
        this.valorPresencial = 840/3;
      }
      if (elementoPresencial.value == "Trimestral - Treino ou Dieta") {
        this.valorPresencial =  590/3;
      }
      if (elementoPresencial.value == "Semestral") {
        this.valorPresencial = 1590/6;
      }
      if (elementoPresencial.value == "Semestral - Treino ou Dieta") {
        this.valorPresencial = 990/6;
      }
      if (elementoPresencial.value == "Anual") {
        this.valorPresencial = 3000/12;
      }
      if (elementoPresencial.value == "Anual - Treino ou Dieta") {
        this.valorPresencial = 1800/12;
      }
    },
    mudarPlanoOnline() {
      const elementoOnline = document.querySelector("#selectOnline");
      if (elementoOnline.value == "Selecionar") {
        this.valorOnline = 0;
      }
      if (elementoOnline.value == "Mensal") {
        this.valorOnline = 300;
      }
      if (elementoOnline.value == "Bimestral") {
        this.valorOnline = 500/2;
      }
      if (elementoOnline.value == "Trimestral") {
        this.valorOnline = 699/3;
      }
      if (elementoOnline.value == "Semestral") {
        this.valorOnline = 1320/6;
      }
      if (elementoOnline.value == "Anual") {
        this.valorOnline = 2400/12;
      }
      if (elementoOnline.value == "Mensal - Treino ou Dieta") {
        this.valorOnline = 240;
      }
      if (elementoOnline.value == "Bimestral - Treino ou Dieta") {
        this.valorOnline = 300/2;
      }
      if (elementoOnline.value == "Trimestral - Treino ou Dieta") {
        this.valorOnline = 390/3;
      }
      if (elementoOnline.value == "Semestral - Treino ou Dieta") {
        this.valorOnline = 720/6;
      }
      if (elementoOnline.value == "Anual - Treino ou Dieta") {
        this.valorOnline = 1300/12;
      }
    },
    compraOnline() {},
  },
};
</script>

<style>
#card-online,
#card-presencial {
  transition: ease-in-out 0.2s;
}
@media (max-width: 869px) {
  #card-online,
  #card-presencial {
    width: 40%;
  }
}
@media (max-width: 689px) {
  #planos {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  #card-online,
  #card-presencial {
    width: 70%;
  }
}
@media (max-width: 400px) {
  #card-online,
  #card-presencial {
    width: 90%;
  }
}
</style>