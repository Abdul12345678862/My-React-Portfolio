import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile2.jpg'

const About = () => {
  return (
    <div id='about' className='About'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced frontend developer with a strong proficiency in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js, dedicated to creating dynamic and user-friendly web applications.</p>
                <p>My passion for frontend development is not only about crafting visually appealing interfaces but also about ensuring seamless user experiences and optimizing performance.</p>
            </div>
            <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achieve">
            <h1>HIGH</h1>
            <p>COMPITATIVE MARKET EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achieve">
            <h1>NUMEROUS</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achieve">
            <h1>VARIOUS</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
