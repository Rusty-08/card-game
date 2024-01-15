import React from 'react'

export default function NumberItem({ selectedCard, cards }) {
  return (
    <h1 className='mt-5 h-8 text-2xl text-blue-200'>
      {selectedCard.length} / {cards.length}
    </h1>
  )
}
