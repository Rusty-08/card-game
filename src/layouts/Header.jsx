import React from 'react'
import logo from '../assets/images/logo.png'
import Atropos from "atropos/react"
import Button from '../components/Button'

export default function Header({ isPlaying, reload }) {
  return (
    <>
      <Atropos
        shadow={false}
        activeOffset={30}
        className='md:m-0 -mt-8'
      >
        <Button className='bg-transparent hover:bg-transparent hover:scale-100 p-0' onClick={reload}>
          <img src={logo} className={`${isPlaying ? 'md:h-28 h-16' : 'md:h-32 h-24'} transition-all duration-700 ease-in-out`} />
        </Button>
      </Atropos>
      <h1 className={`${isPlaying ? 'md:text-2xl px-14 mt-2' : 'md:text-[4rem] text-[2.5rem] text-nowrap px-24 mt-10'} transition-all duration-700 ease-in-out bg-gradient-to-r from-transparent via-slate-800 to-transparent text-primary grayscale font-bold tracking-wider mb-5`}>MEMORY GAME</h1>
    </>
  )
}
