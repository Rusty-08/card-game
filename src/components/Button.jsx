import React from 'react'

export default function Button({ children, ...props }) {
  return (
    <button
      className='text-xl tracking-wide shadow-lg text-sky-100 grayscale rounded-full px-8 py-2.5 bg-slate-900 hover:bg-slate-950 hover:scale-110 active:bg-opacity-20 backdrop-blur-md transition-all ease-in-out duration-300'
      {...props}
    >
      {children}
    </button>
  )
}
