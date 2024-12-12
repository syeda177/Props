import Link from 'next/link'
import React from 'react'

function About () {
  return (
    <div className='bg-zinc-400 p-6 mb-2'> 
        <h1 className='text-4xl text-center font-bold text-green-300'>This is about page</h1>
        <ul>
        <button
    style={{
        padding: '10px',        
        margin: '10px',           
        color: 'white',
        border: 'none',  
        backgroundColor: '#0070f3',         
        borderRadius: '5px',     
        cursor: 'pointer',        
        display: 'inline-block', 
    }}
> <li><Link href="/">GO BACK TO HOME</Link></li>
</button>
      
  </ul>
    </div>
  )
}

export default About