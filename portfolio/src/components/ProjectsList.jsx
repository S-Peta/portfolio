import ProjectCard from "./ProjectCard";
import friendzone from "../../public/images/friendzone.png";
import dunker from "../../public/images/dunker.png";
import news_api from "../../public/images/news-api.png";
import hangman from "../../public/images/hangman.png";
import nc_news from "../../public/images/nc-news-app.png";




const projects = [
  {
    name: "Friendzone",
    description: "A Ruby on Rails app for discovering nearby events and meeting new friends with shared interests, offering filters for region, outings, culture, and parties",
    link: "https://friendzone-lw-09b9f773c87f.herokuapp.com/",
    github: "https://github.com/S-Peta/friendzone",
    image: friendzone
  },
  {
    name: "API",
    description: "Built an API using Node.js, Express, and SQL to access application data, simulating a real-world backend service like Reddit",
    link: "https://news-api-urho.onrender.com/api",
    github: "https://github.com/S-Peta/nc-news",
    image: news_api
  },
  {
    name: "NC News - App",
    description: "NC News App is a React application that mimics the core functionalities of Reddit",
    link: "https://nc-news-web-app.netlify.app/",
    github: "https://github.com/S-Peta/nc-news-app",
    image: nc_news
  },
  {
    name: "Dunker",
    description: "A marketplace app for buying and selling sports gear",
    link: "https://dunker-d1025042480e.herokuapp.com/",
    github: "https://github.com/seganta94/dunker",
    image: dunker
  },
  {
    name: "Hangman game - Mini App",
    description: "A mini app version of the classic Hangman game",
    link: "https://hangman-game-web-app.netlify.app/",
    github: "https://github.com/S-Peta/fe-tiny-react-apps",
    image: hangman
  }
];

export default function ProjectsList() {
  return (
    <>
      <h1 className="title">Portfolio</h1>
      <ul className="project-list">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project}/>
        })}
      </ul>
    </>
  )
}
