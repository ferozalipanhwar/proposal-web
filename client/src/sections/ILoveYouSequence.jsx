import styles from './ILoveYouSequence.module.css'

export default function ILoveYouSequence({ id }){
  return (
    <section id={id} className={styles.section}>
      <div className={styles.particles} />
      <div className={styles.sequence}>
        <h1 className={styles.i}>I</h1>
        <h1 className={styles.love}>LOVE</h1>
        <h1 className={styles.you}>YOU</h1>
      </div>
      <p className={styles.caption}>💖 I don't know what tomorrow holds, but I know exactly where I want my heart to be. With you.</p>
    </section>
  )
}
