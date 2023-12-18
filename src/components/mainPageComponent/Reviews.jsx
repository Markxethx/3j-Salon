import React from 'react'
import styles from '../../styles'
import { rvw, reviewTxt } from '../../assets'
const Reviews = () => {
  return (
    <section className={`${styles.paddingX} bg-light py-16 overflow-hidden`} id='works'>
        <header className='lg:text-[70px] md:text-[60px] text-[50px] text-peach font-medium text-center px-2'>What <span className='text-choco'>People are Saying</span></header>

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.flexBetween} flex-row`}>
                <h1 className='lg:text-[60px] md:text-[45px] font-workSans font-bold lg:w-[317px] md:w-[230px] text-choco'>1900 + satisfied customer</h1>

                <div className={`${styles.flexBetween} sm:flex-row flex-col gap-3`}>
                    <img src={rvw} className='lg:w-auto lg:h-auto md:w-[157px]  md:h-[218px] sm:w-[112px] sm:h-auto sm:mr-2' alt="Lyke Review" />
                    <img src={reviewTxt} className='lg:w-auto lg:h-auto md:w-[423px] md:h-[218px] sm:w-[293px] sm:h-auto mr-5' alt="Lyke Review Text" />
                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Reviews