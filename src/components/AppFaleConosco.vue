<template>
  <section>
    <div class="relative w-full">
      <div
        id="area-fale-conosco"
        class="
          w-full
          mx-auto
          py-40
          bg-contato-banner bg-center bg-no-repeat bg-cover
        "
      >
        <div class="container">
          <p
            id="text-fale-conosco"
            class="absolute text-white text-5xl right-20 top-8 z-10"
          >
            Alguma dúvida? Estamos aqui! Entre em contato conosco!
          </p>
          <button
            id="btn-fale-conosco"
            class="
              absolute
              right-0
              left-0
              bottom-5
              block
              w-60
              m-auto
              py-2
              font-semibold
              tracking-widest
              text-black text-lg
              border-b-4 border-cor-2
              rounded-md
              bg-cor-2
              hover:bg-cor-4 hover:text-white
            "
          >
            <a href="">Fale conosco</a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#text-fale-conosco {
  max-width: 500px;
}
@media (max-width: 669px) {
  #text-fale-conosco {
    width: 80%;
    left: 0;
    right: 0;
    display: block;
    margin: auto;
  }
}
@media (max-width: 550px) {
  #text-fale-conosco {
    font-size: 40px;
  }
}
@media (max-width: 400px) {
  #text-fale-conosco {
    font-size: 35px;
  }
}
</style>