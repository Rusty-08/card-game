import { useEffect, useState } from 'react'
import BackCard from "../components/BackCard";
import FrontCard from "../components/FrontCard";
import ReactCardFlip from 'react-card-flip';
import Result from '../components/Result';
import { Cards } from '../data/Cards';
import NumberItem from '../components/NumberItem';
import ScoreCard from '../components/ScoreCard';

/* eslint-disable react/prop-types */
export default function Board({ level }) {
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
      if (items.length !== 1) {
        removeSelectedCard(card);
      }
      setSelectedCard([...selectedCard, card])
      if (items.length === 1) {
        setHasWon(true)
        setTimeout(() => {
          setIsGameEnded(true)
        }, 500)
      }
    } else {
      setHasWon(false)
      setTimeout(() => {
        setIsGameEnded(true)
      }, 500)
    }
    setTimeout(() => {
      setIsFlipped(false)
    }, 1000)
  }

  const handleClick = (card) => {
    setIsFlipped(true)
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
    setItems(Cards)
    setEntries([])
    setSelectedCard([])
    setHasWon(false)
    setIsGameEnded(false)
    setIsFlipped(false)
  }

  const gameMode = () => {
    if (level === 'Easy') {
      return Cards.slice(0, 5)
    } else if (level === 'Medium') {
      return Cards.slice(0, 8)
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
      <div className={`transform ${isGameEnded ? 'scale-0 h-0 absolute top-[60%] opacity-0' : 'scale-100 relative opacity-100'} transition-all duration-500 ease-in-out w-full flex flex-row gap-5 items-center justify-center`}>
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
