<template>
  <div class="w-full bg-cor-3 text-white">
    <h1 class="text-5xl text-center pb-10 pt-20">Consultoria Online</h1>
    <h2 class="text-3xl text-center py-10">
      <span class="border-t-2 border-cor-2 pt-10"
        >Caminho traçado, só basta o próximo passo</span
      >
    </h2>
  </div>
  <div class="container">
     <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          style="enable-background: new 0 0 100 100"
          xml:space="preserve"
          class="w-20 absolute top-20"
        >
          <g>
            <path
              d="M44.8,20.5c-1.4-0.6-3.1-0.2-4.2,1L15.2,47.6c-1.5,1.6-1.5,4,0,5.5l25.4,26.1c0.9,0.9,2,1.4,3,1.4c0.4,0,0.9-0.1,1.3-0.3   c1.3-0.5,2.1-1.8,2.1-3.4V63h34c2.2,0,4-1.8,4-4V41c0-2.2-1.8-4-4-4l-34,0V24C47,22.4,46.1,21,44.8,20.5z M81,41v18H47   c-2.2,0-4,1.8-4,4l0,13.1L18,50.4l25-25.7V37c0,2.2,1.8,4,4,4H81z" fill="#a4cc37"
            />
          </g>
        </svg>
      </router-link>
       
     
    <div
      id="ajusta-tela-confirmacao"
      class="
        flex flex-col
        w-full
        flex-wrap
        items-center
        justify-around
        h-[1000px]
      "
    >
      <div
        id="produto-presencial"
        class="
          
          bg-white
          rounded-xl
          relative
          overflow-hidden
          border border-cor-1
          shadow-pricing
          py-14
          mt-10
          px-8
          w-1/2
        "
      >
        <span
          class="
            text-primary
            font-semibold
            text-2xl
            block
            mb-4
            border-b-4 border-cor-2
          "
        >
          Consultoria Online
        </span>

        <p class="text-base text-body-color pb-8">
          Você terá acesso a um questionário onde todas suas informações deverão
          ser preenchidas como: objetivo, idade, altura, lesões ou dores,
          experiência de treino, horas de sono, rotina alimentar. Todas essas
          informações servirão para montar um planejamento de treino e dieta
          individualizado para você, feito pela minha empresa.
        </p>
        <div class="mb-5">
          <p class="text-base mt-3 font-semibold">
            Análise Postural e Estética
          </p>
          <small>
            Feita por meio de fotos e vídeos que serão enviadas por você no
            questionário de anamnese.</small
          >

          <p class="text-base mt-3 font-semibold">Treino e Acompanhamento</p>
          <small>
            Seu treino será enviado com toda estrutura de exercícios e aeróbios,
            garantindo todo o suporte na execução.
          </small>
        </div>
      </div>
      <div id="atencao-regras" class="pb-10 w-1/2 text-base ">
        <h3 class="text-red-600 font-semibold py-3">Atenção:</h3>
        <ul class="">
          <li>
            Será feita identificação de possíveis desequilíbrios musculares e
            através desses dados iremos elaborar um treino direcionado para
            melhora do quadro e a melhora estética.
          </li>
          <li>
            Suas dúvidas sobre o treino, correções dos exercícios e dieta serão
            todas feitas de segunda a sexta pelo WhatsApp de dúvidas, exclusivo
            para alunos com prazo de resposta de 24hs00.
          </li>
          <li>
            Nesse módulo de consultoria você ganhará acesso ao questionário de
            saúde para preencher, e todo seu atendimento será de forma 100%
            online. Após preencher o questionário irá receber todo seu material
            de acordo com o módulo que escolheu dentro de 5 dias úteis.
          </li>
        </ul>
      </div>

      <div id="regras-compra" class="w-1/2">
        <div class="w-full">
          <div
            id="ajusta-dados"
            class="font-semibold text-xl text-center uppercase pb-5"
          >
            <p>Consultoria Online</p>
            <p>Plano {{ $route.params.produto }}</p>
            <p>Valor total do produto R${{ $route.params.valor }}</p>
            <small>Equivalente a R${{ $route.params.valorMes }}/mês</small>
          </div>
          <button
           
            class="
              block
              mt-20
              mb-20
              m-auto
              text-base
              font-semibold
              border-4 border-cor-2
              rounded-md
              text-center
              py-5
              px-20
              relative
              group
              bg-cor-4
              before:absolute
              before:inset-0
              before:bg-cor-2
              before:scale-x-0
              before:origin-right
              before:transition
              before:duration-300
              hover:before:scale-x-100 hover:before:origin-left
            "
          >
            <span class="relative uppercase text-base">Confirmar compra</span>
          </button>
        </div>
        <div class="tracking-wide w-4/5 text-base m-auto">
          <p class="text-red-600 font-semibold">Politica de desistência:</p>
          <p>
            A consultoria engloba sua VAGA, análise das suas informações
            enviadas pela anamnese, avaliação, prescrição do treino e
            acompanhamento pelo canal de dúvidas. O prazo de desistência é de 7
            dias da compra do serviço, antes do registro do seu login.Ao enviar
            seu cadastro e ter seu login aprovado não há mais possibilidade de
            devolução do valor do plano visto que suas informações já estão
            sendo analisadas e seu planejamento de treino sendo feito. Não
            reembolsamos planos trimestrais, semestrais e anuais se você
            desistir ao longo da consultoria, porque ao enviar suas informações
            toda sua periodização já é montada. Não se trata de um produto novo
            a cada mês, logo o plano a longo prazo tem o mesmo prazo de
            desistência de 7 dias. Não reembolsamos treinos onde o cliente não
            gostou da prescrição, todos os treinos são pensados para sua
            necessidade atual e propriedade técnica envolvida, logo não está
            disponível para concordância ou não do cliente sobre o que foi
            prescrito
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      valorO: 0,
      valorTotal: 0,
      produtoSelecionado: "",
    };
  },
  methods: {
  
  },
  mounted() {
    this.valorO = this.$route.params.valorMes;
    this.valorTotal = this.$route.params.valor;
    this.produtoSelecionado = this.$route.params.produto;
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>


<style>
@media (max-width: 1070px) {
}
</style>