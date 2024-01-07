/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Card({ entry, handleClick, isFlipped }) {


  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div
        key="front"
        className='border bg-slate-800 flex gap-8 items-center justify-center flex-col lg:w-60 lg:h-80'
        onClick={() => {
          handleClick(entry)
        }}
      >
        <img src={entry.image} className='h-3/5 object-cover' />
        <p className="text-slate-100 uppercase text-md">{entry.name}</p>
      </div>
      {
        <div
          key="back"
          className='border bg-slate-800 flex gap-8 items-center justify-center flex-col lg:w-60 lg:h-80'
        >
        </div>
      }
    </ReactCardFlip>
  )
}
