import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/index'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default function App({ Component, pageProps, router }: AppProps) {
  return <Provider store={store}><MyApp Component={Component} pageProps={pageProps} router={router} /></Provider>
}
