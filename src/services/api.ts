import axios from 'axios'

export const apiProd = axios.create({
  baseURL: 'https://ib0fq39q8g.execute-api.sa-east-1.amazonaws.com/prod/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
})

export const apiNewProd = axios.create({
  baseURL: 'https://api.b2cintegrado.com.br/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
})

export const apiHomolog = axios.create({
  baseURL: 'https://s7k146zm2a.execute-api.sa-east-1.amazonaws.com/dev/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
})

export const apiNewHomolog =  axios.create({
  baseURL: 'https://apihomolog.b2cintegrado.com.br/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
})
