import { createContext, useContext, useEffect, useRef, useState } from 'react'

const MusicContext = createContext(null)

export const useMusic = () => useContext(MusicContext)

export function MusicProvider({ children }){
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.6)

  useEffect(()=>{
    // lazy create audio element
    if(!audioRef.current){
      audioRef.current = new Audio('/assets/ambient.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = volume
      audioRef.current.preload = 'auto'
    }
  },[])

  useEffect(()=>{ if(audioRef.current) audioRef.current.volume = volume },[volume])
  useEffect(()=>{ if(audioRef.current) audioRef.current.muted = muted },[muted])

  const play = async ()=>{
    try{
      await audioRef.current.play()
      setPlaying(true)
    }catch(e){ console.warn('Playback prevented', e) }
  }
  const pause = ()=>{ audioRef.current.pause(); setPlaying(false) }

  return (
    <MusicContext.Provider value={{ play, pause, playing, muted, setMuted, volume, setVolume, audioRef }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
