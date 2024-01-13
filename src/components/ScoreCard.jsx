import React from 'react'

export default function ScoreCard({ score, bestScore }) {
  return (
    <div className='absolute md:flex hidden flex-col rounded-md top-4 right-4 ps-8 py-4 px-14 shadow-lg bg-primary bg-opacity-10 backdrop-blur-sm'>
      <h1 className='text-blue-200 text-xl'>SCORE: {score}</h1>
      <h1 className='text-blue-200 text-xl'>BEST SCORE: {bestScore}</h1>
    </div>
  )
}
