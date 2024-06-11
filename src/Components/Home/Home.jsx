import React from 'react'
import './Home.css'
import profile_img from '../../assets/profile.png'
import resume from '../../assets/haseeb_cv.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Home = () => {
  return (
    <div id='home' className='Home'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Abdul Haseeb,</span> Frontend Developer based in Pakistan</h1>
      <p>I am frontend developer from Karachi, Pakistan with experience of multiple freelance projects based on software development companies.</p>
        <div className="home-action">
            <div className="home-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a href={resume} target="_blank" rel='abdulhaseeb'><div className="home-resume">My resume</div></a>
        </div>
    </div>
  )
}

export default Home
