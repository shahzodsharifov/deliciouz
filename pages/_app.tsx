import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from "@next/font/google"
import { wrapper } from '../src/store/store'

const inter = Inter({subsets: ['latin', 'cyrillic']})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily}
      }
    `}</style>
      <Component {...pageProps} />   
    </>
  )
}

export default wrapper.withRedux(MyApp)