"use client"

import type React from "react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3 className="hello-text">Bonjour, c'est moi</h3>

        <h1 className="home-title">Valisoa Angelica</h1>

        <h3 className="profession">
          Et je suis {" "}
          <span className="animated-text">Développeuse web</span>
        </h3>

        <p>
          Je suis une développeuse passionnée diplômée en Licence en Sciences et
          Technologies, mention Informatique parcours Informatique, Risques et
          Décisions à l&apos;ESMIA avec une solide expérience en développement web.
        </p>
      </div>

      <div className="home-img">
        <Image
          src="/PXL_20250907_133656429.jpg"
          alt="Valisoa Angelica"
          width={350}
          height={350}
          priority
          className="profile-img"
        />
      </div>
    </section>
  )
}