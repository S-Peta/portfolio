import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import ExperiencesList from './components/ExperiencesList'
import Header from './components/Header'
import ProjectsList from './components/ProjectsList'
import SkillsList from './components/SkillsList'

function App() {
  return (
    <>
      <Header/>
      <About/>
      <SkillsList/>
      <ProjectsList/>
      <ExperiencesList/>
      <Contact/>
    </>
  )
}

export default App
