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
        `px-8 py-2.5 flex items-center justify-center text-xl tracking-wide shadow-lg text-primary-cream rounded-full bg-primary-dark hover:bg-slate-950 hover:scale-110 active:bg-opacity-20 backdrop-blur-md transition-all ease-in-out duration-300`,
        className
      )}
      onClick={combinedClickHandlers}
      {...props}
    >
      {children}
    </button>
  )
}
