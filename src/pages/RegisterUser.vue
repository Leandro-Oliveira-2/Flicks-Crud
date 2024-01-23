<template>
  <div class="register-user">
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
                :buttonSize="400"
                :icon="'envelope'"
                :label="'E-mail'"
                v-model="email"
                :type="'email'"
                placeholder=" jhondoe@example.com"
              />
            </b-col>
            <b-col>
              <input-component
                :buttonSize="400"
                :icon="'circle-user'"
                :label="'Nome'"
                :type="'text'"
                v-model="additionalAttributes.nome"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="input-container">
                <label class="input-label">CPF</label>
                <input-component
                  :buttonSize="400"
                  :icon="'address-card'"
                  placeholder=" jhondoe@example.com"
                  v-model="additionalAttributes.cpf"
                  @input="applyCPFMask()"
                  :type="'text'"
                />
              </div>
            </b-col>
            <b-col>
              <input-component
                :buttonSize="400"
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
                :buttonSize="400"
                :icon="'unlock'"
                :aria-placeholder="'***********'"
                :label="'Senha'"
                :type="'password'"
                v-model="password"
              />
            </b-col>
            <b-col>
              <input-component
                :buttonSize="400"
                :icon="'unlock'"
                aria-placeholder="***********"
                :label="'Confirme a Senha'"
                :type="'password'"
                v-model="confirPassword"
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
import Alert from '../utils/Alert'
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
      confirPassword: '',
      uid: '',
      additionalAttributes: {
        nome: '',
        cpf: '',
        dataNascimento: '',
        favoriteMovies: [],
      },
    }
  },
  methods: {
    async register() {
      if (this.password !== this.confirPassword) {
        return Alert('As senhas não são iguais', 'd')
      }
      if (this.nome == '' || this.cpf == '' || this.dataNascimento == '') {
        return Alert('Preencha todos os campos', 'd')
      }
      try {
        await signUp(this.email, this.password, this.additionalAttributes).then((res) => {
          this.uid = res.uid
        })

        this.userData = {
          email: this.email,
          ...this.additionalAttributes,
          ...{ uid: this.uid },
        }

        localStorage.setItem('user', JSON.stringify(this.userData))
        Alert('Usuário cadastrado com sucesso!')
        this.$router.push({
          name: 'movies',
        })
        console.log('Usuário cadastrado com sucesso!')
      } catch (error) {
        console.log(error.code)
        if (error.code == 'auth/missing-email') {
          return Alert('Preencha Todos os Campos', 'd')
        }
        if (error.code == 'auth/missing-password') {
          return Alert('Preencha todos os campos!', 'd')
        }
        if (error.code == 'auth/email-already-in-use') {
          return Alert('Email já Cadastrado!', 'd')
        }
        if (error.code == 'auth/weak-password') {
          return Alert('A Senha Deve Ter Mais de 6 Digitos!', 'd')
        }
        if (error.code == 'auth/invalid-email') {
          return Alert('Tipo de Email inválido!', 'd')
        }

        console.error('Erro ao cadastrar usuário:', error.message)
      }
    },
    validateCpf(strCPF) {
      var Soma
      var Resto
      Soma = 0
      if (strCPF == '00000000000') return false

      for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
      Resto = (Soma * 10) % 11

      if (Resto == 10 || Resto == 11) Resto = 0
      if (Resto != parseInt(strCPF.substring(9, 10))) return false

      Soma = 0
      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
      Resto = (Soma * 10) % 11

      if (Resto == 10 || Resto == 11) Resto = 0
      if (Resto != parseInt(strCPF.substring(10, 11))) return false
      return true
    },
    redirect() {
      this.$router.push('/loginPage')
    },
    inserStorage() {
      localStorage.setItem('reload', 1)
    },
  },
  mounted() {
    this.inserStorage()
  },
}
</script>
<style scoped>
.row {
  display: flex;
  width: 902px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.register-user {
  background-color: #141414;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  padding-left: 30px;
}

.icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.card-title {
  font-size: 1rem;
  white-space: nowrap;
  color: #000000;
}

@media (max-width: 768px) {
  .row {
    display: flex;
    width: 351px;
    flex-direction: column;
  }
}
</style>
