import { useInView } from 'react-intersection-observer';

export default function ExperienceCard({experience}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <li ref={ref} className={`experience-card fade-in ${inView ? 'show' : ''}`}>
      <h2>{experience.position}</h2>
      <h3>{experience.company}, {experience.location}</h3>
      <p>{experience.date}</p>
      <p>{experience.description}</p>
    </li>

    </>
  )
  }
