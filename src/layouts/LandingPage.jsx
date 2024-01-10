import React from 'react'
import Button from '../components/Button'

export default function LandingPage({ levels, setLevel }) {
  return (
    <div className='flex gap-4 my-10'>
      {
        levels.map(name => (
          <Button value={name} key={name} onClick={setLevel}>
            {name}
          </Button>
        ))
      }
    </div>
  )
}
