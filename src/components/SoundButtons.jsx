import { Music, Slash, Volume2, VolumeX } from 'lucide-react'
import React, { useRef, useState } from 'react'
import Button from './Button'
import backgroundMusic from '../assets/sound-effects/background-music.mp3'

export default function Sound({ isVolumeMuted, setIsVolumeMuted }) {
  const [isMusicMuted, setIsMusicMuted] = useState(true)
  const volumeRef = useRef(new Audio(backgroundMusic))

  const handleMusicClick = () => {
    setIsMusicMuted(!isMusicMuted)
    volumeRef.current.volume = 0.3
    if (isMusicMuted) {
      volumeRef.current.play()
    } else {
      volumeRef.current.pause()
    }
  }

  volumeRef.current.addEventListener('ended', () => {
    volumeRef.current.currentTime = 0;
    volumeRef.current.play()
  });

  return (
    <div className='absolute flex gap-3 bottom-4 left-6'>
      <Button
        type='circle'
        onClick={setIsVolumeMuted}
      >
        {!isVolumeMuted ? <Volume2 strokeWidth={1} /> : <VolumeX strokeWidth={1} />}
      </Button>
      <Button
        type='circle'
        onClick={handleMusicClick}
      >
        <Music strokeWidth={1} />
        {isMusicMuted && <Slash className='absolute tranform rotate-90' strokeWidth={1} />}
      </Button>
    </div>
  )
}
