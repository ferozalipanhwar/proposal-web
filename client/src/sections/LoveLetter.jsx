import { useEffect, useState } from 'react'
import styles from './LoveLetter.module.css'

const letter = `My love,\n\nThere are moments in life that feel like they were waiting for you all along. I did not know I was missing something until I found it in your presence. You have become the kind of peace I never knew I needed, and the kind of joy I never want to lose.\n\nI want to love you in every season of life — in the quiet mornings, the laughter-filled nights, and the difficult days when life feels heavy. I want to choose you, again and again, with patience, with honesty, and with all the love my heart can hold.\n\nIf there is a forever in my future, I want it to include you.\n\nAlways yours,\nFeroz` 

export default function LoveLetter({ id }){
  const [text,setText] = useState('')
  useEffect(()=>{
    let i=0;
    const t = setInterval(()=>{
      setText(letter.slice(0,++i));
      if(i>=letter.length) clearInterval(t)
    },20)
    return ()=>clearInterval(t)
  },[])

  return (
    <section id={id} className={styles.section}>
      <div className={styles.paper}>
        <pre className={styles.pre}>{text}</pre>
      </div>
      <div className={styles.signature}>— Feroz 💌</div>
    </section>
  )
}
