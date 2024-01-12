import { Music, Slash, Volume2, VolumeX } from 'lucide-react'
import React, { useRef, useState } from 'react'
import Button from './Button'
import backgroundMusic from '../assets/sound-effects/background-music.mp3'

export default function Sound({ isVolumeMuted, setIsVolumeMuted }) {
  const [isMusicMuted, setIsMusicMuted] = useState(true)
  const volumeRef = useRef(new Audio(backgroundMusic))

  const handleMusicClick = () => {
    setIsMusicMuted(!isMusicMuted)
    volumeRef.current.volume = 0.1
    if (isMusicMuted) {
      volumeRef.current.play()
    } else {
      volumeRef.current.pause()
    }
  }

  return (
    <div className='absolute flex gap-3 bottom-4 left-6'>
      <Button
        className='w-12 h-12 p-3.5'
        onClick={setIsVolumeMuted}
      >
        {!isVolumeMuted ? <Volume2 strokeWidth={1} /> : <VolumeX strokeWidth={1} />}
      </Button>
      <Button
        className='w-12 flex items-center justify-center h-12 p-3.5'
        onClick={handleMusicClick}
      >
        <Music strokeWidth={1} />
        {isMusicMuted && <Slash className='absolute tranform rotate-90' strokeWidth={1} />}
      </Button>
    </div>
  )
}
