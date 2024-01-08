import React from 'react'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <>
      <img src={logo} className='h-28' />
      <h1 className='text-2xl bg-gradient-to-r from-transparent via-blue-200 to-transparent px-14 text-blue-900 font-bold tracking-wider py-1 mb-5 mt-2'>MEMORY GAME</h1>
    </>
  )
}
