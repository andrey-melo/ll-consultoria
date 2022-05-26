<template>
  <section class="bg-img-aluno bg-center bg-no-repeat bg-cover">
    <div class="container py-20">
      <h1 class="text-center text-white text-5xl py-3">Antes e depois</h1>
      <div
        id="conjunto-banners"
        class="flex justify-between items-center py-10"
      >
        <div class="flex-banner1">
          <div id="banner1" class="rotativo">
            <img class="selected" src="../../imagens-alunos/1.jpg" alt="" />
            <img src="../../imagens-alunos/2.jpg" alt="" />
            <img src="../../imagens-alunos/3.jpg" alt="" />
          </div>
        </div>
        <div class="flex-banner2">
          <div id="banner2" class="rotativo">
            <img class="selected" src="../../imagens-alunos/4.jpg" alt="" />
            <img src="../../imagens-alunos/5.jpg" alt="" />
            <img src="../../imagens-alunos/6.jpg" alt="" />
          </div>
        </div>
        <div class="flex-banner3">
          <div id="banner3" class="rotativo">
            <img class="selected" src="../../imagens-alunos/7.jpg" alt="" />
            <img src="../../imagens-alunos/8.jpg" alt="" />
            <img src="../../imagens-alunos/9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imagemAtual1: 0,
      imagemAtual2: 0,
      imagemAtual3: 0,
    };
  },
  methods: {
    start1() {
      setInterval(() => {
        this.proximaImagem1();
      }, 3000);
    },
    start2() {
      setInterval(() => {
        this.proximaImagem2();
      }, 3000);
    },
    start3() {
      setInterval(() => {
        this.proximaImagem3();
      }, 3000);
    },
    proximaImagem1() {
      let imagem = document.querySelectorAll("#banner1 img");
      let maxImagem = imagem.length;

      imagem[this.imagemAtual1].classList.remove("selected");

      this.imagemAtual1++;

      if (this.imagemAtual1 >= maxImagem) {
        this.imagemAtual1 = 0;
      }

      imagem[this.imagemAtual1].classList.add("selected");
    },
    proximaImagem2() {
      let imagem = document.querySelectorAll("#banner2 img");
      let maxImagem = imagem.length;

      imagem[this.imagemAtual2].classList.remove("selected");

      this.imagemAtual2++;

      if (this.imagemAtual2 >= maxImagem) {
        this.imagemAtual2 = 0;
      }

      imagem[this.imagemAtual2].classList.add("selected");
    },
    proximaImagem3() {
      let imagem = document.querySelectorAll("#banner3 img");
      let maxImagem = imagem.length;

      imagem[this.imagemAtual3].classList.remove("selected");

      this.imagemAtual3++;

      if (this.imagemAtual3 >= maxImagem) {
        this.imagemAtual3 = 0;
      }

      imagem[this.imagemAtual3].classList.add("selected");
    },
  },
  mounted() {
    this.start1();
    this.start2();
    this.start3();
  },
};
</script>

<style>
#banner1,
#banner2,
#banner3 {
  position: relative;
  z-index: 5;
  width: 300px;
  height: 300px;
}
#banner1 img,
#banner2 img,
#banner3 img {
  opacity: 0;
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: opacity 2s;
}
#banner1 img.selected {
  opacity: 1;
  object-fit: cover;
}
#banner2 img.selected {
  opacity: 1;
  object-fit: cover;
}
#banner3 img.selected {
  opacity: 1;
  object-fit: cover;
}
@media (max-width: 1020px) {
  #conjunto-banners {
    flex-direction: column;
    gap: 30px;
  }
  .flex-banner1 {
    align-self: flex-start;
  }
  .flex-banner3 {
    align-self: flex-end;
  }
}
@media (max-width: 400px) {
  #conjunto-banners {
    flex-direction: column;
    gap: 30px;
  }
  .flex-banner1,
  .flex-banner3 {
    align-self: center;
  }
}
</style>