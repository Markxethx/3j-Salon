import React from 'react';
import { Slide } from 'react-slideshow-image';
import { slider1, slider2, slider3 } from '../../assets';
import styles from '../../styles';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css'
const slideImages = [
  {
    url: slider1,
    caption: 'Slide 1',
    height: "699px",
    width: "1049px",
  },
  {
    url: slider2,
    caption: 'Slide 2',
    height: "523px",
    width: "784px",
  },
  {
    url: slider3,
    caption: 'Slide 3',
    height: "583px",
    width: "575px",
  },
];

export const Slideshow = () => {
  return (
    <div className={`slide-container ${styles.paddingX} cursor-pointer overflow-hidden`}>
      <Slide>
        {slideImages.map((slideImage, index)=> (
          <div key={index}>
           <div className='relative'>
           <div className='flex items-center justify-center'>
              {/* <span style={{'padding': '20px', 'background': '#efefef', 'color': '#000000'}}>{slideImage.caption}</span> */}
              <img src={slideImage.url} alt="Slider Image" className={`h-[${slideImage.height}] w-[${slideImage.width}]`} />
            </div>
            {/* <div className='absolute lg:top-[35%] md:top-[25%] sm:top-[15%] md:left-[15%] sm:left-[10%]'>
                <h1 className='lg:text-[300px] md:text-[200px] sm:text-[160px] font-worksans text-focus-in text-choco drop-shadow-lg shadow-light'>3j Salon</h1>
            </div> */}
           </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
