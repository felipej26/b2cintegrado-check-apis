import { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import { apiNewDev, apiHomolog, apiNewHomolog, apiNewProd, apiProd } from '../services/api'
import styles from '../styles/Home.module.css'

type ReponseAPI = {
  isLoading: boolean
  codeStatus: number
  error: string
}

const defaultResponse = {
  isLoading: true, 
  codeStatus: 0,
  error: ''
}

const defaultData = {
  email: 'felipej2626@gmail.com',
  senha: 'Teste@1234'
}

export default function Home() {

  const [responseApiProd, setResponseApiProd] = useState<ReponseAPI>(defaultResponse)
  const [responseApiNewProd, setResponseApiNewProd] = useState<ReponseAPI>(defaultResponse)
  const [responseApiHomolog, setResponseApiHomolog] = useState<ReponseAPI>(defaultResponse)
  const [responseApiNewHomolog, setResponseApiNewHomolog] = useState<ReponseAPI>(defaultResponse)
  const [responseApiNewDev, setResponseApiNewDev] = useState<ReponseAPI>(defaultResponse)

  useEffect(() => {
    apiProd.post('usuario/autenticar', defaultData).then(data => {
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

    apiNewProd.post('usuario/autenticar', defaultData).then(data => {
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

    apiHomolog.post('usuario/autenticar', defaultData).then(data => {
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

    apiNewHomolog.post('usuario/autenticar', defaultData).then(data => {
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

    apiNewDev.post('usuario/autenticar', defaultData).then(data => {
      setResponseApiNewDev({
        isLoading: false,
        codeStatus: data.status,
        error: ''
      })
    }).catch(error => {
      setResponseApiNewDev({
        isLoading: false,
        codeStatus: 0,
        error: error.message
      })
    })
  }, [])

  function formatError(error: string) {
    return (
      <div className={styles.containerResponseMessage}>
        <div className={styles.redAlert} />
        <p>{error === 'Network Error' ? 'CORS Error' : error}</p>
      </div>
    )
  }

  function formatSuccessMessage() {
    return (
      <div className={styles.containerResponseMessage}>
        <div className={styles.greenAlert} />
        <p>OK</p>
      </div>
    )
  }

  function renderAPIInfo(apiURL: string, response: ReponseAPI) {
    return (
      <>
        <p>{apiURL}</p>
        {response.isLoading ? (
          <Loading />
        ) : (
          <>
            {response.codeStatus > 0 && <p>Code Status: {response.codeStatus}</p>}

            {response.codeStatus >= 200 && response.codeStatus < 300 
              ? formatSuccessMessage() 
              : formatError(response.error)
            }
          </>
        )}
      </>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.apiBlock}> 
        <h2>Antiga API Prod</h2>
        {renderAPIInfo(
          'https://ib0fq39q8g.execute-api.sa-east-1.amazonaws.com/prod/api/v1/', 
          responseApiProd
        )}
      </div>

      <div className={styles.apiBlock}> 
        <h2>Nova API Prod</h2>
        {renderAPIInfo(
          'https://api.b2cintegrado.com.br/api/v1/', 
          responseApiNewProd
        )}
      </div>
      
      <div className={styles.apiBlock}> 
        <h2>Antiga API Homolog</h2>
        {renderAPIInfo(
          'https://s7k146zm2a.execute-api.sa-east-1.amazonaws.com/dev/api/v1/', 
          responseApiHomolog
        )}
      </div>

      <div className={styles.apiBlock}> 
        <h2>Nova API Homolog</h2>
        {renderAPIInfo(
          'https://apihomolog.b2cintegrado.com.br/api/v1/', 
          responseApiNewHomolog
        )}
      </div>

      <div className={styles.apiBlock}> 
        <h2>Nova API Develop</h2>
        {renderAPIInfo(
          'https://daitw8bi5a.execute-api.sa-east-1.amazonaws.com/dev/v1/', 
          responseApiNewDev
        )}
      </div>
    </div>
  )
}
