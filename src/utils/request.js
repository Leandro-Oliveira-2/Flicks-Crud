import axios from 'axios'
import { checkAuth } from '../services/fireBaseConfig' // Substitua pelo caminho correto
/* import Alert from '../utils/Alert'
import router from '@/router' */
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    language: 'pt-BR',
    page: 1,
  },
  headers: {
    accept: 'application/json',
  },
})

// Adicione um interceptor de solicitação
api.interceptors.request.use(
  async (config) => {
    try {
      await checkAuth()
      return config
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
      return Promise.reject(error)
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

const request = async (
  method = 'GET',
  endpoint = '',
  callback = () => {},
  callback_error = () => {},
) => {
  try {
    // Construir cabeçalho com o token de autenticação
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMwM2VkNzZjNzE4NGVhNDI0NGFjMjI2MTgzMWMzZSIsInN1YiI6IjY1ODRjMWUzNzVmMWFkMTY4OTZkYzk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ioUiTj6EKTNpxrF-AqhWAuNzoQaqg5yPjgjJrtIZ1to',
      accept: 'application/json',
    }

    // Fazer a requisição com os parâmetros fornecidos
    const response = await api({
      method: method,
      url: `/movie/${endpoint}`,
      headers: headers,
    })

    // Chamar a função de callback com a resposta
    callback(response)
  } catch (error) {
    // Chamar a função de callback de erro com o erro
    console.error(error)

    // Adicione sua lógica de redirecionamento para a página de login aqui, se necessário
    callback_error(error)
  }
}

export default request

/* import axios from 'axios'
// Método de requisição com a biblioteca axios
const request = (method = 'GET', endpoint = '', callback = () => {}, callback_error = () => {}) => {
  axios({
    method: method,
    url: `https://api.themoviedb.org/3/movie/${endpoint}`,
    params: {
      language: 'pt-BR',
      page: 1,
    },
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMwM2VkNzZjNzE4NGVhNDI0NGFjMjI2MTgzMWMzZSIsInN1YiI6IjY1ODRjMWUzNzVmMWFkMTY4OTZkYzk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ioUiTj6EKTNpxrF-AqhWAuNzoQaqg5yPjgjJrtIZ1to',
      accept: 'application/json',
    },
  })
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      console.error(error)
      callback_error(error)
    })
}

export default request */
