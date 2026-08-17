import styles from './ReasonsIStay.module.css'

const reasons = [
  { icon: '🌷', title: 'You make life softer', text: 'Even the busiest days feel gentler when I know you are in them.' },
  { icon: '🫶', title: 'You make me feel seen', text: 'You understand the parts of me I hide from the rest of the world.' },
  { icon: '🌙', title: 'You make my heart feel safe', text: 'With you, my fears get smaller, and my hope gets bigger.' },
  { icon: '✨', title: 'You make love feel real', text: 'Not just a feeling, but a beautiful choice I want to keep making.' }
]

export default function ReasonsIStay({ id }){
  return (
    <section id={id} className={styles.section}>
      <div className={styles.headerWrap}>
        <p className={styles.kicker}>💞 Why I stay</p>
        <h2 className={styles.title}>Because with you, love feels like home</h2>
      </div>

      <div className={styles.grid}>
        {reasons.map((item) => (
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
