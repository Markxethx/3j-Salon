import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
import { navLinks } from "../../constants/navigation/navigation";
import navLogo from "../../assets/navigation/navLogo.svg";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from "react-icons/cg";
import './navigation.css'

const Navigation = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav
      className={`w-full h-[130px] font-poppins ${styles.flexBetween} ${styles.paddingX} overflow-hidden bg-light`}
    >
      <div className="flex items-center overflow-hidden">
        <Link to="/">
          <img
            src={`${navLogo}`}
            alt="logo"
            className="lg:w-[220px] lg:h-[220px] md:w-[180px] md:h-[180px] mr-1"
          />
        </Link>
      </div>

      <ul className="hidden md:flex">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-workSans hover-navbar font-regular cursor-pointer text-[5px] ss:text-[16px]
                text-natural} `}
          > 
            {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
              <a href={`#${nav.id}`} className="text-choco lg:text-[22px] md:text-[16px] mr-10 ">{nav.title}</a>
          </li>
        ))}
      </ul>

          <div className="flex md:hidden overflow-hidden appNavbar">
          <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#4B4036" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <CgCloseR fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#services" onClick={() => setToggleMenu(false)}>Services</a></li>
              <li><a href="#works" onClick={() => setToggleMenu(false)}>Works</a></li>
              <li><a href="#contacts" onClick={() => setToggleMenu(false)}>Contacts</a></li>
            </ul>
          </div>
        )}
      </div>
          </div>
    </nav>
  );
};

export default Navigation;
