// src/App.tsx
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import './App.css'

interface Project {
  title: string
  description: string
  link: string
  github: string
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // Typewriter
    const typingElement = document.getElementById('typing-Text')
    if (typingElement) {
      new Typewriter(typingElement, {
        strings: ['Kim dohyun', 'Kimrasng'],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      })
    }

    // Fetch projects
    fetch('/project.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json() as Promise<Project[]>
      })
      .then(setProjects)
      .catch((err) => console.error('Failed to load projects:', err))
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
        <h1>Projects</h1>
        <div id="slide">
          {projects.length === 0 ? (
            <p>Loading projects...</p>
          ) : (
            projects.map((p) => (
              <div key={p.title} className="slide-item">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  Link
                </a>{' '}
                {' '}
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            ))
          )}
        </div>
      </section>

      <section id="contact">
        <ul>
          <li><a href="mailto:me@kimrasng.kr">Email</a></li>
        </ul>
      </section>

      <footer className="App-footer">
        <p>© 2023 Kimrasng. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
