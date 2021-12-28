import styles from './Main.module.css'
import Links from '../Links'
import Headline from '../Headline'

export default function Main(props) {
  return (
    <div>
      <main className={styles.main}>
        <Headline page={props.page} number={1} array={[1,2,3]}
        >
        <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    </div>
  )
}
