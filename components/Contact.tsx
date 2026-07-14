export default function Contact() {
  const contacts = [
    {
      icon: "bx bx-phone",
      label: "Téléphone",
      value: "+261 33 06 375 32",
    },
    {
      icon: "bx bx-envelope",
      label: "Email",
      value: "rasamoelinavalisoa53@gmail.com",
      href: "mailto:rasamoelinavalisoa53@gmail.com",
    },
    {
      icon: "bx bxl-github",
      label: "GitHub",
      value: "github.com/ValisoaAngelica",
      href: "https://github.com/ValisoaAngelica",
    },
  ]

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contactez <span>Moi</span>
      </h2>

      <div className="contact-cards">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="contact-card"
          >
            <span className="contact-card-icon">
              <i className={c.icon}></i>
            </span>
            <span className="contact-card-label">{c.label}</span>
            <span className="contact-card-value">{c.value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
