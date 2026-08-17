import styles from './FuturePromises.module.css'

const promises = [
  { icon: '🌅', title: 'I promise to begin each day with gratitude', text: 'I will wake up grateful for your presence, your laughter, and the quiet miracle of us.' },
  { icon: '🤝', title: 'I promise to choose you again and again', text: 'Even on the hard days, I will still be the man who comes back to you with love, patience, and honesty.' },
  { icon: '💬', title: 'I promise to listen with my whole heart', text: 'Your feelings will always matter, your voice will always be safe, and your dreams will always have room in mine.' },
  { icon: '🌙', title: 'I promise to build a life worth remembering', text: 'A life full of laughter, tenderness, small rituals, and the kind of peace that only grows with time.' }
]

export default function FuturePromises({ id }){
  return (
    <section id={id} className={styles.section}>
      <div className={styles.headerWrap}>
        <p className={styles.kicker}>✨ Future promises</p>
        <h2 className={styles.title}>What I promise you, one day at a time</h2>
      </div>

      <div className={styles.grid}>
        {promises.map((item) => (
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
