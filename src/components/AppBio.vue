<template>
  <section class="bg-slate-100">
    <div class="container">
      <h1 class="text-center text-5xl py-5">Quem sou eu?</h1>
      <div id="conteudo-bio" class="flex w-full m-auto text-center py-14">
        <div id="foto-bio" class="w-1/3 mx-auto">
          <img
            class="w-full"
            src="../../imagens/bio.jpg"
            alt="Foto Lucas Louveira"
          />
        </div>
        <div id="texto-bio" class="w-1/2">
          <p class="text-center m-auto mt-10 text-xl p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nemo,
            molestiae quod pariatur voluptatibus alias, accusamus ipsum vero
            aliquam optio, illum minima assumenda officiis corporis quas illo.
            Dolorem, blanditiis deserunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam eaque aliquid veniam praesentium facilis
            obcaecati deleniti recusandae assumenda quisquam.
          </p>
          <p class="text-center m-auto mt-10 text-xl p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nostrum iure nesciunt commodi aperiam itaque, aspernatur voluptates
            eum doloribus assumenda provident fugit? Perferendis officia magnam
            possimus totam error magni tenetur.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 400px) {
  #conteudo-bio{
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }
  #texto-bio{
    width: 100%;
  }
  #foto-bio{
    width: 70%;
    margin-top: -20px;
  }
}
</style>