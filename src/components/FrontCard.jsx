import Atropos from "atropos/react"

/* eslint-disable react/prop-types */
export default function Card({ entry, handleClick }) {
  return (
    <div
      key="front"
      onClick={() => {
        handleClick(entry)
      }}>
      <Atropos
        shadow={false}
        activeOffset={30}
        className='cursor-pointer'
      >
        <div className="lg:w-60 lg:h-80 rounded-lg overflow-hidden">
          <img src={entry.image} className='h-full w-full' />
        </div>
      </Atropos>
    </div>
  )
}
