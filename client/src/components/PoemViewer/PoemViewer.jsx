import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './PoemViewer.module.css'

export default function PoemViewer({ poem, onClose }){
  const lines = (poem.content || '').split(/\r?\n/).filter(l=>l.trim() !== '')
  const closeRef = useRef()
  const [page, setPage] = useState(0)
  const [linesPerPage, setLinesPerPage] = useState(8)

  useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') onClose(); if(e.key === 'ArrowRight') next(); if(e.key === 'ArrowLeft') prev(); }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    const update = ()=> setLinesPerPage(Math.max(4, Math.floor(window.innerHeight / 90)))
    update()
    window.addEventListener('resize', update)
    return ()=>{ document.removeEventListener('keydown', onKey); window.removeEventListener('resize', update) }
  },[onClose])

  useEffect(()=>{ setPage(0) },[poem])

  const totalPages = Math.max(1, Math.ceil(lines.length / linesPerPage))
  const pageLines = lines.slice(page * linesPerPage, (page+1) * linesPerPage)

  const prev = ()=> setPage(p=> Math.max(0, p-1))
  const next = ()=> setPage(p=> Math.min(totalPages-1, p+1))

  const pageContainer = {
    hidden: (dir=1) => ({ opacity: 0, x: 120 * dir }),
    show: { opacity: 1, x: 0, transition: { staggerChildren: 0.06 } }
  }
  const item = { hidden: { opacity:0, y:8 }, show: { opacity:1, y:0, transition:{duration:0.45} } }

  return (
    <AnimatePresence>
      <motion.div className={styles.overlay} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className={styles.container} role="dialog" aria-modal="true" aria-label={poem.title}>
          <button ref={closeRef} className={styles.close} onClick={onClose} aria-label="Close poem">✕</button>
          <div className={styles.header}>
            <h2 className={styles.title}>{poem.title}</h2>
            <div className={styles.pager} aria-hidden>
              <button className={styles.navBtn} onClick={prev} disabled={page<=0} aria-label="Previous page">‹</button>
              <span className={styles.pageIndicator}>{page+1} / {totalPages}</span>
              <button className={styles.navBtn} onClick={next} disabled={page>=totalPages-1} aria-label="Next page">›</button>
            </div>
          </div>

          <div className={styles.content}>
            <motion.div key={page} custom={page>=0?1:-1} variants={pageContainer} initial="hidden" animate="show" className={styles.pageView}>
              {pageLines.map((l,i)=> (
                <motion.p key={i} variants={item} className={styles.line}>{l}</motion.p>
              ))}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  )
}
