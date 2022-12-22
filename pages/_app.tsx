import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from "@next/font/google"
import { wrapper } from '../src/store/store'
import { Provider } from 'react-redux'

const inter = Inter({subsets: ['latin', 'cyrillic']})

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest)
  return (
    <>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily}
      }
    `}</style>
     <Provider store={store}>
     <Component {...props.pageProps} />   
     </Provider>
    </>
  )
}

//

export default wrapper.withRedux(MyApp)