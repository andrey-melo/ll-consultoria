<template>
  <div class="w-full relative">
    <div class="container">
      <h1
        id="texto-banner"
        class="
          absolute
          max-w-xs
          left-10
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
          px-20
          py-3
          font-semibold
          tracking-widest
          text-white text-lg
          border-b-4 border-cor-4
          rounded-md
          bg-cor-4
          hover:bg-cor-2 hover:text-black
        "
      >
        Saber mais!
      </button>
      <a
        id="whats-banner"
        target="_blank"
        rel="external"
        href="https://api.whatsapp.com/send?1=pt_BR&phone=556793291928"
        class="absolute bottom-20 right-16 w-40 flex items-center"
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
        class="absolute bottom-10 right-16 w-40 flex items-center"
        ><img
          class="w-7"
          src="../../imagens-contato/contato-instagram.png"
          alt=""
        />&nbsp;@lucaslouveira</a
      >
    </div>

    <picture>
      <source
        media="(max-width: 669px)"
        srcset="../../imagens/bannerzeiro-pq.jpg"
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

picture {
  overflow: hidden;
  max-height: 600px;
  display: block;
}
#whats-banner, #insta-banner{
  font-weight: bold;
  right: 20px;
}
#insta-banner{
  bottom: 15px;
}
#whats-banner{
  bottom: 50px;
}
@media (max-width: 859px) {
  #texto-banner {
    font-size: 50px;
    left: 30px;
  }
  #whats-banner {
    bottom: 55px;
    right: 20px;
  }
  #insta-banner {
    bottom: 20px;
    right: 20px;
  }
  #whats-banner,
  #insta-banner,
  #btn-banner {
    transition: 0.5s;
  }
  #btn-banner {
    padding: 15px 70px 15px 70px;
  }
}
@media (max-width: 669px) {
  #texto-banner {
    text-align: left;
    font-size: 45px;
    left: 30px;
    top: 30px;
    padding: 6px 5px 6px 5px;
  }
  #whats-banner {
    bottom: 10px;
    right: 45px;
  }
  #insta-banner {
    bottom: 10px;
    right: 10px;
  }
  #whats-banner,
  #insta-banner {
    width: 28px;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  #btn-banner {
    left: 30px;
    padding: 10px 40px 10px 40px;
  }
}
@media (max-width: 400px) {
  #texto-banner {
    left: 20px;
    top: 25px;
    width: 150px;
    font-size: 25px;
  }
  #whats-banner {
    bottom: 5px;
    right: 40px;
  }
  #insta-banner {
    bottom: 5px;
    right: 5px;
  }
  #btn-banner {
    bottom: 5px;
    left: 20px;
    padding: 4px 15px 4px 15px;
  }
}
</style>