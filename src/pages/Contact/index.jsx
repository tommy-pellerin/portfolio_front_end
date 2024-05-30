import "./index.css"
import { useState } from "react"
import linkedinLogo from '../../assets/images/linkedin-sm.png';

const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [text,setText] = useState("")
  
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the email link
    const mailtoLink = `mailto:tommytp@hotmail.fr?subject=Contact Form Submission&body=${text}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  }

  return (
    <div className="contact-page">
      <h1>CONTACT</h1>
      <form onSubmit={handleSubmit}>
        <h2>Send me an email</h2>
        <div>
          <label>
            <input type="text" value={name} placeholder="Name" onChange={handleName} required/>
          </label>
        </div>
        <div>
          <label>
            <input type="email" value={email} placeholder="Email" onChange={handleEmail} required/>
          </label>
        </div>
        <div>
          <label>
            <textarea type="text" rows="5" value={text} placeholder="Message" onChange={handleText} required/>
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="linkedin-link">
        <h2>or you can also get in touch via Linkedin</h2>
        <a href="https://www.linkedin.com/in/tommy-pellerin/">
          <img src={linkedinLogo} alt="linkedin-logo" />
        </a>
      </div>
    </div>
  )
}

export default Contact