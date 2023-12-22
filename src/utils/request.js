import axios from 'axios'

const request = (
  endpoint = '',
  method = 'GET',
  params = {},
  token,
  callback = () => {},
  callback_error = () => {},
) => {
  axios({
    method: method,
    url: `${endpoint}`,
    params: params, // Use params para incluir parâmetros de consulta na URL
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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

// Exemplo de uso:
const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing'

const params = {
  language: 'en-US',
  page: 1,
}

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMwM2VkNzZjNzE4NGVhNDI0NGFjMjI2MTgzMWMzZSIsInN1YiI6IjY1ODRjMWUzNzVmMWFkMTY4OTZkYzk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ioUiTj6EKTNpxrF-AqhWAuNzoQaqg5yPjgjJrtIZ1to' // Substitua pela sua token de autorização

request(
  apiUrl,
  'GET',
  params,
  token,
  (response) => {
    console.log('Dados recebidos:', response.data)
  },
  (error) => {
    console.error('Erro na requisição:', error)
  },
)
