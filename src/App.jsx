import { useEffect, useState } from 'react'

const ITEMS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }];

function App() {
  const [items, setItems] = useState(ITEMS);
  const [entries, setEntries] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);

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

  const handleClick = (card) => {
    if (!selectedCard.includes(card)) {
      removeSelectedCard(card);
      setSelectedCard([...selectedCard, card])
      if (items.length === 1) {
        setHasWon(true)
        setIsGameEnded(true)
      }
    } else {
      setHasWon(false)
      setIsGameEnded(true)
    }
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
    <div className='App'>
      {
        !isGameEnded
          ? (
            <div className="">
              {entries.map(entry => (
                <button
                  key={entry}
                  className='card'
                  onClick={() => handleClick(entry)}
                >
                  {entry.id}
                </button>
              ))}
            </div>
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
    </div>
  )
}

export default App
