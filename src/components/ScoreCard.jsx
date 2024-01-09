import React from 'react'

export default function ScoreCard({ score, bestScore }) {
  return (
    <div className='absolute rounded-md top-4 right-4 ps-8 py-4 px-14 bg-slate-50 shadow-lg bg-opacity-5 backdrop-blur-[1px]'>
      <h1 className='text-blue-200 text-xl'>SCORE: {score}</h1>
      <h1 className='text-blue-200 text-xl'>BEST SCORE: {bestScore}</h1>
    </div>
  )
}
