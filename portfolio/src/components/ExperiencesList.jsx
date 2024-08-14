import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    position: "Coding Bootcamp",
    company: "Northcoders",
    date: "06/2024 - ongoing",
    location: "Remote",
    description: [
      "Engaged in a 13-week intensive full-stack web development bootcamp, gaining hands-on experience in building robust web applications.",
      "Achieved proficiency in JavaScript, React, Node.js, Express, and SQL through practical, project-based learning and coding exercises.",
      "Developed and deployed practical projects, including an e-commerce website and a Trip Advisor-style API, honing skills in real-world application development.",
      "Embraced Test-Driven Development (TDD), pair programming, and cloud deployment to enhance collaboration and ensure high-quality code.",
      "Actively participating in team projects and coding challenges to refine problem-solving skills and stay up-to-date with industry best practices."
    ]
  },
  {
    position: "AI Hackathon",
    company: "Encode Club",
    date: "03/2024",
    location: "Canary Wharf",
    description: [
      "Contributed to a 48-hour hackathon with a team of 6, developing the Doctor AI application utilizing the Healthily API to deliver highly accurate patient diagnoses with over 96% precision.",
      "Led the front-end development efforts, transforming designs from Figma into a fully functional, responsive website. Ensured the site was intuitive and user-friendly, enhancing the overall user experience and accessibility.",
      "Collaborated closely with team members to integrate API data, refine user interfaces, and troubleshoot technical issues under tight deadlines."
    ]
  },
  {
    position: "UX Designer / Marketing Department",
    company: "Toiletry Express - UK",
    date: "12/2022 - 06/2024",
    location: "London, UK",
    description: [
      "Managed the creation of product photos and visual content, improving marketing materials and client presentations.",
      "Leveraged Magento’s features to enhance the functionality of online stores, integrating with back-end systems and optimizing for high traffic and performance."
    ]
  },
  {
    position: "Architect",
    company: "Dimare - BR",
    date: "03/2018 - 10/2022",
    location: "São Paulo, Brazil",
    description: [
      "Designed comprehensive interior and exterior layouts for residential projects, integrating technical infrastructure elements to ensure functional and aesthetic alignment with client needs.",
      "Created detailed architectural drawings and specifications, collaborating with engineers and contractors to ensure design integrity and compliance with building codes.",
      "Gained proficiency in Ruby on Rails, HTML, CSS, Bootstrap, SQL, Git, OOP, and Heroku.",
      "Designed, implemented, and shipped to production a sports items marketplace and a web app - Meet Up style."
    ]
  }
  // {
  //   position: "Degree",
  //   company: "FEITEP",
  //   date: "02/2016 - 06/2021",
  //   location: "Maringá, Brazil",
  //   description: [
  //     "College of Architecture and Urbanism."
  //   ]
  // }
];

export default function ExperiencesList() {
  return (
    <>
      <h1 className="title">Experience</h1>
      <ul className="experience-content">
        {experiences.map((experience) => {
          return <ExperienceCard key={experience.company} experience={experience}/>
        })}
      </ul>
    </>
  )
  }
