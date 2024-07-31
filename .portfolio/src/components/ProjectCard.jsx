export default function ProjectCard({project}) {
  return (
    <>
      <li className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="project-card-content">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="button-container">
            <a href={project.link}>
              <button>View Project</button>
            </a>
            <a href={project.github}>
              <button>GitHub</button>
            </a>
          </div>
        </div>
      </li>
    </>
  )
}
