import axios from 'axios'
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

export default request
