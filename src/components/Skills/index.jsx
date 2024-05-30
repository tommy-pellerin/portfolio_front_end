import { useState,useEffect } from "react"
import "./index.css"
const Skills = () => {
  const [skills,setSkills] = useState([])

  const getData = () => {
    
    fetch(`http://localhost:1337/api/skills?populate=*`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      setSkills(response.data)
    })
    .catch((error) => {
      console.error('Response error:', error.message);
    });
  }

  useEffect(getData,[])

  return (
    <ul className="skills-ul">
      {
        skills.map(skill =>
          <li key={skill.id} className="skill-box">
            <div className="skill-logo">
              <img src={`http://localhost:1337${skill.attributes.logo.data.attributes.url}`} alt={skill.attributes.slug} />
            </div>
            <p>{skill.attributes.title}</p>
          </li>
        )
      }
      
    </ul>
  )
}

export default Skills