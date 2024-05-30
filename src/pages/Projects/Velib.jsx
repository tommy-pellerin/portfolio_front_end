const Velib = (props) => {
  const projects = props.projects
  const velibProject = projects.filter(projet => projet.attributes.slug === "velib")[0]
  // console.log(velibProject);
  
  // If projects is still an empty array or velibProject is undefined, render "Loading..."
  if (!projects.length || !velibProject) {
    return <div>Loading...</div>;
  }
  const images = velibProject.attributes.images.data

  return (
    <div className="project-box velib-box">

      <div className="screenshots-box">
        {images.map((image,index) =>
        // console.log(image.attributes.formats.large.url)
          <div className="screenshot-box" key={index}>
            <img src={`http://localhost:1337${image.attributes.formats.medium.url}`} alt={image.attributes.name} />
          </div>
        )}
      </div>

      <div className="content-box">
        <h2>{velibProject.attributes.title}</h2>
        <p>{velibProject.attributes.release_date}</p>
        <p>{velibProject.attributes.description}</p>
        <p>{velibProject.attributes.content}</p>
      </div>
      
    </div>
  )
}

export default Velib