import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../../components/ParticleBackground/ParticleBackground'
import { useMusic } from '../../context/MusicContext'
import styles from './IntroSequence.module.css'

export default function IntroSequence(){
  const [started,setStarted] = useState(false)
  const navigate = useNavigate()
  const music = useMusic()

  const enter = async ()=>{
    setStarted(true)
    // start music only after user click
    if(music && music.play) await music.play()
    setTimeout(()=>{ navigate('/story') }, 900)
  }

  return (
    <div className={styles.container}>
      <ParticleBackground />
      <div className={styles.content}>
        <motion.h3 className={styles.line} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:1}}>Some stories begin with a hello...</motion.h3>
        <motion.h3 className={styles.line} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:1, delay:0.8}}>...and some begin when your heart decides it has found home.</motion.h3>
        <motion.h2 className={styles.title} initial={{opacity:0, filter:'blur(6px)'}} animate={{opacity:1, filter:'blur(0)'}} transition={{duration:1, delay:1.6}}>Mine started the moment I met you ✨</motion.h2>
        <motion.button aria-label="Enter My Story" className={styles.enter} onClick={enter} whileHover={{scale:1.03}} whileTap={{scale:0.98}}>
          Enter My Story 💖
        </motion.button>
      </div>
    </div>
  )
}
