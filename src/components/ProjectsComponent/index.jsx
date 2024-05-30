import { useState,useEffect } from "react"

const ProjectsComponent = () => {
  const [projects,setProjects] = useState([])

  const getData = () => {
    
    fetch(`http://localhost:1337/api/projects?populate=*`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log(response.data);
      setProjects(response.data)
    })
    .catch((error) => {
      console.error('Response error:', error.message);
    });
  }

  useEffect(getData,[])

  return projects
}

export default ProjectsComponent