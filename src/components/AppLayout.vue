<template>
  <div>
    <b-navbar class="desktop-navbar">
      <b-navbar-nav>
        <b-navbar-brand href="#">
          <img center class="desktop-image" src="../assets/logo.png" alt="Kitten" />
        </b-navbar-brand>
        <b-nav-item href="/movies">Início</b-nav-item>
        <b-nav-item href="/series">Seríes</b-nav-item>
        <b-nav-item href="/movies">Filmes</b-nav-item>
        <b-nav-item href="/pumpingPage">Bombando</b-nav-item>
        <b-nav-item href="/myList">Minha lista</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <div class="icon-container d-flex align-items-center">
          <b-button class="icon-lupa-button">
            <b-avatar class="avatar-icon">
              <font-awesome-icon icon="magnifying-glass" size="lg" style="color: #d5ddec" />
            </b-avatar>
          </b-button>
          <b-avatar class="avatar-icon">
            <font-awesome-icon icon="bell" size="lg" style="color: #ffffff" />
          </b-avatar>
          <b-avatar
            rounded="sm"
            src="https://i.postimg.cc/FRKMfYYb/AAAABXVGEr6zoc-E82-JPf-Lfx5-LREGANJUg3w-PAAPYc-ROD2m-Qg-LMMgz-ne2j-Sx96e-Xv-FIUn1v-Zl-SMj-Xj0-TWujvls-MCUVc-VKic1-QSvf.png"
          ></b-avatar>
          <div class="drop">
            <b-dropdown id="dropdown-left" variant="transparent" class="m-2 dropdown" right="false">
              <b-dropdown-item href="userProfile">Lista de Favoritos</b-dropdown-item>
              <b-dropdown-item href="userProfile">Tela de Usuário</b-dropdown-item>
              <b-dropdown-item href="loginPage">Sair</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </b-navbar-nav>

      <!-- <b-navbar-nav class="ml-auto">
        <div class="icon-container">
          <b-button>
            <b-avatar class="avatar1">
              <font-awesome-icon icon="magnifying-glass" size="lg" style="color: #d5ddec" />
            </b-avatar>
          </b-button>
          <b-avatar>
            <font-awesome-icon icon="bell" size="lg" style="color: #ffffff" />
          </b-avatar>
          <b-avatar
            rounded="sm"
            src="https://i.postimg.cc/FRKMfYYb/AAAABXVGEr6zoc-E82-JPf-Lfx5-LREGANJUg3w-PAAPYc-ROD2m-Qg-LMMgz-ne2j-Sx96e-Xv-FIUn1v-Zl-SMj-Xj0-TWujvls-MCUVc-VKic1-QSvf.png"
          ></b-avatar>
          <div class="drop">
            <b-dropdown id="dropdown-left" variant="transparent" class="m-2 dropdown" right="false">
              <b-dropdown-item href="userProfile">Lista de Favoritos</b-dropdown-item>
              <b-dropdown-item href="userProfile">Tela de Usuário</b-dropdown-item>
              <b-dropdown-item href="loginPage">Sair</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </b-navbar-nav> -->
    </b-navbar>
    <b-navbar class="mobile-navbar p-0" transparency>
      <b-navbar-nav class="navbar-content">
        <b-navbar-brand href="#">
          <img src="../../public/Images//Icons//SnetFlix.png" fluid-grow alt="Fluid-grow image" />
        </b-navbar-brand>
        <font-awesome-icon
          v-if="showIcon"
          icon="magnifying-glass"
          size="xl"
          style="color: #d5ddec"
          @click="chang()"
          class="font-icon-search"
        />
        <transition name="slide-fade">
          <div v-if="showSearch" class="search-container">
            <font-awesome-icon
              class="lupa"
              icon="magnifying-glass"
              size="xl"
              style="color: #d5ddec"
              @click="chang2()"
            />
            <b-form-input
              size="sm"
              class="mr-sm-1"
              v-model="SearchInput"
              placeholder="Search"
            ></b-form-input>
          </div>
        </transition>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import 'vue2-animate/dist/vue2-animate.min.css'
export default {
  name: 'AppLayout',
  data() {
    return {
      showSearch: false,
      showIcon: true,
      SearchInput: '',
    }
  },
  methods: {
    chang() {
      this.showSearch = !this.showSearch
      this.showIcon = !this.showIcon
    },
    chang2() {
      this.showSearch = !this.showSearch
      setTimeout(() => {
        this.showIcon = !this.showIcon
      }, 1600)
    },
  },
}
</script>
<style scoped>
.lupa {
  margin-left: 47px;
}
button.btn.icon-lupa-button.btn-secondary {
  background-color: transparent;
}
.dropdown-menu {
  left: -217px !important;
}
h4.card-title {
  font-size: 1.5rem;
}
.btn-secondary[data-v-40d62f2b][data-v-40d62f2b] {
  width: 36px;
}
img {
  margin-left: 2rem;
}
.avatar-icon {
  margin-right: 0.5rem;
  background-color: #41e14900;
}
.avatar1 {
  margin-right: -1.7rem;
}
.icon-lupa-button {
  color: #fff;
  background-color: #1175cc00;
  border-color: #6c757d00;
}
.desktop-navbar {
  display: flex; /* Exibido em telas grandes */
  background-color: rgba(255, 255, 255, 0);
  position: relative; /* Adicione esta linha */
  z-index: 100;
  font-size: 1.2rem;
}
.font-icon-search {
  display: flex;
  left: 375px;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: relative;
}
.ul.dropdown-menu.show {
  background-color: #000000;
}
.mobile-navbar.p-0 {
  z-index: 100;
  display: none; /* Oculto em telas grandes */
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  position: relative; /* Adicione esta linha */
}

.desktop-image {
  display: relative; /* Exibido em telas grandes */
  height: 25px; /* Add this line */
  top: 2%;
}
.mobile-image {
  display: none; /* Oculto em telas grandes */
}
.navbar-light .navbar-nav .nav-link {
  color: rgb(255 255 255 / 81%);
}
.btn:hover {
  color: #066ed600;
  text-decoration: none;
  border: none;
}
.button#dropdown-left__BV_toggle_ {
  margin-left: -50px;
  background-color: transparent;
  border: none;
}

.btn-secondary {
  color: #fff;
  background-color: #1175cc;
  border-color: #6c757d;
}
.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button#dropdown-left__BV_toggle_ {
  color: white;
}
/* Quando a largura da tela for 600px ou menos (tipicamente telefones) */
@media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape) {
  .desktop-navbar {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .search-container {
    display: flex;
    align-items: center;
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 1.5s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .form-control-sm {
    height: calc(1.5em + 0.5rem + 2px);
    margin-right: 2%;
    padding: 0.25rem 0.8rem;
    width: 258px;
    border-radius: 5%;
  }
  .desktop-navbar {
    display: none; /* Oculto em telas pequenas */
    width: 100%;
  }

  svg.svg-inline--fa.fa-magnifying-glass {
    margin-right: 12px;
  }

  img {
    margin-left: 18px;
  }
  .mobile-navbar.p-0 {
    display: block; /* Exibido em telas pequenas */
  }
}
</style>
