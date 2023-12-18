<template>
  <div class="space">
    <b-container fluid class="login">
      <b-navbar-brand href="#" class="img-logo">
        <img center class="desktop-image" src="../../public/Images/Frame.png" alt="Kitten" />
        <span>Faça login e comece a usar</span>
      </b-navbar-brand>
      <b-row class="form">
        <b-col sm="12">
          <div class="my-1">
            <b-card-title>Endereço de e-mail</b-card-title>
            <div class="input-icon">
              <input
                class="icon-input"
                type="email"
                placeholder=" jhondoe@example.com"
                v-model="email"
              />
              <font-awesome-icon icon="envelope" class="icon" />
            </div>
          </div>
        </b-col>
        <b-col sm="12">
          <div class="my-1">
            <b-card-title>Sua senha</b-card-title>
            <div class="input-icon">
              <input
                class="icon-input"
                type="password"
                placeholder=" jhondoe@example.com"
                v-model="password"
              />
              <font-awesome-icon icon="unlock" class="icon" />
            </div>
          </div>
        </b-col>
        <button v-on:click="login(email, password)">Login</button>
        <div class="row g-0">
          <div class="col-md-7 d-flex align-items-center">
            <font-awesome-icon
              icon="square-check"
              style="color: #242629"
              class="align-self-center"
            />
            <b-card-title class="ml-2">Continuar logado?</b-card-title>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { login } from '@/services/fireBaseConfig'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login(email, password) {
      try {
        const userCredential = await login(email, password)
        localStorage.setItem('user', JSON.stringify(userCredential.user))
        console.log(userCredential.user)
      } catch (error) {
        alert(error)
      }
    },
  },
}
</script>
<style>
.align-self-center {
  align-self: center;
}
.d-flex {
  display: flex;
  align-items: center;
}
.space {
  background-color: #141414;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; /* Alinha horizontalmente ao centro */
  align-items: center; /* Alinha verticalmente ao centro */
}
.login {
  background-color: #ffffff;
  width: 30vw;
  height: 70vh;
  border-radius: 10px;
  border: 1px solid #000000;
}
.my-1 {
  color: black;
  display: flex;
  flex-direction: column; /* Alinha os elementos em uma coluna */
  justify-content: center; /* Alinha horizontalmente ao centro */
  align-items: left; /* Alinha verticalmente ao centro */
}
.desktop-image {
  width: 100px;
  height: 87px;
  top: 159px;
}
.img-logo {
  display: flex;
  justify-content: center; /* Alinha horizontalmente ao centro */
  align-items: center; /* Alinha verticalmente ao centro */
  flex-direction: column; /* Alinha os elementos em uma coluna */
}
span {
  width: 232px;
  height: 22px;
  color: #7c7c8a;
}
input {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 4px;
}

.input-icon {
  position: relative;
  display: inline-block;
}

.icon-input {
  padding-left: 30px; /* Ajuste isso de acordo com o tamanho do seu ícone */
}

.icon {
  position: absolute;
  left: 10px; /* Ajuste isso de acordo com o tamanho do seu ícone */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.card-title {
  font-size: 1rem;
  white-space: nowrap;
  color: #000000;
}
</style>
