import './App.css'
import SplitText from './components/SplitText'
import { useEffect, useState } from 'react'

function App() {

  type Project = {
    img: string
    alt: string
    title: string
    desc: string
    github: string
    demo: string
  }

  const PROJECTS_JSON_URL = '/projects.json'

  function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
      fetch(PROJECTS_JSON_URL)
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(() => setProjects([]))
    }, [])

    return (
      <>
        <h2 id="section-title">Project</h2>
        <div className='project-container'>
          {projects.map((project, idx) => (
            <div className='project-item' key={idx}>
              <img src={project.img} className='project-img' alt={project.alt} />
              <div className='project-desc'>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <div className='project-links'>
                <a href={project.github}>GitHub</a>
                <a href={project.demo}>Demo</a>
              </div>
            </div>
          ))}
        </div>

    </>
    )
  }

  return (
    <>
      <section className="main-section">
        <SplitText
          text="Code the network.
Design the system.
Build the experience."
          className="main-title"
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          tag="h1"
          rootMargin="-100px"
          textAlign="left"
        />
      </section>

      <section id="about-section">
        <h2 id="section-title">About Me.</h2>
        <div id="about-container">
          <div id="profile-container">
            <img src="/profile.png" id="profile-img" alt="profile" />
            <span id="profile-name">Dohyun Kim</span>
            <div id='connect'>
              <a href="mailto:me@kimrasng.kr">Email</a>
              <a href="https://github.com/kimdohyun">GitHub</a>
              <a href="https://www.linkedin.com/in/kim-dohyun-5b1385384/">LinkedIn</a>
            </div>
          </div>
          <p id="about-description">
            안녕하세요. 웹 풀스택 개발자 김도현입니다.<br />
            저는 안정적인 시스템 구조와 효율적인 서비스 운영을 중요하게 생각합니다.<br />
            서버부터 프론트엔드까지 전체적인 개발 과정을 직접 설계하고 구현합니다.<br /><br />
            최근에는 안드로이드 앱 개발을 배우며, 웹과 모바일을 연결하는<br />
            통합적인 서비스를 만드는 것을 목표로 하고 있습니다.<br /><br />
            새로운 기술을 공부하고<br />
            더 나은 구조를 고민하는 것이 저의 개발 원동력입니다.
          </p>
        </div>
      </section>

      <section id="project-section">
        <ProjectsSection />
      </section>


    </>
  )
}

export default App
