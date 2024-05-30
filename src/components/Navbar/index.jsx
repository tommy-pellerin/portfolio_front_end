import { Link } from 'react-router-dom';
import "./index.css"
import DarkModeButton from '.././DarkMode'
import DarkContext from '../../contexts/DarkContext'
import { useState,useEffect } from 'react';
import icon from "../../assets/images/TP_favicon.png"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" //compare if the string in local storage is "true", then return true, else return false. Don't need to parse data as i compare string with string.
  );
  // console.log(darkMode);
  
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode")
    } else {
      body.classList.remove("dark-mode")
    }},
    [darkMode]
  )

  return(
    <nav>
      <div className='nav-icon'>
        <Link to="/">
            <img src={icon} alt="icon TP" />
        </Link>
      </div>

      <DarkContext.Provider value={{
        darkMode: null,
        changeMode: () => {setDarkMode(!darkMode)}
      }}>
        <DarkModeButton/>
      </DarkContext.Provider>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar