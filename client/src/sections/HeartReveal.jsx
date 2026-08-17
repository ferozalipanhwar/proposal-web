import { useState } from 'react'
import styles from './HeartReveal.module.css'

const messages = [
  'If you could see my heart, you would see how deeply it has started to belong to you.',
  'You would see the quiet way I think of you in the middle of ordinary days.',
  'You would see how much your smile changes the shape of my world.',
  'You would see every feeling I had no courage to say out loud.',
  'And in the end, you would see the truest truth of all: my heart has always been finding its way back to you.'
]

export default function HeartReveal({ id }){
  const [index,setIndex] = useState(-1)
  const handle = ()=> setIndex(i=>Math.min(i+1,messages.length-1))

  return (
    <section id={id} className={styles.section} onClick={handle} role="button" tabIndex={0} aria-label="Reveal loving message">
      <div className={styles.heartWrap}>
        <div className={styles.heart} aria-hidden="true" />
      </div>
      <div className={styles.msg}>
        {index >= 0 ? messages[index] : '💗 If you could see my heart...'}
      </div>
    </section>
  )
}
