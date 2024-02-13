import React from 'react'

interface Actionone {
    type: "ACTION_ONE"
    payload: number
}

interface ResetAction {
    type: "RESET"
}

type QuizAction = Actionone | ResetAction


const QuizReducer = () => {
  return (
    <div>
      
    </div>
  )
}

export default QuizReducer
