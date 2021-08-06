import { /*useEffect, useState,*/ useRef } from 'react'
import { useStore } from '../hooks/useStore'
import { useActions } from '../hooks/useActions'

export default function Counter() {
  const { count } = useStore(store => store.counter)
  const { increment, decrement } = useActions()
  const refCounter = useRef()
  
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.dir(refCounter.current)
  // }, [count])

  // useEffect(() => {
  //   return () => {
  //     console.log('unmount!')
  //   }
  // }, [])

  return (
    <div>
      <h1 ref={refCounter}>{count}</h1>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}