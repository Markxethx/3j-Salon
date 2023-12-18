import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
  BsLink,
} from "react-icons/bs";
import { svs1, svs2, svs3, svs4, svs5, svs6 } from "../../assets";
import "./services.css";
const Services = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  // const serviceData = [
  //   {
  //     title: "Eyelash and Eyebrow Services",
  //     offer: "Eyelash extensions, Eyelash and eyebrow tinting Eyebrow shaping",
  //     icon: svs1,
  //   },
  //   {
  //     title: "Makeup Services",
  //     offer:
  //       "Everyday makeup application, Special occasion or event makeup, Bridal makeup, Airbrush makeup",
  //     icon: svs2,
  //   },
  //   {
  //     title: "Body Treatments",
  //     offer:
  //       "Massages, Body wraps, Scrubs and exfoliation, Cellulite treatments",
  //     icon: svs3,
  //   },
  //   {
  //     title: "Eyelash and Eyebrow Services",
  //     offer: "Eyelash extensions, Eyelash and eyebrow tinting Eyebrow shaping",
  //     icon: svs4,
  //   },
  //   {
  //     title: "Nail Services:",
  //     offer:
  //       "Manicures, Pedicures, Nail extensions (acrylic, gel, or silk) ,Nail art",
  //     icon: svs5,
  //   },
  //   {
  //     title: "Skin Care Services:",
  //     offer: "Facials, Chemical peels, Microdermabrasion, Waxing (eyebrows, lip, chin, full face, body)",
  //     icon: svs6,
  //   },
  //   {
  //     title: "Eyelash and Eyebrow Services",
  //     offer: "Eyelash extensions, Eyelash and eyebrow tinting Eyebrow shaping",
  //     icon: svs7,
  //   },
  // ];


 
  return (
    <section className="bg-peach py-10 overflow-hidden w-full" id="services">
      <h3 className="font-kolker text-[78px] text-choco opacity-50 text-center">
        Our Services
      </h3>

      <div className="app__gallery">
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[svs1, svs2, svs3, svs4, svs5, svs6].map((image, index) => (
              <div>
                <div className="text-center text-choco">
                  <h1 className="text-[30px] font-normal lorem">Lorem Ipsum</h1>
                  <p className="front-thin text-[18px] py-5 mx-2 text-black lorem-text px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, atque?</p>
                </div>
                <div
                  className="app__gallery-images_card flex__center"
                  key={`gallery_image-${index + 1}`}
                >
                  <img src={image} alt="gallery_image" />
                  <BsLink className="gallery__image-icon" />
                </div>
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
