<template>
  <div class="bg-cor-3">
    <div class="container">
      <h1 class="text-white text-center text-4xl pt-10">Planos de treino</h1>
      <h2 class="text-white text-center text-2xl py-3">
        <span class="bg-cor-4 p-2">Com o planejamento bem elaborado,&nbsp;<br />&nbsp;o objetivo é certo!</span>
      </h2>
      <section id="planos" class="pt-10 pb-10 flex justify-around">
        <div
          id="card-presencial"
          class="bg-white w-1/3 shadow-black shadow-xl hover:scale-105 duration-500"
        >
          <div class="bg-cor-2 p-3">
            <h1 class="text-center font-semibold text-xl">
              Consultoria Presencial
            </h1>
          </div>
          <div class="px-7 py-1">
            <p>
              Acompanhamento de acordo com o seu objetivo, onde você receberá um
              material completo de treinamento e dieta, além de conteúdo
              explicativo de cada exercício de forma única para você.
            </p>
            <ul class="list-disc text-left py-3">
              <li>Anamnese (informações necessárias para as prescrições</li>
              <li>Perimetria (medidas e circunferência)</li>
              <li>Percentual de gordura (avaliação e análise</li>
              <li>Uma hora para tirar todas as suas dúvidas pessoalmente</li>
              <li>Atendimento em consultório</li>
            </ul>
          </div>
          <span class="block text-center m-auto text-5xl py-5">
            <sup>R$ </sup>
            <strong>{{ this.valorPresencial }}</strong>
          </span>
          <div>
            <select
              @change="mudarPlanoPresencial()"
              class="border-2 border-black w-4/5 px-3 my-5 block m-auto py-px"
              name="planoPresencial"
              id="selectPresencial"
            >
              <option>Selecionar</option>
              <option>Mensal</option>
              <option>Bimestral</option>
              <option>Trimestral</option>
              <option>Semestral</option>
              <option>Anual</option>
              <option>Mensal - Treino ou Dieta</option>
              <option>Bimestral - Treino ou Dieta</option>
              <option>Trimestral - Treino ou Dieta</option>
              <option>Semestral - Treino ou Dieta</option>
              <option>Anual - Treino ou Dieta</option>
            </select>
            <button
              class="
                block
                w-4/5
                my-3
                mt-auto
                m-auto
                uppercase
                shadow
                bg-cor-1
                hover:bg-blue-700
                py-3
                px-10
                focus:shadow-outline focus:outline-none
                text-white text-xs
                rounded
              "
            >
              Quero contratar!
            </button>
          </div>
        </div>
        <div
          id="card-online"
          class="bg-white w-1/3 shadow-black shadow-xl hover:scale-105 duration-500"
        >
          <div class="bg-cor-2 p-3">
            <h1 class="text-center font-semibold text-xl">
              Consultoria Online
            </h1>
          </div>
          <div class="px-7 py-1">
            <p>
              Acompanhamento de acordo com o seu objetivo, onde você receberá um
              material completo de treinamento e dieta, além de conteúdo
              explicativo de cada exercício de forma única para você.
            </p>
            <ul class="list-disc text-left py-3">
              <li>Anamnese (informações necessárias para as prescrições</li>
              <li>Perimetria (medidas e circunferência)</li>
              <li>Percentual de gordura (avaliação e análise</li>
              <li>Uma hora para tirar todas as suas dúvidas pessoalmente</li>
              <li>Atendimento em consultório</li>
            </ul>
          </div>
          <span class="block text-center m-auto text-5xl py-5">
            <sup>R$ </sup>
            <strong class="ml-1">{{ this.valorOnline }}</strong>
          </span>
          <select
            @change="mudarPlanoOnline()"
            class="border-2 border-black my-5 w-4/5 px-3 block m-auto py-px"
            name="planoOnline"
            id="selectOnline"
          >
            <option>Selecionar</option>
            <option>Mensal</option>
            <option>Bimestral</option>
            <option>Trimestral</option>
            <option>Semestral</option>
            <option>Anual</option>
            <option>Mensal - Treino ou Dieta</option>
            <option>Bimestral - Treino ou Dieta</option>
            <option>Trimestral - Treino ou Dieta</option>
            <option>Semestral - Treino ou Dieta</option>
            <option>Anual - Treino ou Dieta</option>
          </select>

          <router-link to="consultoriaonline">
            <button
              class="
                block
                w-4/5
                my-3
                mt-auto
                m-auto
                uppercase
                shadow
                bg-cor-1
                hover:bg-blue-700
                focus:shadow-outline focus:outline-none
                text-white text-xs
                py-3
                px-10
                rounded
              "
            >
              Quero contratar!
            </button>
          </router-link>
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
    };
  },
  methods: {
    mudarPlanoPresencial() {
      const elementoPresencial = document.querySelector("#selectPresencial");
      if (elementoPresencial.value == "Selecionar") {
        this.valorPresencial = 0;
      } else if (elementoPresencial.value == "Mensal") {
        this.valorPresencial = 350;
      } else if (elementoPresencial.value == "Mensal - Treino ou Dieta") {
        this.valorPresencial = 350;
      }
      if (elementoPresencial.value == "Bimestral") {
        this.valorPresencial = 570;
      }
      if (elementoPresencial.value == "Bimestral - Treino ou Dieta") {
        this.valorPresencial = 430;
      }
      if (elementoPresencial.value == "Trimestral") {
        this.valorPresencial = 840;
      }
      if (elementoPresencial.value == "Trimestral - Treino ou Dieta") {
        this.valorPresencial = 590;
      }
      if (elementoPresencial.value == "Semestral") {
        this.valorPresencial = 1590;
      }
      if (elementoPresencial.value == "Semestral - Treino ou Dieta") {
        this.valorPresencial = 990;
      }
      if (elementoPresencial.value == "Anual") {
        this.valorPresencial = 3000;
      }
      if (elementoPresencial.value == "Anual - Treino ou Dieta") {
        this.valorPresencial = 1800;
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
        this.valorOnline = 500;
      }
      if (elementoOnline.value == "Trimestral") {
        this.valorOnline = 699;
      }
      if (elementoOnline.value == "Semestral") {
        this.valorOnline = 1320;
      }
      if (elementoOnline.value == "Anual") {
        this.valorOnline = 2400;
      }
      if (elementoOnline.value == "Mensal - Treino ou Dieta") {
        this.valorOnline = 240;
      }
      if (elementoOnline.value == "Bimestral - Treino ou Dieta") {
        this.valorOnline = 300;
      }
      if (elementoOnline.value == "Trimestral - Treino ou Dieta") {
        this.valorOnline = 390;
      }
      if (elementoOnline.value == "Semestral - Treino ou Dieta") {
        this.valorOnline = 720;
      }
      if (elementoOnline.value == "Anual - Treino ou Dieta") {
        this.valorOnline = 1300;
      }
    },
  },
};
</script>

<style>
@media (max-width: 869px) {
  #card-online,
  #card-presencial{
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