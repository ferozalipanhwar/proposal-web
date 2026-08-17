import { useMusic } from '../../context/MusicContext'
import styles from './MusicController.module.css'

export default function MusicController(){
  const { playing, play, pause, muted, setMuted, volume, setVolume } = useMusic()
  return (
    <div className={styles.controls} aria-hidden>
      <button onClick={()=> playing ? pause() : play()} className={styles.btn}>{playing ? 'Pause' : 'Play'}</button>
      <button onClick={()=> setMuted(!muted)} className={styles.btn}>{muted ? 'Unmute' : 'Mute'}</button>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={e=>setVolume(parseFloat(e.target.value))} />
    </div>
  )
}
