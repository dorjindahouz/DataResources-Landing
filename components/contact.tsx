"use client"

import { useState, type FormEvent } from "react"
import { MapPin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"

interface ContactFormData {
  name: string
  company: string
  email: string
  interest: string
  message: string
}

const initialFormData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  interest: "90-Day Pilot Program",
  message: "",
}

const deploymentOptions = [
  "90-Day Pilot Program",
  "Full EAM Implementation",
  "FMS Upgrade",
  "Infrastructure Consulting",
]

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        message: formData.message,
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

  return (
    <section
      className="px-6 lg:px-20 py-24 border-t border-white/5"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance">
              Connect with Technical Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to modernize your mining operations? Our technical lead is
              ready to discuss site-specific requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-secondary rounded-lg flex items-center justify-center text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-foreground font-bold">HQ Office</p>
                  <p className="text-muted-foreground text-sm">
                    Sukhbaatar District, 1st Khoroo, Ulaanbaatar, Mongolia
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 bg-secondary rounded-lg flex items-center justify-center text-primary">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-foreground font-bold">Direct Email</p>
                  <p className="text-muted-foreground text-sm">
                    technical.services@dataresources.mn
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden grayscale brightness-90 border border-border">
                <img
                  alt="Monochrome street map view of downtown Ulaanbaatar showing office location"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoRE-TFtBpXH_LQtSGFsbzAupPlkAYLuRdNLChF3MRp7n3rcoUVCcjTnlnQYBWZBC1o98NRwuR-TYHZhGDGcxBInWhyE0cwIMTj6s8lnukx5FEatvZgjdKNWsCX1dh9mWa0RIHDGzri1UyVt--NJSMzI9o4F0nmrZLu9i9xM26-o2mnNORIIZgdKAhZ_CmAtxFMhqE4FuTNcVdr8-klO3U_KNt_1iKa0dVUmEMNVqi2RKEQHuEjtEbJVrT3WBwQF6D_nppIquOf-w"
                />
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
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
                <h3 className="text-xl font-bold text-foreground">
                  Message Sent
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our technical services lead will
                  respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-bold text-muted-foreground"
                    >
                      Mining Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Gobi Minerals"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-muted-foreground"
                  >
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
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="interest"
                    className="text-sm font-bold text-muted-foreground"
                  >
                    Deployment Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  >
                    {deploymentOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your site constraints (Connectivity, fleet size, etc.)"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-glow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Connect with our Technical Services Lead"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
