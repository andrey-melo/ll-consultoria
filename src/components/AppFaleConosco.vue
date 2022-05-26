<template>
  <section>
    <div
      id="area-fale-conosco"
      class="
        w-full
        mx-auto
        p-10
        bg-contato-banner bg-center bg-no-repeat bg-cover
      "
    >
    
      <div class="container">
        <p id="text-fale-conosco" class="text-white text-5xl">
          Alguma dúvida? Estamos aqui! Entre em contato conosco!
        </p>
        <button
          id="btn-fale-conosco"
          class="
            block
            w-60
            m-auto
            py-2
            font-semibold
            tracking-widest
            text-white text-lg
            border-b-4 border-cor-4
            rounded-md
            bg-cor-4
            hover:bg-cor-2 hover:text-black
          "
        >
          <a class="flex justify-center" href=""> Fale conosco</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#text-fale-conosco {
  max-width: 800px;
  height: 300px;
  width: 100%;
  display: block;
  text-align: center;
  margin: auto;
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