import { useState, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alice')
  const [myFunc, setMyFunc] = useState(null)

  function handleClick() {
    setCount(prevCount => prevCount + 1)
    setName('Bob')
    myFunc()
  }

  const showVal = function() {
    console.log('The state setter function captures these values: ')
    console.log('count: ', count)
    console.log('name: ',name)
  }

  if(myFunc === null){
    setMyFunc( showVal )
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>{count}</p>
      <p>{name}</p>
    </>
  )
}

function Side() {

  return (
    <p>A component from side</p>
  )
}


