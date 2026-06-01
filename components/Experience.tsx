export default function Experience() {
  const experiences = [
    {
      type: "Stage de Fin de Licence",
      date: "Déc. 2024 – Mars 2025",
      title: "Plateforme de suivi des groupes électrogènes",
      company: "Société Malgache de Magasins – Ankorondrano",
      description:
        "Développement d'une plateforme intégrant l'IA via l'API Gemini (Google), avec back-end Python, base de données MySQL, interface HTML/CSS/JS et validation des endpoints via Postman.",
      tags: ["Python", "MySQL", "Flask", "Postman", "Gemini API"],
    },
    {
      type: "Stage d'Insertion",
      date: "Fév. 2024 – Avr. 2024",
      title: "Site de gestion d'inventaire",
      company: "Société Malgache de Magasins – Ankorondrano",
      description:
        "Mise à jour d’une application web de gestion et de suivi d’inventaire en Python, avec utilisation de MySQL pour la gestion de base de données ainsi que HTML, CSS et JavaScript pour la conception de l’interface utilisateur.",
      tags: ["Python", "MySQL", "HTML/CSS", "JavaScript"],
    },
    {
      type: "Stage de Découverte",
      date: "Juin 2023 – Juil. 2023",
      title: "Immersion professionnelle",
      company: "Assurance Aro – Antsahavola",
      description:
        "Stage d'observation et d'immersion au sein du Grand Pôle pour acquérir une meilleure connaissance de l'environnement et des réalités du monde professionnel.",
      tags: ["Observation", "Immersion"],
    },
  ]

  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        Mon <span>Expérience</span>
      </h2>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <span className="experience-badge">{exp.type}</span>
            <span className="experience-date">{exp.date}</span>
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-desc">{exp.description}</p>
            <div className="experience-tags">
              {exp.tags.map((tag, i) => (
                <span className="experience-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
