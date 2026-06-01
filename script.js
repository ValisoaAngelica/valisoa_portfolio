// Typed.js for multiple text animation
var typed = new Typed(".multiple-text", {
  strings: ["Backend Developer", "Web Designer", "Guitarist"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active")
    }
  })
})

// Progress bar animation on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress")
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        bar.style.width = width
      })
    }
  })
}, observerOptions)

const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  progressObserver.observe(skillsSection)
}

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(31, 36, 45, 0.9)"
  } else {
    header.style.background = "rgba(31, 36, 45, 0.8)"
  }
})

// Form submission
const contactForm = document.querySelector(".contact form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Add your form submission logic here
    alert("Message sent successfully!")
    contactForm.reset()
  })
}
