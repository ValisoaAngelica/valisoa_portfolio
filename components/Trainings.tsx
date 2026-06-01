export default function Trainings() {
  const formations = [
    {
      date: "Mars 2026 – Juin 2026",
      title: "Memorandum of Completion – Level 3",
      school: "Madagascar TEFL TESOL Courses",
    },
    {
      date: "Janvier 2026 – Mars 2026",
      title: "Memorandum of Completion – Level 2",
      school: "Madagascar TEFL TESOL Courses",
    },
    {
      date: "Septembre 2025 – Novembre 2025",
      title: "Memorandum of Completion – Level 1",
      school: "Madagascar TEFL TESOL Courses",
    },
    {
      date: "2024 – 2025",
      title: "Licence en Sciences et Technologies – Mention Informatique",
      school: "ESMIA Innovation",
      desc: "Parcours Informatique, Risques et Décision.",
    },
    {
      date: "2021 – 2022",
      title: "Baccalauréat",
      school: "Cheval d'Or",
    },
  ]

  return (
    <section className="education" id="trainings">
      <h2 className="heading">
        Ma <span>Formation</span>
      </h2>

      <div className="education-grid">
        {formations.map((item, index) => (
          <div className="education-card" key={index}>
            <span className="education-date">{item.date}</span>

            <h3>{item.title}</h3>

            <h4>{item.school}</h4>

            {item.desc && <p>{item.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}