/* eslint-disable react/prop-types */
export default function Card({ entry, handleClick }) {
  return (
    <div
      key="front"
      className='bg-slate-500 shadow-md bg-opacity-20 backdrop-blur-sm hover:bg-opacity-50 transition-colors cursor-pointer flex gap-8 items-center justify-center flex-col lg:w-60 lg:h-80'
      onClick={() => {
        handleClick(entry)
      }}
    >
      <img src={entry.image} className='h-3/5 object-cover' />
      <p className="text-slate-100 uppercase text-lg">{entry.name}</p>
    </div>
  )
}
