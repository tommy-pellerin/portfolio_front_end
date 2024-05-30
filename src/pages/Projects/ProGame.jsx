const ProGame = (props) => {
  const projects = props.projects
  const proGameProject = projects.filter(projet => projet.attributes.slug === "pro-game")[0]
  // console.log(proGameProject);
  
  // If projects is still an empty array or proGameProject is undefined, render "Loading..."
  if (!projects.length || !proGameProject) {
    return <div>Loading...</div>;
  }
  const images = proGameProject.attributes.images.data

  return (
    <div className="project-box pro-game">
      
      <div className="content-box">
        <h2>{proGameProject.attributes.title}</h2>
        <p>{proGameProject.attributes.release_date}</p>
        <p>{proGameProject.attributes.description}</p>
        <p>{proGameProject.attributes.content}</p>
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

export default ProGame