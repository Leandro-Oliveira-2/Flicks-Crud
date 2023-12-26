<template>
  <div class="space">
    <b-container fluid class="login">
      <b-navbar-brand href="#" class="img-logo">
        <img center class="desktop-image" src="../../public/Images/Frame.png" alt="Kitten" />
        <span>Faça login e comece a usar</span>
      </b-navbar-brand>
      <b-form class="d-flex flex-column mb-3 justify-content-center">
        <b-row class="mb-4">
          <b-row>
            <b-col>
              <input-component
                :icon="'envelope'"
                :label="'E-mail'"
                v-model="email"
                :type="'email'"
                placeholder=" jhondoe@example.com"
              />
            </b-col>
            <b-col>
              <input-component
                :icon="'circle-user'"
                :label="'Nome'"
                :type="'name'"
                v-model="additionalAttributes.nome"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="input-container">
                <label class="input-label">CPF</label>
                <input-component
                  :icon="'address-card'"
                  placeholder=" jhondoe@example.com"
                  v-model="additionalAttributes.cpf"
                  :type="'CPF'"
                />
              </div>
            </b-col>
            <b-col>
              <input-component
                :icon="'calendar-xmark'"
                :label="'Data Nascimento'"
                :type="'date'"
                placeholder=" jhondoe@example.com"
                v-model="additionalAttributes.dataNascimento"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <input-component
                :icon="'unlock'"
                :aria-placeholder="'***********'"
                :label="'Senha'"
                :type="'password'"
                v-model="password"
              />
            </b-col>
            <b-col>
              <input-component
                :icon="'unlock'"
                aria-placeholder="***********"
                :label="'Confirme a Senha'"
                :type="'password'"
              />
            </b-col>
          </b-row>
        </b-row>
        <b-row class="flex-column">
          <ButtonComponent
            :body-text="'Continue'"
            :buttonSize="250"
            @click="register"
            class="mb-3"
          />
          <ButtonComponent
            :body-text="'Voltar ao login'"
            :buttonSize="250"
            :color="'input-theme'"
            @click="redirect"
          />
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import InputComponet from '@/components/InputComponet.vue'
import { signUp } from '@/services/fireBaseConfig'
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
  name: 'RegisterUser',
  components: {
    'input-component': InputComponet,
    ButtonComponent,
  },
  data() {
    return {
      email: '',
      password: '',
      additionalAttributes: {
        nome: '',
        cpf: '',
        dataNascimento: '',
      },
    }
  },
  methods: {
    log() {
      alert(this.email + ' ' + this.password)
    },
    async register() {
      try {
        await signUp(this.email, this.password, this.additionalAttributes)
        alert('Usuário cadastrado com sucesso!')
        console.log('Usuário cadastrado com sucesso!')
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error.message)
      }
    },
    redirect() {
      this.$router.push('/loginPage')
    },
  },
}
</script>
<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  background-color: #ffffff00;
  width: 900px;
  height: 70vh;
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
  margin-bottom: 3rem;
  color: #7c7c8a;
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
