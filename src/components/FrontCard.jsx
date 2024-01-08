/* eslint-disable react/prop-types */
export default function Card({ entry, handleClick }) {
  return (
    <div
      key="front"
      className='bg-slate-50 shadow-lg bg-opacity-5 backdrop-blur-sm hover:bg-opacity-10 transition-colors cursor-pointer flex gap-8 items-center justify-center flex-col lg:w-60 lg:h-80'
      onClick={() => {
        handleClick(entry)
      }}
    >
      <img src={entry.image} className='h-[70%] object-cover' />
      <p className="text-blue-200 uppercase text-xl">{entry.name}</p>
    </div>
  )
}
