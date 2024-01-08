import React from 'react'

export default function Button({ children, ...props }) {
  return (
    <button
      className='text-xl shadow-lg text-sky-100 rounded-full px-8 py-2.5 bg-sky-400 bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-20 backdrop-blur-md transition-colors'
      {...props}
    >
      {children}
    </button>
  )
}
