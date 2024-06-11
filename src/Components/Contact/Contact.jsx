import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb13614a-5045-40d5-838a-efecfa58aa8d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Your message has been sent successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(res.message);
  }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects. With a strong track record of delivering high-quality work on time, I am eager to bring my skills and expertise to your team. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>ah7860939@gmail.com</p>
                </div>
                <div className="contact-detail">
                   <img src={call_icon} alt="" /> <p>+92182554954</p>
                </div><img src="" alt="" />
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>North Karachi, Pakistan</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
            <button type="submit" className='contact-submit'>Submit Now</button>
            <span className='contact-res'>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
