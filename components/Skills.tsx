"use client"

import { useRef, useEffect } from "react"

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null)

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll(".progress")
          progressBars.forEach((bar) => {
            const width = bar.getAttribute("data-width")
            if (width) {
              (bar as HTMLElement).style.width = width.trim() // anime jusqu'à la valeur
            }
          })
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  )

  if (skillsRef.current) {
    observer.observe(skillsRef.current)
  }

  return () => observer.disconnect()
}, [])

  const skills = [
    { name: "JavaScript", level: "90%" },
    { name: "Python", level: "85%" },
    { name: "PHP", level:"50%" },
    { name: "HTML/CSS", level: "95%" },
    { name: "Node.js", level: "80%" },
    { name: "React.js", level: "60%" },
    { name: "Django", level: "76%" },
    { name: "Laravel", level: "50%" }
  ]

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        <div className="skills-box">
          <i className="bx bx-code-alt"></i>
          <h3>Backend Development</h3>
          <p>
            Maîtrise des technologies côté serveur, du développement d’API et de la gestion de bases de données.
            Expérience avec Node.js, Python et le framework Django, ainsi qu’avec MySQL.
          </p>
        </div>
        <div className="skills-box">
          <i className="bx bx-paint"></i>
          <h3>Web Design</h3>
          <p>
            Création d'interfaces utilisateur attrayantes et réactives selon les principes de design contemporains.
            Aptitude en HTML, CSS, JavaScript ainsi que plusieurs frameworks.
          </p>
        </div>
        <div className="skills-box">
          <i className="bx bx-music"></i>
          <h3>Music & Creativity</h3>
          <p>
            Débutante en guitare, je développe progressivement un intérêt pour la composition musicale. Cette pratique stimule ma créativité et enrichit ma manière d’aborder la résolution de problèmes et la pensée conceptuelle.
          </p>
        </div>
      </div>

      <div className="skills-progress">
        {skills.map((skill, index) => (
          <div key={index} className="progress-item">
            <h4>{skill.name}</h4>
            <div className="progress-bar">
              <div className="progress" data-width={skill.level}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
