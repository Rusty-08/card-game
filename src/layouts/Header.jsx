import React from 'react'
import logo from '../assets/images/logo.png'
import Atropos from "atropos/react"

export default function Header({ isPlaying }) {
  return (
    <>
      <Atropos
        shadow={false}
        activeOffset={30}
      >
        <img src={logo} className={`${isPlaying ? 'h-28' : 'h-32'} transition-all duration-500 ease-in-out`} />
      </Atropos>
      <h1 className={`${isPlaying ? 'text-2xl px-14 mt-2' : 'text-[4rem] px-24 mt-10'} transition-all duration-500 ease-in-out bg-gradient-to-r from-transparent via-orange-950 to-transparent text-blue-200 font-bold tracking-wider mb-5`}>MEMORY GAME</h1>
    </>
  )
}
