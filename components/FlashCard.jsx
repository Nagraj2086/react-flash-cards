import React, { useState } from 'react'

function FlashCard({question,answer}){
    
    let [isFlipped,setIsFlipped]=useState(false)
    function handleFlip(){
        setIsFlipped(!isFlipped)
    }
  return (
    <div className='flashcard' onClick={handleFlip}>
        <h2>{ isFlipped? answer: question}</h2>
        <p>{ isFlipped? "Click to hide ":"Click to reveal" }</p>
    </div>
  )
}

export default FlashCard