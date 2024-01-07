import Card from "./Card";

/* eslint-disable react/prop-types */
export default function Board({ entries, handleClick }) {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {entries.map(entry => (
        <Card
          key={entry.id}
          entry={entry}
          handleClick={handleClick} />
      ))}
    </div>
  )
}
