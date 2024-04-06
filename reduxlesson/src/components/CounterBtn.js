import React from 'react'
import {useDispatch} from 'react-redux'
import { increment,decrement } from '../redux/counterSlice'
const CounterBtn = () => {
 const dispatch=useDispatch()
  return (
    <div>
         <button onClick={()=>dispatch(increment())} >Increase</button>
         <button onClick={()=>dispatch(decrement())}>Decrease</button>
    </div>
  )
}

export default CounterBtn