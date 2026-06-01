import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Plateforme de suivi des groupes électrogènes",
      description:
        "Développement d’une plateforme intelligente permettant le suivi et la gestion des groupes électrogènes avec intégration de l’API Gemini de Google pour certaines fonctionnalités IA. Réalisation du back-end en Python avec Flask, gestion des données avec MySQL et conception de l’interface utilisateur en HTML, CSS et JavaScript.",
      image: "/capture-ecran.png",
      technologies: ["Python", "Flask", "MySQL", "Gemini API"],
    },

    {
      title: "Application de gestion d’inventaire",
      description:
        "Mise à jour et amélioration d’une application web de gestion et de suivi d’inventaire. Participation à l’optimisation des fonctionnalités backend en Python ainsi qu’à la gestion des données et à l’amélioration de l’interface utilisateur.",
      image: "/inventaire.png",
      technologies: ["Python", "MySQL", "HTML/CSS", "JavaScript"],
    },

    {
      title: "E-commerce Bookishco",
      description:
        "Projet académique collectif consistant à concevoir une plateforme e-commerce dédiée à la vente de livres en ligne avec gestion des produits, panier et espace utilisateur.",
      image: "/ecommerce-website-interface.png",
      technologies: ["PHP", "MySQL", "Bootstrap"],
    },

    {
      title: "Site de recettes",
      description:
        "Développement d’un site web de recettes culinaires avec le framework Flask permettant l’affichage dynamique des contenus et la gestion des recettes.",
      image: "/api-development-interface.png",
      technologies: ["Python", "Flask", "MySQL"],
    },
  ]

  return (
    <section className="project" id="project">
      <h2 className="heading">
        Mes <span>Projets</span>
      </h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
            />

            <div className="project-layer">
              <h4>{project.title}</h4>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}