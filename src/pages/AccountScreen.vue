<template>
  <div class="space">
    <div class="container">
      <b-navbar-brand href="#" class="img-logo">
        <img center class="desktop-image" src="../../public/Images/Frame.png" alt="Kitten" />
        <span>Crie sua conta e comece a usar</span>
      </b-navbar-brand>
      <b-container fluid class="login">
        <b-row class="form">
          <b-col>
            <input-component
              :icon="'envelope'"
              :label="'Endereço de e-mail'"
              placeholder="jhondoe@example.com"
              v-model="email"
              :InputSize="400"
              :type="email"
              class="mb-3"
            />
          </b-col>
          <ButtonComponent
            :body-text="'Faça login'"
            :buttonSize="400"
            @click="login"
            class="mb-4"
          />
        </b-row>
        <!-- prettier-ignore -->
        <vector>___ OU ___</vector>
        <!-- prettier-ignore -->
        <ButtonComponent :body-text="'Cadastre-se Com Google'" :buttonSize="400" @click="signInWithGoogle" :icon="'google'" class="mb-3" :dynamicBackground="'#202024'" />
        <ButtonComponent
          :body-text="'Login Com Facebook'"
          :buttonSize="400"
          @click="login"
          :icon="'facebook'"
          :dynamicBackground="'#202024'"
          class="mb-3"
        />
        <div class="link-container">
          <div>
            <b-link class="custom-link" href="#foo">Esqueceu sua senha?</b-link>
          </div>
          <div>
            <b-link class="custom-link" href="registerPage"
              >Não possui conta? Crie uma agora</b-link
            >
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { login } from '@/services/fireBaseConfig'
import { db } from '@/services/fireBaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import ButtonComponent from '@/components/ButtonComponent.vue'
import InputComponet from '@/components/InputComponet.vue'
import { signInWithGoogle } from '@/services/fireBaseConfig'
import Alert from '../utils/Alert'

export default {
  name: 'account-screen',
  components: {
    ButtonComponent,
    'input-component': InputComponet,
  },
  data() {
    return {
      email: '',
      checked: false,
      password: '',
      userData: null,
    }
  },
  methods: {
    async login() {
      try {
        const userCredential = await login(this.email, this.password)
        const user = userCredential.user

        // Após o login, busca informações adicionais do usuário no Firestore
        const additionalInfo = await this.fetchAdditionalUserInfo(user.uid)
        // Combina as informações do usuário e as informações adicionais
        this.userData = { ...user, ...additionalInfo }
        this.$router.push('/movies')
      } catch (error) {
        if (error.code === 'auth/invalid-credential') {
          Alert('Os dados não conferem')
        }
      }
    },
    async signInWithGoogle() {
      await signInWithGoogle(this.$router) // Passe this.$router como um argumento
    },
    async fetchAdditionalUserInfo(userId) {
      // Função para buscar informações adicionais do usuário no Firestore
      // Você precisa implementar esta função de acordo com a estrutura do seu Firestore
      // Aqui está um exemplo básico
      const userDocRef = doc(db, 'users', userId)
      const userDoc = await getDoc(userDocRef)

      if (userDoc.exists()) {
        return userDoc.data()
      } else {
        // Se o documento não existir, você pode retornar um objeto vazio ou lidar de outra forma
        return {}
      }
    },
  },
}
</script>
<style>
.link-container {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-link {
  color: #7c7c8a !important;
}
vector {
  color: #7c7c8a;
  width: 75px;
  padding-top: 15px;
  left: 456px;
  border: 1px;
  white-space: nowrap;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 35px;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #b20710;
}

.custom-checkbox .custom-control-label::before {
  background-color: #202024;
  border: none;
}
.space {
  background-color: #121214;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  width: 401px;
  height: 590px;
  left: 517px;
  border-radius: 4px;
  border: 1px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.desktop-image {
  width: 100px;
  height: 87px;
  top: 159px;
  left: 667px;
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
  color: #7c7c8a;
}
label.custom-control-label {
  width: 232px;
  height: 22px;
  color: #e1e2e6;
}
.card-title {
  font-size: 1rem;
  white-space: nowrap;
  color: #7c7c8a;
}

.h4.card-title.ml-2 {
  font-size: 1rem;
  white-space: nowrap;
  color: #7c7c8a;
}
</style>
