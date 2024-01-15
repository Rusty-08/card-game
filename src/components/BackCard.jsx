import React from 'react'
import backImage from '../assets/images/back-image.jpg'
import Atropos from "atropos/react"

export default function BackCard() {
  return (
    <div key="back">
      <Atropos
        shadow={false}
        activeOffset={30}
        className='cursor-pointer'
      >
        <div className="md:w-60 md:h-80 w-36 h-48 rounded-lg overflow-hidden">
          <img src={backImage} className='h-full w-full' />
        </div>
      </Atropos>
    </div>
  )
}
