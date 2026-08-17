import axios from 'axios'
import { useEffect, useState } from 'react'
import PoemViewer from '../components/PoemViewer/PoemViewer'
import styles from './PoetryBook.module.css'

export default function PoetryBook({ id }){
  const [poems,setPoems] = useState([])
  const [categories,setCategories] = useState([])
  const [filter,setFilter] = useState('')
  const [openPoem,setOpenPoem] = useState(null)

  useEffect(()=>{
    axios.get('/api/poems').then(r=>{
      setPoems(r.data || [])
      const cats = Array.from(new Set((r.data||[]).map(p=>p.category).filter(Boolean)))
      setCategories(cats)
    }).catch(()=>{})
  },[])

  const list = filter ? poems.filter(p=>p.category===filter) : poems

  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>📖 Words I Could Never Say Out Loud</h2>
      <p className={styles.sub}>So I wrote them instead.</p>

      <div className={styles.controls}>
        <label className={styles.label}>Filter:</label>
        <select value={filter} onChange={e=>setFilter(e.target.value)} aria-label="Filter poems by category">
          <option value=''>All</option>
          {categories.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className={styles.grid}>
        {list.map(p=> (
          <article key={p._id} className={styles.card}>
            <h3>{p.title}</h3>
            <p className={styles.cat}>{p.category}</p>
            <button className={styles.open} onClick={()=>setOpenPoem(p)}>Read</button>
          </article>
        ))}
      </div>

      {openPoem && <PoemViewer poem={openPoem} onClose={()=>setOpenPoem(null)} />}
    </section>
  )
}
