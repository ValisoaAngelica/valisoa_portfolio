import Image from "next/image"

export default function About() {
  return (
    <>
      <section className="about" id="about">
        {/* <div className="about-img">
          <Image src="/PXL_20250907_133656429.jpg" alt="About Valisoa" width={400} height={400} />
        </div> */}
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Développeuse Web</h3>
          <p>
            Je suis une développeur web passionnée spécialisée dans la conception et le développement d’applications web modernes et performantes. Curieuse et motivée, j’aime créer des interfaces intuitives tout en développant des solutions backend efficaces et sécurisées. Mon parcours m’a permis d’acquérir de solides compétences en développement web, gestion de bases de données et conception d’applications adaptées aux besoins des utilisateurs.
          </p>
          <p>
            Quand je ne suis pas en train de coder, vous me trouverez en train de jouer un peu de la guitare ou lire des livres, d&apos;explorer de nouvelles technologies, ou de travailler sur des projets créatifs qui combinent mes compétences techniques avec l&apos;expression artistique. Je crois en la création de solutions qui ne sont pas seulement fonctionnelles, mais aussi élégantes et conviviales.
          </p>
          {/* <a href="#" className="btn">
            Read More
          </a> */}
        </div>
      </section>

      
    </>
  )
}
