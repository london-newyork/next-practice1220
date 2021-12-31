import styles from './Links.module.css'

export default function Links(props) {

  return (
        <div className={styles.grid}>
            {props.items.map((item) => {
                return(
                        <a key={item.id} href={item.href} className={styles.card}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </a>
                )
            })}
        </div>
  )
}
