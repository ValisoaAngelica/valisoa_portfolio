"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  const [toast, setToast] = useState<{
    show: boolean
    message: string
    type: "success" | "error"
  }>({
    show: false,
    message: "",
    type: "success",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type })

    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" })
    }, 3000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await emailjs.send(
        "service_r5t3mtm",
        "template_a2vcz0i",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        "xgh2U9-QzEUfdT4f0"
      )

      showToast("Message envoyé avec succès !", "success")

      setFormData({
        fullName: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.log(error)
      showToast("Erreur lors de l'envoi du message.", "error")
    }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contactez <span>Moi</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="fullName"
            placeholder="Votre nom"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          rows={10}
          placeholder="Écrivez votre message..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn">
          Envoyer le message
        </button>
      </form>

      {/* TOAST */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </section>
  )
}