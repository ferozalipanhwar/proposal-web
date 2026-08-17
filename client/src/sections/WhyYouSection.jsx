import styles from './WhyYouSection.module.css'

const points = [
  '💫 The way your eyes soften when you smile',
  '🌿 The calm I feel in your presence',
  '🌷 Your warmth, your kindness, and your quiet strength',
  '✨ The way you make ordinary days feel meaningful',
  '🏡 The way my heart feels at home with you',
  '🌙 The person you are when life is messy, and still somehow beautiful'
]

export default function WhyYouSection({ id }){
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>💭 Do you know what I see in you?</h2>
      <div className={styles.list}>
        {points.map((p,i)=> (
          <div key={i} className={styles.point} tabIndex={0} aria-label={p}>{p}</div>
        ))}
      </div>
    </section>
  )
}
