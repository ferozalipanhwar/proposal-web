import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import styles from './MemoryTimeline.module.css'

export default function MemoryTimeline({ id }){
  const [memories,setMemories] = useState([])
  const containerRef = useRef()

  useEffect(()=>{
    axios.get('/api/memories').then(r=>setMemories(r.data)).catch(()=>{})
  },[])

  useEffect(()=>{
    const root = containerRef.current
    if(!root) return
    const items = root.querySelectorAll('[data-memory-item]')
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting){
          ent.target.classList.add('visible')
        }
      })
    }, { threshold: 0.25 })
    items.forEach(i=> obs.observe(i))
    return ()=> obs.disconnect()
  },[memories])

  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>🕰️ Little Things I Never Want To Forget</h2>
      <div className={styles.list} ref={containerRef}>
        {memories.map(m=> (
          <div className={styles.item} key={m._id} data-memory-item>
            {m.imageUrl && <img loading="lazy" src={m.imageUrl} alt={m.title} />}
            <div className={styles.meta}>
              <h4>{m.title}</h4>
              <p>{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
