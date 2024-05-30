import ProjectsComponent from '../../components/ProjectsComponent';
import Skills from '../../components/Skills';
import { Link } from 'react-router-dom';
import './index.css'
import profilImage from "../../assets/images/tommy.jpg"
import homeImage from "../../assets/images/home-image.jpg"

const Profil = () => {
const projects = ProjectsComponent();
// console.log(projects);

// projects.map((project) => console.log(project.attributes.images.data[0].attributes.formats.small.url))

  return (
    <>
      <section className="jumbotron">
        <div className='jumbo-text-content'>
          <div className='profil-image-box-border'>
            <div className='profil-image-box'>
              <img src={profilImage} alt="profil photo" />
            </div>
          </div>
          <h1>Hi i&apos;m Tommy</h1>
          <h2>Junior Web developper with engineering experience</h2>
          <h2>I am looking for an intership for 2 to 6 months</h2>
          <button>Hire me</button>
        </div>
      </section>

      <div className="content">
        <section id="about" className="about">
          <h2>Presentation</h2>
          <div className='introduction'>
            <p>I am currently learning how to code in a very interesting bootcamp named <a href="https://www.thehackingproject.org/">The Hacking Project</a>.</p>
            <p>We learn by peer learning but with guideline from <abbr title="The Hacking Project">THP</abbr>.</p>
            <p>I have a mechanical engineering background, so I know how to work independently as well as working in team.</p>
            <p>I have a passion for software. I enjoy creating tools that make life easier for people.</p>
          </div>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <Skills/>
        </section>

        <section className="experiences">
          <h2>Experiences</h2>
          <div className='projects-list'>
            {projects && projects.map((project,index) =>
              <div key={index} className='project-container'>
                <div className='project-head'>
                  <img src={`http://localhost:1337${project.attributes.images.data[0].attributes.formats.thumbnail.url}`} alt={project.attributes.images.data[0].attributes.nam} />
                </div>

                <div className='project-body'>
                  <h2>{project?.attributes.title}</h2>
                  <p>{project?.attributes.release_date}</p>
                  <p>{project?.attributes.description}</p>
                </div>

                <div className='project-foot'>
                  <Link to="/projects"><button>Projects</button></Link>
                </div>
              </div>
            )}
          </div>
        </section>
        
      </div>
      
    </>
  )
}

export default Profil