import React from 'react'
import { play } from '../../assets'
const HowItWorks = () => {
  return (
    <button className='w-[198px] h-[40p] flex items-center ml-5'>
        <img className='mr-2' src={play} alt="play button" />
        <span className='font-thin text-[18px] text-choco'>How it works</span>
    </button>
  )
}

export default HowItWorks