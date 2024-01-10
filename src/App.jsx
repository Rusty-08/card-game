import { useEffect, useState } from 'react';
import Board from './components/Board';
import Header from './layouts/Header';
import LandingPage from './layouts/LandingPage';

const levels = [
  'Easy',
  'Medium',
  'Hard'
]

function App() {
  const [level, setLevel] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const play = event => {
    setLevel(event.target.value)
    setIsPlaying(true)
  }

  return (
    <div className='App relative h-screen w-full flex-col flex items-center justify-center'>
      <Header isPlaying={isPlaying} />
      {
        isPlaying
          ? <Board level={level} />
          : <LandingPage levels={levels} setLevel={play} />
      }
    </div>
  )
}

export default App
