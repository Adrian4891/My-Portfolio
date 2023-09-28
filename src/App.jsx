import './App.css'
import Header from './components/header/Header';
import MenuMobile from './components/menuMobile/MenuMobile';
import Introduction from './components/introduction/Introduction';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useState } from 'react';


function App() {
  const [ menuHiden, setMenuHiden ] = useState(true);

  return (
    <>
      <Header menuHiden={menuHiden} setMenuHiden={setMenuHiden}/>
      <Introduction/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
      <MenuMobile menuHiden={menuHiden} setMenuHiden={setMenuHiden}/>
    </>
  )
}

export default App
