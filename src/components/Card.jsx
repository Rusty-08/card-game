/* eslint-disable react/prop-types */
export default function Card({ entry, handleClick }) {
  return (
    <button
      key={entry}
      className='text-white p-5'
      onClick={() => handleClick(entry)}
    >
      {entry.id}
    </button>
  )
}
