import Typewriter from 'typewriter-effect/dist/core'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const typingElement = document.getElementById('typing-Text')
    if (typingElement) {
      new Typewriter(typingElement, {
        strings: ["Kim dohyun", "Kimrasng"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      })
    }
  }, [])

  return (
    <>
      <header className="App-header">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      <section id="home">
        <h1 id="typing-Text"></h1>
      </section>

      <section id="about">
        <h2>About Me</h2>
      </section>


      <section id="project">
        <h2>Projects</h2>
      </section>

      <section id="contact">
        <h2>Contact</h2>
      </section>


      <footer className="App-footer">
        <p>© 2023 Kimrasng. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
