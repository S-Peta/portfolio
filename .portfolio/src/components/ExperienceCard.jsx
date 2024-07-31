export default function ExperienceCard({experience}) {
  return (
    <>
    <li className="experience-card">
      <h2>{experience.position}</h2>
      <h3>{experience.company}, {experience.location}</h3>
      <p>{experience.description}</p>
    </li>

    </>
  )
  }
