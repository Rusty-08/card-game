import { useEffect, useState } from 'react';
import Board from './layouts/Board';
import Header from './layouts/Header';
import Button from './components/Button';
import Sound from './components/SoundButtons';
import Faq from './components/Faq';

const levels = ['Easy', 'Medium', 'Hard']

function App() {
  const [level, setLevel] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVolumeMuted, setIsVolumeMuted] = useState(false)

  const play = name => {
    setIsPlaying(true)
    setLevel(name)
  }

  const restart = () => {
    setIsPlaying(false)
    setLevel('')
  }

  return (
    <div className='App relative h-screen w-full flex-col flex items-center justify-center overflow-hidden'>
      <Header isPlaying={isPlaying} reload={restart} />
      {
        isPlaying
          ? <Board level={level} isVolumeMuted={isVolumeMuted} />
          : <div className='flex gap-4 my-10'>
            {
              levels.map(name => (
                <Button
                  key={name}
                  onClick={() => play(name)}
                >
                  {name}
                </Button>
              ))
            }
          </div>
      }
      <Sound
        isVolumeMuted={isVolumeMuted}
        setIsVolumeMuted={() => setIsVolumeMuted(!isVolumeMuted)} />
      <Faq />
    </div>
  )
}

export default App
