import React from 'react'
import styles from '../../styles'
import { heroTitle, ref1 } from '../../assets'
import Button from '../layout/Button'
import HowItWorks from '../layout/HowItWorks'
import { Slideshow } from '../layout/Slideshow'
const Hero = () => {
  return (
    <div className='w-full lg:h-[] bg-peach py-16 relative overflow-hidden' id='home'>
        <div className={`${styles.flexBetween} ${styles.paddingX}`}>
            <div className='font-workSans  lg:text-[70px] md:text-[50px] ml-5 font-bold'>
                <img src={heroTitle} alt="3j Salon" />
                <h3 className='text-choco opacity-50'>We Care for</h3>
                <h3 className='lg:mt-[-20px] text-choco opacity-50'>Your Hair</h3>
                <div className={`${styles.flexBetween} mt-2`}>
                    <Button/>
                    <HowItWorks/>
                </div>
            </div>
            <div>
                <img src={ref1} alt="Call, text and Connect to 3j Salon" />
            </div>
        </div>

        <div className='lg:mt-[-200px] md:mt-[-100px]'>
            <Slideshow/>
        </div>
    </div>
  )
}

export default Hero