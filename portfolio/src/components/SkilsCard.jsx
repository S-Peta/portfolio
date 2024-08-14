export default function SkillCard({skill}) {
  return (
    <>
      <li className="skill-card">
        <img src={skill.image} alt="" />
        <p>{skill.name}</p>
      </li>
    </>
  )
  }
