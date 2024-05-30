const Keella = (props) => {
  const projects = props.projects
  const keellaProject = projects.filter(projet => projet.attributes.slug === "keella")[0]
  // console.log(keellaProject);
  
  // If projects is still an empty array or keellaProject is undefined, render "Loading..."
  if (!projects.length || !keellaProject) {
    return <div>Loading...</div>;
  }
  const images = keellaProject.attributes.images.data

  return (
    <div className="project-box keella">
      
      <div className="content-box">
        <h2>{keellaProject.attributes.title}</h2>
        <p>{keellaProject.attributes.release_date}</p>
        <p>{keellaProject.attributes.description}</p>
        <p>{keellaProject.attributes.content}</p>
        <a href="https://keella.fly.dev/">Visite our website</a>
      </div>
      <div className="screenshots-box">
        {images.map((image,index) =>
          // console.log(image.attributes.formats.large.url)
            <div className="screenshot-box" key={index}>
              <img src={`http://localhost:1337${image.attributes.formats.medium.url}`} alt={image.attributes.name} />
            </div>
          )}
      </div>
    </div>
  )
}

export default Keella