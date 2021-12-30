// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import 'styles/globals.css'
import Head from "next/head"
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'

export default function MyApp({Component, pageProps}){
  const { count, isShow, handleClick, handleDisplay } = useCounter()
  const {text, array, handleChange, handleAdd } = useInputArray()
  useBgLightBlue()

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  )
}