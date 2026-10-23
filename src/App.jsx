import React, { useEffect, useState } from 'react'
import './App.css'
import FlashCard from '../components/FlashCard'
import flashcards from '../data/flashcards'
import ProgressBar from '../components/ProgressBar'
import AddFlashCard from '../components/AddFlashCard'

function App() {
  let [cards,setCards]=useState(()=>{
    let saveCards=localStorage.getItem("flashcards")
    return saveCards ? JSON.parse(saveCards):flashcards
  })
  useEffect(()=>{
    localStorage.setItem("flashcards",JSON.stringify(cards));
  },[cards]);
  let [currentIndex, setCurrentIndex] = useState(0)
  let [isComplete, setIsComplete] = useState(false)
  function nextCard() {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((previous)=>previous+1)
    }else{
      setIsComplete(true)
    }
  }

  function prevCard() {
    if (currentIndex > 0) {
      setCurrentIndex((previous)=> previous -1)
    }
  }
  function restart() {
    setCurrentIndex(0)
    setIsComplete(false)
  }

  function addCard(newCard){
    setCards((previousCards)=>[...previousCards,newCard])
    setIsComplete(false)
  }
  return (
    <div className='app'>
      <h1>React Flash Cards</h1>
      {isComplete ?
        (<div className="completion">
          <h2>All Cards reviewed!</h2>
          <p>Great work. Would you like to practice again?</p>
          <button onClick={restart} >Restart</button>
        </div>) : (
          <>
            < ProgressBar current={currentIndex + 1} total={cards.length} />
            {/* <p>Card {currentIndex + 1} of {flashcards.length} </p> */}
            < FlashCard key={currentIndex} question={cards[currentIndex].question} answer={cards[currentIndex].answer} />
            <button className='buttons'>
              <button onClick={prevCard} disabled={currentIndex==0} >Previous</button>
              <button onClick={nextCard} >{currentIndex == cards.length-1 ? "Finish":"Next"}</button>
            </button>
            
          </>
        )
      }
      < AddFlashCard onAdd={addCard} />
    </div>
  )
}

export default App