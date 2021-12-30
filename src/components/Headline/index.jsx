import styles from './Headline.module.css'

export default function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <p className={styles.description}>
      アイテムの数は{props.children}個です
      {props.children}
      </p>
      <button onClick={props.onClick}>ボタン</button>
      <button onClick={ props.handleReduce }>減らす</button>
    </div>
  )
}
