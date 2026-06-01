"use client"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Valisoa Angelica | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <button onClick={scrollToTop}>
          <i className="bx bx-up-arrow-alt"></i>
        </button>
      </div>
    </footer>
  )
}
