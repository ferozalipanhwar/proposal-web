import styles from './ParticleBackground.module.css'

export default function ParticleBackground({ subtle=true }){
  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.particles} />
    </div>
  )
}
