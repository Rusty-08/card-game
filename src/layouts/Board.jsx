import { useEffect, useRef, useState } from 'react'
import BackCard from "../components/BackCard";
import FrontCard from "../components/FrontCard";
import ReactCardFlip from 'react-card-flip';
import Result from '../components/Result';
import { Cards } from '../data/Cards';
import NumberItem from '../components/NumberItem';
import ScoreCard from '../components/ScoreCard';
import Sound from '../components/sound';

/* eslint-disable react/prop-types */
export default function Board({ level, isVolumeMuted }) {
  const [items, setItems] = useState(Cards);
  const [entries, setEntries] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false)
  const [highScore, setHighScore] = useState(0)

  const generateEntries = (newItems) => {
    const randomItemsSort = sortRandomly(newItems)

    let randomSelectedItems = generateRandomItem(selectedCard, 1)

    if (selectedCard.length > 1) {
      randomSelectedItems = generateRandomItem(selectedCard, 2)
    }

    if (randomItemsSort.length <= 1) {
      randomSelectedItems = generateRandomItem(selectedCard, 3)
    }

    // return an array with 1 remaining items and 3 selected items
    if (randomItemsSort.length <= 1) {
      return mixRandomCards(randomItemsSort, randomSelectedItems, 1)
    }

    // return an array with 2 remaining items and 2 selected items
    if (selectedCard.length > 1) {
      return mixRandomCards(randomItemsSort, randomSelectedItems, 2)
    }

    // return an array with 3 remaining items and 1 selected items
    if (selectedCard.length === 1) {
      return mixRandomCards(randomItemsSort, randomSelectedItems, 3)
    }

    // return an array 4 random item in items array
    return randomItemsSort.slice(0, 4);
  }

  const manageEntries = (card) => {
    if (!selectedCard.includes(card)) {
      if (highScore === 0 || selectedCard.length >= highScore) {
        setHighScore(highScore + 1)
      }
      setSelectedCard([...selectedCard, card])
      if (items.length === 1) {
        setHasWon(true)
        setTimeout(() => {
          setIsGameEnded(true)
          Sound.win(isVolumeMuted)
        }, 500)
      }
      if (items.length !== 1) {
        removeSelectedCard(card)
        setTimeout(() => {
          setIsFlipped(false)
          Sound.flip(isVolumeMuted)
        }, 1000)
      }
    } else {
      setHasWon(false)
      setTimeout(() => {
        setIsGameEnded(true)
        Sound.lost(isVolumeMuted)
      }, 500)
    }
  }

  const handleClick = (card) => {
    setIsFlipped(true)
    Sound.flip(isVolumeMuted)
    setTimeout(() => {
      manageEntries(card)
    }, 500)
  }

  const removeSelectedCard = (card) => {
    setItems((prevItems) => prevItems.filter(item => item !== card));
  }

  const sortRandomly = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  }

  const mixRandomCards = (remainingItems, selected, length) => {
    return sortRandomly([...remainingItems.slice(0, length), ...selected])
  }

  const generateRandomItem = (arr, length) => {
    if (length > 1) {
      return sortRandomly(arr).slice(0, length)
    }
    return [arr[Math.floor(Math.random() * arr.length)]]
  }

  const restartGame = () => {
    setItems(gameMode())
    setEntries([])
    setSelectedCard([])
    setHasWon(false)
    setIsGameEnded(false)
    setIsFlipped(false)
    Sound.pauseLost()
    Sound.pauseWin()
  }

  const gameMode = () => {
    if (level === 'Easy') {
      return Cards.slice(0, 10)
    } else if (level === 'Medium') {
      return Cards.slice(0, 15)
    } else {
      return Cards
    }
  }

  useEffect(() => {
    setItems(gameMode())
  }, [level])

  useEffect(() => {
    setEntries(generateEntries(items))
  }, [items])

  return (
    <>
      <div className={`transform ${isGameEnded ? 'scale-0 absolute top-0 md:top-[60%] opacity-0' : 'scale-100 relative opacity-100'} transition-all duration-500 ease-in-out md:w-full md:flex md:flex-row gap-5 md:items-center md:justify-center grid grid-cols-2`}>
        {entries.map(entry => (
          <ReactCardFlip key={entry.id} isFlipped={isFlipped}>
            <FrontCard
              entry={entry}
              handleClick={handleClick} />
            <BackCard />
          </ReactCardFlip>
        ))}
      </div>
      <Result
        hasWon={hasWon}
        restartGame={restartGame}
        isGameEnded={isGameEnded} />
      <NumberItem selectedCard={selectedCard} cards={gameMode()} />
      <ScoreCard
        score={selectedCard.length}
        bestScore={highScore} />
    </>
  )
}
