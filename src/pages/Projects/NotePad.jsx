const NotePad = (props) => {
  const projects = props.projects
  const notePadProject = projects.filter(projet => projet.attributes.slug === "notepad")[0]
  // console.log(notePadProject);
  
  // If projects is still an empty array or notePadProject is undefined, render "Loading..."
  if (!projects.length || !notePadProject) {
    return <div>Loading...</div>;
  }
  const images = notePadProject.attributes.images.data

  return (
    <div className="project-box note-pad">
      <div className="screenshots-box">
        {images.map((image,index) =>
        // console.log(image.attributes.formats.large.url)
          <div className="screenshot-box" key={index}>
            <img src={`http://localhost:1337${image.attributes.formats.medium.url}`} alt={image.attributes.name} />
          </div>
        )}
      </div>

      <div className="content-box">
        <h2>{notePadProject.attributes.title}</h2>
        <p>{notePadProject.attributes.release_date}</p>
        <p>{notePadProject.attributes.description}</p>
        <p>{notePadProject.attributes.content}</p>
      </div>
      
    </div>
  )
}

export default NotePad