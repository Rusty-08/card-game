import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { HelpCircle, X, XCircle } from 'lucide-react'

const faqs = [
  'You just need to avoid picking the same card.',
  'You can click the one piece logo to go back.'
]

export default function Faq() {
  const [displayFaq, setDisplayFaq] = useState(false)
  const faqBody = useRef(null)

  const handleClickOutside = e => {
    if (faqBody.current && !faqBody.current.contains(e.target)) {
      setDisplayFaq(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={faqBody} className='absolute flex z-50 bottom-4 right-6'>
      <div className={`absolute transform ${displayFaq ? 'visible translate-y-0' : 'hidden translate-y-[100%]'} transition-all duration-300 shadow-2xl gap-2 rounded-2xl rounded-br-none flex md:w-[25rem] w-max md:bottom-12 bottom-16 md:right-14 right-0 flex-col`}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className='bg-primary-dark backdrop-blur-md text-primary rounded-full flex gap-2 items-center px-6 py-3'
          >
            <HelpCircle className='w-5 h-5' strokeWidth={1} />
            <p className='m-0 md:text-[1.2rem] text-[0.9rem]'>{faq}</p>
          </div>
        ))}
      </div>
      <Button
        type='circle'
        className='font-sans font-thin'
        onClick={() => setDisplayFaq(!displayFaq)}
      >
        {
          displayFaq
            ? <X strokeWidth={1} />
            : '?'
        }
      </Button>
    </div>
  )
}
