import React from 'react'
import { homeImage } from '../images'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl'> WELCOME TO OUR PAGE </h1>
        <div className='md: px-96 space-y-4'>
           {/* <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
            . Ducimus ipsum vero dolores eos iure omnis laborum odit nam eaque fugiat
             dolorum, dolore placeat ad. Nih
            il voluptates pariatur atque sed deleniti?</p> */}
    </div>
    <img src={homeImage} alt="" />
    </div>
  )
}

export default Home