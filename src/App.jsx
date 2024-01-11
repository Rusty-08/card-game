import { useEffect, useState } from 'react';
import Board from './layouts/Board';
import Header from './layouts/Header';
import Button from './components/Button';

const levels = [
  'Easy',
  'Medium',
  'Hard'
]

function App() {
  const [level, setLevel] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const play = name => {
    setLevel(name)
    setIsPlaying(true)
    console.log(level)
  }

  return (
    <div className='App relative h-screen w-full flex-col flex items-center justify-center'>
      <Header isPlaying={isPlaying} />
      {
        isPlaying
          ? <Board level={level} />
          : <div className='flex gap-4 my-10'>
            {
              levels.map(name => (
                <Button key={name} onClick={() => play(name)}>
                  {name}
                </Button>
              ))
            }
          </div>
      }
    </div>
  )
}

export default App
