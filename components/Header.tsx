"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)

      const sections = ["home", "about", "experience","trainings", "skills", "project", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link href="#home" className="logo" onClick={() => scrollToSection("home")}>
        Portfolio
      </Link>

      <nav className="navbar">
        {[
          { id: "home", label: "Home", delay: 1 },
          { id: "about", label: "About", delay: 2 },
          { id: "experience", label: "Experiences", delay: 3 },
          { id: "trainings", label: "Trainings", delay: 4 },
          { id: "skills", label: "Skills", delay: 5 },
          { id: "project", label: "Project", delay: 6 },
          { id: "contact", label: "Contact", delay: 7 },
        ].map(({ id, label, delay }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`nav-link ${activeSection === id ? "active" : ""}`}
            style={{ "--i": delay } as React.CSSProperties}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}
