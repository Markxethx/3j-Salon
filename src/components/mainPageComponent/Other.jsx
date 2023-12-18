import React from 'react'
import { other1, other2, other3, other4, other5, other6, other7, other8 } from '../../assets'
import styles from '../../styles'
const Other = () => {
  return (
    <section className={` ${styles.paddingX } ${styles.paddingY} w-full bg-peach`}>
        <h2 className='uppercase lg:py-10 lg:text-[32px] md:text-[24px] px-10 sm:px-0 text-choco font-bold py-2'>our branches, availability and other services</h2>
        <div className='flex items-center justify-center p-10 sm:px-0'>
        <p className='lg:text-[32px] md:text-[24px] text-choco lg:w-[1072px]'>Curabitur ultricies eleifend quam, id aliquet sem. Vivamus et efficitur lorem. Pellentesque tempor dolor felis, at mollis nibh efficitur sit amet. In molestie sit amet eros sit amet feugiat. Maecenas vulputate odio sit amet ante finibus, vel dignissim tortor efficitur. Aliquam in purus aliquam, facilisis odio ut, faucibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam aliquam vel enim ac interdum. Praesent bibendum mattis tellus non laoreet.</p>
        </div>
        <div className=' flex  items-center justify-center'>
        <div className='flex flex-wrap items-center justify-center'>
            <img src={other1} alt=""/>
            <img src={other2} alt=""/>
            <img src={other3} alt=""/>
            <img src={other4} alt=""/>
            <img src={other5} alt=""/>
            <img src={other6} alt=""/>
            <img src={other7} alt=""/>
            <img src={other8} alt=""/>
        </div>
        </div>
    </section>
  )
}

export default Other