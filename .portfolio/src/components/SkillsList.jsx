import SkillCard from "./SkilsCard";

import ruby from '../images/ruby.png';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import magento from '../images/magento.png';
import shopify from '../images/shopify.png';
import heroku from '../images/heroku.png';
import azure from '../images/azure.png';
import figma from '../images/figma.png';


const skillsList = [
  { name: 'Ruby', image: ruby },
  { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Jest', image: 'https://example.com/images/jest.png' },
  { name: 'Supertest', image: 'https://example.com/images/supertest.png' },
  { name: 'SQL', image: 'https://example.com/images/sql.png' },
  { name: 'SQLite', image: 'https://example.com/images/sqlite.png' },
  { name: 'PostgreSQL', image: 'https://example.com/images/postgresql.png' },
  { name: 'MongoDB', image: 'https://example.com/images/mongodb.png' },
  { name: 'HTML', image: html },
  { name: 'CSS/Sass', image: css },
  { name: 'Tailwind CSS', image: 'https://example.com/images/tailwind_css.png' },
  { name: 'React', image: react },
  { name: 'Magento', image: magento },
  { name: 'Shopify', image: shopify },
  { name: 'Heroku', image: heroku },
  { name: 'Azure', image: azure },
  { name: 'Figma', image: figma },
];


export default function SkillsList() {
  return (
    <>
      <ul className="skills-list">
        {skillsList.map((skill) => {
          return <SkillCard key={skill.name} skill={skill}/>
        })
        }
      </ul>
    </>
  )
  }
