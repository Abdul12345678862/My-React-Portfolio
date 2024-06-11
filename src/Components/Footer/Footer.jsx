import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logoH.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-top">
            <div className="fotter-top-left">
                <img src={footer_logo} alt="" />
                <p>I am frontend developer from Karachi, Pakistan with experience of multiple freelance projects based on software development companies.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-inp">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subs">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Abdul Haseeb. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
