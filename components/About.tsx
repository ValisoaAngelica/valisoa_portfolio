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
            A propos de <span>Moi</span>
          </h2>
          <h3>Développeuse Web</h3>
          <p>
            Je suis une développeur web passionnée spécialisée dans la conception et le développement d’applications web modernes et performantes. Curieuse et motivée, j’aime créer des interfaces intuitives tout en développant des solutions backend efficaces et sécurisées. Mon parcours m’a permis d’acquérir de solides compétences en développement web, gestion de bases de données et conception d’applications adaptées aux besoins des utilisateurs.
          </p>
          <p>
            Lorsque je ne suis pas en train de coder, j'aime chanter, lire, explorer de nouvelles technologies ou travailler sur des projets créatifs qui allient compétences techniques et expression artistique. Je suis convaincue que les meilleures solutions sont celles qui allient performance, simplicité d'utilisation et élégance.
          </p>
          {/* <a href="#" className="btn">
            Read More
          </a> */}
        </div>
      </section>

      
    </>
  )
}
