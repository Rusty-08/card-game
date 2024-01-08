import React from 'react'
import backImage from '../assets/images/back-image.jpg'

export default function BackCard() {
  return (
    <div
      key="back"
      className='overflow-hidden shadow-md lg:w-60 lg:h-80'
    >
      <img src={backImage} className='object-cover w-full' />
    </div>
  )
}
