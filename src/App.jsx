import { useState, useEffect, useMemo, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App(){

        const [count, setCount] = useState(0)
        
        function handleClick(){
            console.log('Button is clicked.')
            setCount(prevCount => prevCount + 1)
        }
        
        console.log('Rendering...')

        useEffect( () => {
            console.log('Side Effect...')
        }, [count])

        return (
            <>
                <p>{count}</p>
                <button onClick={handleClick}>Click me</button>
            </>
        )
    }

function Side() {

  return (
    <p>A component from side</p>
  )
}


