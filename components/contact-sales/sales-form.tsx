"use client"

import { useState, type FormEvent } from "react"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"

interface SalesFormData {
  name: string
  company: string
  email: string
  phone: string
  fleet_size: string
  timeline: string
  interest: string
  message: string
}

const initialFormData: SalesFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  fleet_size: "",
  timeline: "Within 3 months",
  interest: "Software Evaluation",
  message: "",
}

const deploymentOptions = [
  "Software Evaluation",
  "Full Platform Deployment",
  "System Integration",
  "Multi-Site Rollout",
  "Infrastructure Consulting",
  "Support & Maintenance",
]

const timelineOptions = [
  "Within 3 months",
  "3-6 months",
  "6-12 months",
  "Exploring options",
]

export function SalesForm() {
  const [formData, setFormData] = useState<SalesFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const { error: insertError } = await supabase.from("leads").insert([
      {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        interest: formData.interest,
        message: `Phone: ${formData.phone}\nFleet Size: ${formData.fleet_size}\nTimeline: ${formData.timeline}\n\n${formData.message}`,
      },
    ])

    setIsSubmitting(false)

    if (insertError) {
      setError("Something went wrong. Please try again.")
      return
    }

    setSubmitted(true)
    setFormData(initialFormData)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"

  return (
    <motion.div
      className="glass-card p-8 lg:p-12 rounded-2xl"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {submitted ? (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
          <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Mail className="size-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Message Sent</h3>
          <p className="text-muted-foreground max-w-sm">
            Thank you for reaching out. Our sales team will respond within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-muted-foreground">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-bold text-muted-foreground">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-muted-foreground">
                Corporate Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="j.doe@company.mn"
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-bold text-muted-foreground">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+976 9999 0000"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fleet_size" className="text-sm font-bold text-muted-foreground">
                Organization Size
              </label>
              <input
                id="fleet_size"
                name="fleet_size"
                type="text"
                value={formData.fleet_size}
                onChange={handleChange}
                placeholder="e.g. 500 employees, 3 sites"
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-sm font-bold text-muted-foreground">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className={inputClass}
              >
                {timelineOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="interest" className="text-sm font-bold text-muted-foreground">
              Deployment Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={inputClass}
            >
              {deploymentOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your requirements (systems, scale, timeline, etc.)"
              className={`${inputClass} resize-none`}
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-glow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {isSubmitting ? "Sending..." : "Get in Touch with Sales"}
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}
