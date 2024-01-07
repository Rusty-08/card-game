import Card from "./Card";

/* eslint-disable react/prop-types */
export default function Board({ entries, handleClick, isFlipped }) {
  return (
    <div className="h-screen w-full bg-slate-200 flex gap-5 items-center justify-center">
      {entries.map(entry => (
        <Card
          isFlipped={isFlipped}
          key={entry.id}
          entry={entry}
          handleClick={handleClick} />
      ))}
    </div>
  )
}
