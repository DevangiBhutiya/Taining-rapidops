import React, {useState} from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count => count + 1)
    }


    return [count, handleClick]
}

export default useCounter
