import React from 'react'
import './contact.css'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Contacts = () => {
  return (
    <div className="app__footer section__padding bg-light text-choco font-workSans overflow-hidden" id="contacts">
    <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">8 N 23rd St, Manila, Philippines</p>
      <p className="p__opensans">+63 985-415-256</p>
      <p className="p__opensans">+63 912-352-180</p>
    </div>

    <div className="app__footer-links_logo">
      <p className="p__opensans">&quot;Web development is the backbone of the digital age, where ideas come to life and shape the future.&quot;</p>
      <div className="app__footer-links_icons flex items-center justify-center">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>

    <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans">Monday-Friday:</p>
      <p className="p__opensans">08:00 am - 5:00 pm</p>
      <p className="p__opensans">Saturday-Sunday:</p>
      <p className="p__opensans">07:00 am - 11:00 pm</p>
    </div>
  </div>
  <div className="footer__copyright">
      <p className="p__opensans">2023 3J Salon. All Rights reserved.</p>
    </div>
  </div>
  )
}

export default Contacts