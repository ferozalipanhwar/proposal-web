import styles from './DreamsWeBuild.module.css'

const dreams = [
  { icon: '🏡', title: 'A home full of peace', text: 'A place where love is quiet, steady, and deeply comforting.' },
  { icon: '🚀', title: 'Dreams we chase together', text: 'Every little ambition becomes bigger when we hold each other through it.' },
  { icon: '🌍', title: 'A life with meaning', text: 'We will build a future with kindness, laughter, purpose, and presence.' },
  { icon: '💍', title: 'A forever with intention', text: 'Not just a promise, but a life we choose every single day.' }
]

export default function DreamsWeBuild({ id }){
  return (
    <section id={id} className={styles.section}>
      <div className={styles.headerWrap}>
        <p className={styles.kicker}>🌌 Dreams we build</p>
        <h2 className={styles.title}>The future I want with you</h2>
      </div>

      <div className={styles.grid}>
        {dreams.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon} aria-hidden>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
