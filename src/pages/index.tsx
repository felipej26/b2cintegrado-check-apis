import { useEffect, useState } from 'react'
import { apiHomolog, apiNewHomolog, apiNewProd, apiProd } from '../services/api'
import styles from '../styles/Home.module.css'

type Reponse = {
  isLoading: boolean
  codeStatus: number
  error: string
}

const defaultResponse = {
  isLoading: true, 
  codeStatus: 0,
  error: ''
}

export default function Home() {

  const [responseApiProd, setResponseApiProd] = useState<Reponse>(defaultResponse)
  const [responseApiNewProd, setResponseApiNewProd] = useState<Reponse>(defaultResponse)
  const [responseApiHomolog, setResponseApiHomolog] = useState<Reponse>(defaultResponse)
  const [responseApiNewHomolog, setResponseApiNewHomolog] = useState<Reponse>(defaultResponse)

  useEffect(() => {
    apiProd.post('usuario/autenticar', {
      email: 'felipej2626@gmail.com',
      senha: 'Test@1234'
    }).then(data => {
      setResponseApiProd({
        isLoading: false,
        codeStatus: data.status,
        error: ''
      })
    }).catch(error => {
      console.log(JSON.stringify(error))
      setResponseApiProd({
        isLoading: false,
        codeStatus: 0,
        error: error.message
      })
    })

    apiNewProd.post('usuario/autenticar', {
      email: 'felipej2626@gmail.com',
      senha: 'Test@1234'
    }).then(data => {
      setResponseApiNewProd({
        isLoading: false,
        codeStatus: data.status,
        error: ''
      })
    }).catch(error => {
      setResponseApiNewProd({
        isLoading: false,
        codeStatus: 0,
        error: error.message
      })
    })

    apiHomolog.post('usuario/autenticar', {
      email: 'felipej2626@gmail.com',
      senha: 'Test@1234'
    }).then(data => {
      setResponseApiHomolog({
        isLoading: false,
        codeStatus: data.status,
        error: ''
      })
    }).catch(error => {
      setResponseApiHomolog({
        isLoading: false,
        codeStatus: 0,
        error: error.message
      })
    })

    apiNewHomolog.post('usuario/autenticar', {
      email: 'felipej2626@gmail.com',
      senha: 'Test@1234'
    }).then(data => {
      setResponseApiNewHomolog({
        isLoading: false,
        codeStatus: data.status,
        error: ''
      })
    }).catch(error => {
      setResponseApiNewHomolog({
        isLoading: false,
        codeStatus: 0,
        error: error.message
      })
    })
  }, [])

  function formatError(error: string) {
    return <p>{error === 'Network Error' ? 'CORS Error' : error}</p>
  }

  return (
    <div>
      <h2>Antiga API Prod</h2>
      <p>https://ib0fq39q8g.execute-api.sa-east-1.amazonaws.com/prod/api/v1/</p>
      <p>Carregando: {responseApiProd.isLoading ? 'Sim' : 'Não'}</p>
      <p>Code Status: {responseApiProd.codeStatus}</p>
      {formatError(responseApiProd.error)}

      <h2>Nova API Prod</h2>
      <p>https://api.b2cintegrado.com.br/api/v1/</p>
      <p>Carregando: {responseApiNewProd.isLoading ? 'Sim' : 'Não'}</p>
      <p>Code Status: {responseApiNewProd.codeStatus}</p>
      {formatError(responseApiNewProd.error)}
      
      <h2>Antiga API Homolog</h2>
      <p>https://s7k146zm2a.execute-api.sa-east-1.amazonaws.com/dev/api/v1/</p>
      <p>Carregando: {responseApiHomolog.isLoading ? 'Sim' : 'Não'}</p>
      <p>Code Status: {responseApiHomolog.codeStatus}</p>
      {formatError(responseApiHomolog.error)}

      <h2>Nova API Homolog</h2>
      <p>https://apihomolog.b2cintegrado.com.br/api/v1/</p>
      <p>Carregando: {responseApiNewHomolog.isLoading ? 'Sim' : 'Não'}</p>
      <p>Code Status: {responseApiNewHomolog.codeStatus}</p>
      {formatError(responseApiNewHomolog.error)}
    </div>
  )
}
