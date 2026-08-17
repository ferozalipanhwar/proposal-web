import styles from './TheBeginning.module.css'

export default function TheBeginning({ id }){
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.h}>💫 Before I knew it...</h2>
        <p className={styles.p}>I never planned for you to become such an important part of my life. But somehow, you became the calm in my chaos, the warmth in my silence, and the person I think about when everything feels a little brighter.</p>
      </div>
    </section>
  )
}
