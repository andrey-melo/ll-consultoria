<template>
  <section  class="">
    <div
      id="area-fale-conosco"
      class="
        w-full
        mx-auto
        h-30vw
        relative
        bg-contato-banner bg-center bg-no-repeat bg-cover
      "
    >
      <p id="text-fale-conosco" class="absolute text-white w-96 text-5xl left-2/3 top-1/2 -translate-y-1/2 -translate-x-2/3 z-10">Alguma dúvida? Estamos aqui! Entre em contato conosco!</p>
      <button
        id="btn-fale-conosco"
        class="
          absolute
          w-60
          left-1/2
          bottom-5 
          -translate-x-1/2
          uppercase
          shadow
          font-semibold
          bg-yellowgreen
          hover:bg-lime-400
          focus:shadow-outline focus:outline-none
          text-xs
          py-3
          px-10
          rounded
        "
      >
        <a href="">Fale conosco</a>
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 321px) {
  #area-fale-conosco{
    height: 40vh;
  }
  #btn-fale-conosco{
    width: 55%;
  }
  #text-fale-conosco{
    font-size: 30px;
    width: 80%;
    top: 75px;
  }
}
</style>