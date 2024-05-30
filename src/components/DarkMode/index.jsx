import { useContext } from "react"
import { useState, useEffect } from "react"
import DarkContext from "../../contexts/DarkContext.js"

const DarkModeButton = () => {
  const [darkMode,setDarkMode] = useState("")

  useEffect(()=>{
    // console.log("useeffect");
    if (localStorage.getItem("darkMode") === "true"){
      setDarkMode("Light Mode")
    } else {
      setDarkMode("Dark Mode")
    }
  },[])
  
  const mode = useContext(DarkContext)
  const toggleMode = () => {
    // console.log("change text");
    if (darkMode === "Dark Mode"){
      setDarkMode("Light Mode")
    } else {
      setDarkMode("Dark Mode")
    }
    mode.changeMode()
  }

  // console.log(darkMode);
  return (
    <button onClick={toggleMode}>{darkMode}</button>
  )
}

export default DarkModeButton