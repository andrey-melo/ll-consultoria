<template>
  <header class="header">
    <div class="menu-bar" id="menu-fixo">
      <div class="container">
        <div class="header-block flex items-center justify-between py-2">
          <div class="w-40">
            <img
              class="w-full"
              src="../../imagens/consultoria-menu.png"
              alt="Logo"
            />
          </div>
          <nav id="nav-menu" class="flex items-center justify-end">
            <ul id="links-menu" class="flex w-full justify-between">
              <li class="p-3">
                <a
                  href="#home"
                  class="
                    anim-btn-nav
                    tracking-widest
                    p-3
                    pb-2
                    text-center
                    font-firasans font-semibold
                    hover:text-cor-1
                    rounded-md
                    cursor-pointer
                  "
                  >Home</a
                >
              </li>
              <li class="p-3">
                <a
                  href="#planos"
                  class="
                    anim-btn-nav
                    tracking-widest
                    p-3
                    pb-2
                    text-center
                    font-firasans font-semibold
                    hover:text-cor-1
                    rounded-md
                    cursor-pointer
                  "
                  >Planos</a
                >
              </li>
              <li class="p-3">
                <a
                  href="#bio"
                  class="
                    anim-btn-nav
                    tracking-widest
                    p-3
                    pb-2
                    text-center
                    font-firasans font-semibold
                    hover:text-cor-1
                    rounded-md
                    cursor-pointer
                  "
                  >Bio</a
                >
              </li>
              <li class="p-3">
                <a
                  href="#alunos"
                  class="
                    anim-btn-nav
                    tracking-widest
                    p-3
                    pb-2
                    text-center
                    font-firasans font-semibold
                    hover:text-cor-1
                    rounded-md
                    cursor-pointer
                  "
                  >Alunos</a
                >
              </li>
              <li class="p-3">
                <a
                  href="#contato"
                  class="
                    anim-btn-nav
                    tracking-widest
                    p-3
                    pb-2
                    text-center
                    font-firasans font-semibold
                    hover:text-cor-1
                    rounded-md
                    cursor-pointer
                  "
                  >Contato</a
                >
              </li>
            </ul>
            <button @click="ativaMenu()" class="flex py-2 px-4 text-xl items-center">
              Menu&nbsp;
              <span id="mobile-menu"></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    ativaMenu() {
      let mobileAtivo = document.getElementById("nav-menu");
      mobileAtivo.classList.toggle("ativo");
    },
  },
};
</script>

<style>
.header {
  padding-top: 120px;
}
.menu-bar {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  width: 100%;
  transition: top ease-in-out 0.2s;
  margin: auto;
  background-color: #fff;
}

.anim-btn-nav {
  position: relative;
}
.anim-btn-nav::after {
  content: " ";
  width: 0%;
  height: 4px;
  background-color: #a4cc37;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.3s ease-in-out;
}
.anim-btn-nav:hover::after {
  width: 100%;
}

#menu-fixo.fixed {
  z-index: 10;
  width: 87%;
  border-radius: 20px;
  top: 15px;
  box-shadow: 0px 4px 10px rgb(130 130 130 / 25%);
}

#menu-fixo.fixed img {
  width: 80%;
}
#menu-fixo.fixed ul {
  width: 100%;
  top: 0px;
}
#menu-fixo.fixed #links-menu,
#menu-fixo #links-menu {
  top: 50px;
}

#nav-menu button {
  display: none;
}

#mobile-menu {
  color: #00397d;
  border-top: 2px solid;
  width: 20px;
}
#mobile-menu::after,
#mobile-menu::before {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background-color: currentColor;
  margin-top: 5px;
  transition: 0.3s;
  position: relative;
}
#nav-menu.ativo #mobile-menu {
  border-top-color: transparent;
}
#nav-menu.ativo #mobile-menu::before {
  transform: rotate(135deg);
}
#nav-menu.ativo #mobile-menu::after {
  transform: rotate(-135deg);
  top: -7px;
}

@media (max-width: 999px) {
  #nav-menu button {
    display: flex;
  }
  #nav-menu.ativo ul {
    display: none;
    position: absolute;
    display: block;
    z-index: 50;
    width: 50%;
    top: 165px;
    right: 0px;
    border-radius: 0px 0px 10px 10px;
    background-color: #fff;
    text-align: center;
  }

  #nav-menu.ativo li {
    width: 50%;
    margin: auto;
    margin-top: 20px;
  }

  #nav-menu ul {
    display: none;
  }
}
@media (max-width: 400px) {
  #menu-fixo.fixed #links-menu {
    top: 42px;
    width: 60%;
  }
  #menu-fixo.fixed li {
    width: 100%;
  }
}
@media (min-width: 1200px) {
  #menu-fixo.fixed {
    width: 60%;
  }
}
</style>