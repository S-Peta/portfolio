import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`about fade-in ${inView ? 'show' : ''}`}>
      <p>
        After discovering my passion for technology, I decided to switch careers. With over 6 years of experience as an architect, I got involved in designing websites for the firms I worked with, sparking my interest in tech.
      </p>
      <p>
        I began studying web development through online courses and had the chance to work closely with the IT team at my last company. This experience solidified my decision to transition from architecture to software engineering.
      </p>
    </div>
  );
}
