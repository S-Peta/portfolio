import SkillCard from "./SkilsCard";

import ruby from '../../public/images/ruby.png';
import html from '../../public/images/html.png';
import css from '../../public/images/css.png';
import react from '../../public/images/react.png';
import magento from '../../public/images/magento.png';
import shopify from '../../public/images/shopify.png';
import heroku from '../../public/images/heroku.png';
import azure from '../../public/images/azure.png';
import figma from '../../public/images/figma.png';
import jest from '../../public/images/jest.png';
import sql from '../../public/images/sql.png';
import sqlite from '../../public/images/sqlite.png';
import postgresql from '../../public/images/postgresql.png';
import mongo from '../../public/images/mongo-db.png';
import tailwind from '../../public/images/tailwind.png';


const skillsList = [
  { name: 'Ruby', image: ruby },
  { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Jest', image: jest },
  { name: 'SQL', image: sql },
  { name: 'SQLite', image: sqlite },
  { name: 'PostgreSQL', image: postgresql },
  { name: 'MongoDB', image: mongo },
  { name: 'HTML', image: html },
  { name: 'CSS/Sass', image: css },
  { name: 'Tailwind CSS', image: tailwind },
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
    <h1 className="title">Skills</h1>
      <ul className="skills-list">
        {skillsList.map((skill) => {
          return <SkillCard key={skill.name} skill={skill}/>
        })
        }
      </ul>
    </>
  )
  }
