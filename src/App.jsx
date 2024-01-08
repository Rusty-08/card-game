import { useEffect, useState } from 'react'
import { Cards } from './data/Cards';
import Board from './components/Board';
import logo from './assets/images/logo.png'

function App() {
  const [items, setItems] = useState(Cards);
  const [entries, setEntries] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false)

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
      removeSelectedCard(card);
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

  useEffect(() => {
    setEntries(generateEntries(items))
  }, [items])

  return (
    <div className='App bg-slate-800 h-screen w-full flex-col flex items-center justify-center'>
      <img src={logo} className='h-28' />
      <h1 className='text-xl px-10 bg-gradient-to-r from-slate-800 from-0% via-slate-700 via-50% to-slate-800 to-100% text-sky-100 mb-5 mt-2'>MEMORY GAME</h1>
      {
        !isGameEnded
          ? (
            <Board
              isFlipped={isFlipped}
              entries={entries}
              handleClick={handleClick} />
          ) : (
            <div className="">
              {
                hasWon
                  ? 'You win'
                  : 'You lose'
              }
            </div>
          )
      }
      <h1 className='py-2 px-10 mt-5 rounded-full bg-slate-500 bg-opacity-5 backdrop-blur-sm text-xl text-sky-600'>{selectedCard.length} / {Cards.length}</h1>
    </div>
  )
}

export default App
