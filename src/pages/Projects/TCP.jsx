const TCP = (props) => {
  const projects = props.projects
  const chatonProject = projects.filter(projet => projet.attributes.slug === "the-chaton-project")[0]
  // console.log(chatonProject);
  
  // If projects is still an empty array or chatonProject is undefined, render "Loading..."
  if (!projects.length || !chatonProject) {
    return <div>Loading...</div>;
  }
  const images = chatonProject.attributes.images.data

  return (
    <div className="project-box tcp">
      <div className="screenshots-box">
        {images.map((image,index) =>
        // console.log(image.attributes.formats.large.url)
          <div className="screenshot-box" key={index}>
            <img src={`http://localhost:1337${image.attributes.formats.medium.url}`} alt={image.attributes.name} />
          </div>
        )}
      </div>
      <div className="content-box">
        <h2>{chatonProject.attributes.title}</h2>
        <p>{chatonProject.attributes.release_date}</p>
        <p>{chatonProject.attributes.description}</p>
        <p>{chatonProject.attributes.content}</p>
      </div>
    </div>
  )
}

export default TCP