import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import YellowDot from './components/yellowDot.jsx'
import AboutMe from './components/aboutme.jsx'
import News from './components/news.jsx'
import YellowDot2 from './components/yellowDot2.jsx'
import AboutMePage from './components/AboutMePage.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={
            <>
              <Hero />
              <YellowDot />
              <AboutMe />
              <YellowDot2 />
              <News />
            </>
          }
          /> 
          <Route path='about-me' element={<AboutMePage />} />
          <Route index element={
            <>
              
            </>
          }/>
        </Routes>
      </Router>
    </>
  )
}



export default App
