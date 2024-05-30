import ProjectsComponent from '../../components/ProjectsComponent';
import NotePad from "./NotePad"
import ProGame from "./ProGame"
import Velib from "./Velib"
import Keella from "./Keella"
import TCP from "./TCP"
import { useEffect } from "react"
import "./index.css"


const Projects = () => {
  //reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get data from projectsComponent
  const projects = ProjectsComponent();

  // const [projects,setProjects] = useState([])

  // const getData = () => {
    
  //   fetch(`http://localhost:1337/api/projects?populate=*`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     // console.log(response.data);
  //     setProjects(response.data)
  //   })
  //   .catch((error) => {
  //     console.error('Response error:', error.message);
  //   });
  // }

  // useEffect(getData,[])

  return (
    <div className="projects-page">
      <h1>PROJECTS</h1>
      
      <section>
        <NotePad projects={projects}/>
      </section>
      <section>
        <ProGame projects={projects}/>
      </section>
      <section>
        <Velib projects={projects}/>
      </section>
      <section>
        <Keella projects={projects}/>
      </section>
      <section>
        <TCP projects={projects}/>
      </section>
    </div>
  )
}

export default Projects