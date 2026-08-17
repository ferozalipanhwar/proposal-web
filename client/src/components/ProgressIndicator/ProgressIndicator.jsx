import styles from './ProgressIndicator.module.css'

export default function ProgressIndicator({ total=10 }){
  return (
    <div className={styles.wrap} aria-hidden>
      <span className={styles.num}>01</span>
      <span className={styles.sep}>/</span>
      <span className={styles.total}>{String(total).padStart(2,'0')}</span>
    </div>
  )
}
