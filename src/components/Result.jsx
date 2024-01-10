import React from 'react'
import Button from './Button'

export default function Result({ hasWon, restartGame, isGameEnded }) {
  return (
    <div className={`transform ${isGameEnded ? 'scale-100 lg:h-80 relative opacity-100' : 'scale-0 absolute opacity-0'} transition-transform duration-500 ease-in-out flex items-center justify-center flex-col gap-10`}>
      <div className='flex flex-col items-center'>
        <h2 className='text-[3rem] tracking-wide text-sky-200'>
          {hasWon ? 'You win' : 'You lose'}
        </h2>
        <p className='text-xl tracking-wide text-slate-400'>
          {hasWon ? 'Great job!' : 'You pick the same card'}
        </p>
      </div>
      <Button onClick={restartGame}>
        Play Again
      </Button>
    </div>
  )
}
