import axios from 'axios'
import { useState } from 'react'
import styles from './ProposalSection.module.css'

export default function ProposalSection({ id }){
  const [result, setResult] = useState(null)
  const [saving, setSaving] = useState(false)

  const submit = async (resp)=>{
    setSaving(true)
    try {
      await axios.post('/api/proposal-response',{ response: resp })
      setResult(resp)
    } finally {
      setSaving(false)
    }
  }

  return (
    <section id={id} className={styles.section}>
      <div className={styles.box}>
        {!result && !saving && (
          <>
            <h2>Will you let me love you for the rest of my life?</h2>
            <p className={styles.subtitle}>I am not asking for a perfect story. I am asking for a future where your heart is beside mine, and mine is always yours.</p>
            <div className={styles.actions}>
              <button className={styles.yes} onClick={()=>submit('YES')}>YES ❤️</button>
              <button className={styles.time} onClick={()=>submit('I NEED A LITTLE TIME')}>I NEED A LITTLE TIME 🤍</button>
            </div>
          </>
        )}

        {saving && <p className={styles.status}>Saving your answer...</p>}

        {result && (
          <div className={result === 'YES' ? styles.responseBoxYes : styles.responseBoxTime}>
            {result === 'YES' && (
              <div className={styles.hearts} aria-hidden="true">
                <span>💖</span>
                <span>💞</span>
                <span>💗</span>
                <span>💘</span>
                <span>💖</span>
                <span>💞</span>
              </div>
            )}

            <h3 className={styles.responseTitle}>
              {result === 'YES' ? '💞 My heart just said yes too.' : '🤍 I understand, and I am still choosing you.'}
            </h3>
            <p className={styles.responseText}>
              {result === 'YES'
                ? 'I want to love you slowly, deeply, and forever. I choose you again and again, and I want to spend my whole life with you ❤️'
                : 'Take your time, my love. I am not asking for a rush; I am asking for a future that includes us when your heart is ready. 🤍'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
