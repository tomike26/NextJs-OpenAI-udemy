'use client'
import {useState} from 'react';

const ClientPage = () => {
    const [counter,setCounter] = useState(0);
  return (
    <div>
        <h1 className='text-4xl  font-bold mb-4 '>{counter}</h1>
        <button class="btn btn-outline" onClick={() => setCounter(counter + 1)}>Increase</button>
        <button class="btn btn-outline" onClick={() => setCounter(counter - 1)}>Decrease</button>

        </div>
  )
}

export default ClientPage