import Banner from "./components/Banner"
import Contact from "./components/Contact"
import MyStory from "./components/MyStory"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import useScrollRestoration from "./hooks/useScrollRestoration"


function App() {
  
  useScrollRestoration();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <MyStory></MyStory>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
