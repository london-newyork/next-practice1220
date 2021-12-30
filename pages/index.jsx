import Head from 'next/head'
// import Link from 'next/Link'
import styles from 'styles/Home.module.css'
import Footer from 'src/components/Footer'
import Main from 'src/components/Main'
import Header from 'src/components/Header'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter()
  const {text, array, handleChange, handleAdd } = useInputArray()
  useBgLightBlue()

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.containerTopArea}>
        {isShow ? <h1>{count}</h1> : null}
          <button
            onClick={ handleClick }
          >
            ボタン
          </button>
          <button
            onClick={ handleDisplay }
          >
            {isShow ? "非表示" : "表示"}
          </button>
          <input type="text" value={text} onChange={ handleChange }/>
          <button onClick={ handleAdd }>追加</button>
          <ul>
            {array.map((item) =>{
              return (
                <li key={item}>{item}</li>
              )
            })}
          </ul>
      </div>
      <Main page="index"/>
      <Footer />
    </div>
  )
}
