import { useEffect, useState } from 'react'
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import ReactCardFlip from 'react-card-flip';
import Result from './Result';
import { Cards } from '../data/Cards';
import NumberItem from './NumberItem';

/* eslint-disable react/prop-types */
export default function Board() {
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

  useEffect(() => {
    setEntries(generateEntries(items))
  }, [items])

  return (
    <>
      {
        !isGameEnded
          ? (
            <div className="w-full relative flex flex-row gap-5 items-center justify-center">
              {entries.map(entry => (
                <ReactCardFlip key={entry.id} isFlipped={isFlipped}>
                  <FrontCard
                    key={entry.id}
                    entry={entry}
                    handleClick={handleClick} />
                  <BackCard />
                </ReactCardFlip>
              ))}
              {/* <div>{}</div> */}
            </div>
          ) : (
            <Result hasWon={hasWon} restartGame={restartGame} />
          )
      }
      <NumberItem selectedCard={selectedCard} cards={Cards} />
    </>
  )
}
