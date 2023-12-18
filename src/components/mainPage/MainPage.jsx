import React from 'react'
import Navigation from '../mainPageComponent/Navigation'
import Hero from '../mainPageComponent/Hero'
import AboutUs from '../mainPageComponent/AboutUs'
import Services from '../mainPageComponent/Services'
import Reviews from '../mainPageComponent/Reviews'
import Other from '../mainPageComponent/Other'
import Contacts from '../mainPageComponent/Contacts'
const MainPage = () => {
  return (
    <main className='overflow-hidden'>
        <Navigation />
        <Hero />
        <AboutUs/>
        <Services />
        <Reviews />
        <Other />
        <Contacts />
    </main>
  )
}

export default MainPage