import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "NC News API",
    description: "Built an API using Node.js, Express, and SQL to access application data, simulating a real-world backend service like Reddit.",
    link: "https://example.com/nc-news-api",
    github: "https://github.com/S-Peta/nc-news",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg"
  },
  {
    name: "Astronomy picture of the day - App",
    description: "A React app using the NASA API and Axios to display daily astronomy photos.",
    link: "https://example.com/astronomy-picture-of-the-day",
    github: "https://github.com/S-Peta/fe-react-data-visualisation",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg"
  },
  {
    name: "Friendzone",
    description: "A Ruby on Rails app for discovering nearby events and meeting new friends with shared interests, offering filters for region, outings, culture, and parties.",
    link: "https://example.com/friendzone",
    github: "https://github.com/S-Peta/friendzone",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg"
  },
  {
    name: "Dunker",
    description: "A marketplace app for buying and selling sports gear.",
    link: "https://example.com/dunker",
    github: "https://github.com/seganta94/dunker",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg"
  },
  {
    name: "Hangman game - Mini App",
    description: "A mini app version of the classic Hangman game.",
    link: "https://example.com/hangman-game",
    github: "https://github.com/S-Peta/fe-tiny-react-apps",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg"
  },
  {
    name: "Jukebox",
    description: "A music streaming app allowing users to create and play custom playlists.",
    link: "https://example.com/jukebox",
    github: "https://github.com/S-Peta/fe-nc-jukebox",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg"
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
