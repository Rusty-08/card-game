import React, { useRef } from 'react'
import clickSound from '../assets/sound-effects/click.mp3'
import { twMerge } from 'tailwind-merge'

export default function Button({ type, children, onClick, className, ...props }) {
  const audioRef = useRef(new Audio(clickSound))

  const playClickSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.5;
    audioRef.current.play();
  }

  const combinedClickHandlers = () => {
    playClickSound();
    setTimeout(() => {
      if (onClick) {
        if (Array.isArray(onClick)) {
          onClick.forEach((handler) => handler());
        } else {
          onClick();
        }
      }
    }, 50)
  };

  return (
    <button
      className={twMerge(
        `${type === 'circle' ? 'w-12 h-12 p-3.5 bg-opacity-10 backdrop-blur-sm text-primary hover:bg-opacity-20' : 'text-primary-dark md:px-8 px-6 py-2 md:py-2.5'} flex items-center justify-center font-bold text-xl tracking-wide shadow-lg rounded-full bg-primary hover:bg-primary-hover hover:scale-110 active:bg-opacity-20 backdrop-blur-md transition-all ease-in-out duration-300`,
        className
      )}
      onClick={combinedClickHandlers}
      {...props}
    >
      {children}
    </button>
  )
}
