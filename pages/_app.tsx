import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider 
      serverUrl="https://gzrfzcg5hkeh.usemoralis.com:2053/server"
      appId="TQUY9JGQrdBRwYekJwbrdTcwE7vmdO7ocKxGWMew"
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
