import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import ReactCardFlip from 'react-card-flip';

/* eslint-disable react/prop-types */
export default function Board({ entries, handleClick, isFlipped }) {
  return (
    <div className="w-full flex flex-row gap-5 items-center justify-center">
      {entries.map(entry => (
        <ReactCardFlip key={entry.id} isFlipped={isFlipped}>
          <FrontCard
            key={entry.id}
            entry={entry}
            handleClick={handleClick} />
          <BackCard />
        </ReactCardFlip>
      ))}
    </div>
  )
}
