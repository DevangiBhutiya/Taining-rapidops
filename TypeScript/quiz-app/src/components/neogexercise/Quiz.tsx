import React, { useRef } from 'react'

interface QuizProp{
    quiz: {
        question: string,
        options: string[],
        correctOption: number
    }[],
    onclick: (index: number) => void
}

const selectedAnswee = (selectedOption: number, correctOption: number) => {
    alert(selectedOption === correctOption) 
}

const Quiz = ({quiz, onclick}: QuizProp) => {
    // const inputRef =useRef()
    console.log(quiz)
  return (
    <div>
      <h1>Quiz</h1>
      <ol>
      {quiz.map((it, index)=>(
        <div key={index}>
         <li>{it.question}</li>
         <ol type='a'>
         <p>{it.options.map((option, index)=> (
            <li key = {index} onClick={() => selectedAnswee(index,it.correctOption )}>{option}</li>

        ))}</p>
        <button>Check answer</button>
         </ol>
        
        </div>
       
      ))}
      </ol>
   
    </div>
  )
}

export default Quiz
