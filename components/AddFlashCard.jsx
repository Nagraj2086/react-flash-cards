import React, { useState } from 'react'

function AddFlashCard({onAdd}) {
    const [question,setQuestion]=useState("")
    const [answer,setAnswer]=useState("")

    function handleSubmit(event){
        event.preventDefault();


        if(!question.trim() || !answer.trim()){
            return;
        }

        onAdd({
            id:Date.now(),
            question:question.trim(),
            answer:answer.trim()
        })

        setQuestion("")
        setAnswer("")
    }
    
  return (
    <form action="" className="add-form" onSubmit={handleSubmit}>
        <h2>Add a Flashcard</h2>
        
            <label htmlFor="question">Question</label>
            <input type="text" id='question' value={question} onChange={(event)=> setQuestion(event.target.value)} placeholder='Enter ur Question' required />
        
        
            <label htmlFor="answer">Answer</label>
            <textarea name="" id="answer" value={answer} onChange={(event)=>setAnswer(event.target.value)} placeholder='Enter answer' rows="3" required></textarea>
        
        <button type="submit">Add Card</button>
    </form>
  )
}

export default AddFlashCard