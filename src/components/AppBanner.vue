<template>
  <div class="w-full h-50vw relative">
    <h1
      id="texto-banner"
      class="
        absolute
        max-w-xs
        w-full
        left-6
        bottom-1/2
        text-white text-center text-5xl
        sm:text-6xl
        font-bold
      "
    >
      Construa seu corpo dos sonhos
    </h1>
    <button
      id="btn-banner"
      class="
        absolute
        left-20
        bottom-5
        text-black
        bg-yellowgreen
        p-4
        w-52
        hover:text-black
        font-bold
      "
    >
      Saber mais!
    </button>

    <a
      id="whats-banner"
      target="_blank"
      rel="external"
      href="https://api.whatsapp.com/send?1=pt_BR&phone=556793291928"
      class="absolute bottom-20 right-14 w-40 flex items-center"
      ><img
        class="w-7"
        src="../../imagens-contato/contato-whats.png"
        alt=""
      />&nbsp;(67) 9 9107-4117</a
    >
    <a
      id="insta-banner"
      target="_blank"
      rel="external"
      href="https://www.instagram.com/lucaslouveira/"
      class="absolute bottom-10 right-14 w-40 flex items-center"
      ><img
        class="w-7"
        src="../../imagens-contato/contato-instagram.png"
        alt=""
      />&nbsp;@lucaslouveira</a
    >

    <picture>
      <source
        media="(max-width: 639px)"
        srcset="../../imagens/bannerzeiro-pq2.jpg"
      />
      <img
        class="object-cover w-full h-full"
        src="../../imagens/bannerzeiro.jpg"
        alt="banner"
      />
    </picture>
  </div>
</template>

<script>
export default {};
</script>

<style>
#texto-banner {
  text-shadow: 1px 1px 5px black;
}
@media (max-width: 799px) {
  #texto-banner {
    font-size: 50px;
  }
  #whats-banner {
    bottom: 55px;
  }
  #insta-banner {
    bottom: 20px;
  }
}
@media (max-width: 639px) {
  #texto-banner {
    text-align: left;
    font-size: 45px;
    top: 50px;
  }
  #btn-banner {
    width: 170px;
  }
  #whats-banner {
    bottom: 20px;
    right: 40px;
  }
  #insta-banner {
    bottom: 20px;
    right: 5px;
  }
  #whats-banner,
  #insta-banner {
    width: 28px;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  @media (max-width: 450px) {
    #texto-banner{
        top: 25px;
        font-size: 30px;
    }
    #whats-banner {
      bottom: 5px;
      right: 33px;
    }
    #insta-banner {
      bottom: 5px;
      right: 2px;
    }
    #btn-banner {
      left: 20px;
      width: 140px;
      padding: 5px;
    }
  }
}
</style>