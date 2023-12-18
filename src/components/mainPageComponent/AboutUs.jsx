import React from 'react'
import { r1, r2, j, jLogo, r3, r4 } from '../../assets'
import styles from '../../styles'

const AboutUs = () => {
  return (
    <section className={`flex w-full flex-col bg-light py-10 overflow-hidden ${styles.paddingX}`} id='about'>
        <div className='flex md:flex-row md:justify-around flex-col px-10 gap-10'>
            <img src={r1} alt="About Us" />
            <img src={j} alt="About Us" />
            <img src={r2} alt="About Us" />
        </div>
        <div className='flex justify-center p-10'>
            <img src={jLogo} alt="" />
        </div>
        <div className='flex md:flex-row md:justify-around flex-col px-10 gap-10'>
            <img src={r3} alt="About Us" />
            <div className='flex items-center'>
            <h3>"Neque porro quisquam est qui dolorem ipsum... " </h3>
            </div>
            <img src={r4} alt="About Us" />
        </div>
    </section>
  )
}

export default AboutUs