import React from 'react'
import Button from './Button'

export default function Result({ hasWon, restartGame }) {
  return (
    <div className="lg:h-80 flex items-center justify-center flex-col gap-5">
      <h1 className='text-[3rem] text-sky-200'>
        {
          hasWon
            ? 'You win'
            : 'You lose'
        }
      </h1>
      <Button onClick={restartGame}>
        Play Again
      </Button>
    </div>
  )
}
