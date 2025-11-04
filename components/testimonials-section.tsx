"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    description: "",
    name: "",
    position: "",
    company: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Review submitted:", formData)
    // Reset form
    setFormData({
      description: "",
      name: "",
      position: "",
      company: "",
    })
    alert("Thank you for your review! We'll review it shortly.")
  }

  const testimonials = [
    {
      text: "We were strugling to build a trading community in Dicord. Credantium helped us build it through AI user intereacting bots, Live Market News, etc. Now we have seen a large increase in user interaction and new member joins",
      name: "Vipin V",
      role: "FundedIn - Marketing Head",
    },
    {
      text: "Used to Loose lots of room bookings through call because of staff shortage. Now that we use AI receptionist which works 24/7 we are able take booking for rooms even at midnight.",
      name: "Michle",
      role: "Armani Bar&Hotel - General Manager",
    },
    {
      text: "With Credantium, our conversion rates increased by 85% and boosted our weekend revenue by 40%.",
      name: "Muneer S",
      role: "Brother's Restaurant - Owner",
    },
    {
      text: "Its not just the Automation. I was supprised on how much I'm saving or salaries now. Booking appointments, Resheduling appointments,Managing customers, all were a hassel. Now i save more that triple the money and no hassle ",
      name: "Kamal",
      role: "Ayush Dental - Owner",
    },
    {
      text: "Customer satisfaction scores improved dramatically since implementing AI. Clients love the instant responses and personalized recommendations.",
      name: "David Kim",
      role: "Customer Experience Manager",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-32">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            Success Stories
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            The businesses we <span className="font-medium italic">empower</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover how leading businesses are transforming their customer engagement with AI-powered chat solutions
          </p>
        </div>

        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex flex-col lg:flex-row justify-center items-start gap-6 min-h-[500px] md:min-h-[600px] overflow-hidden">
          <div
            className="flex gap-6 max-w-5xl flex-1"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 4)}
              duration={18}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(3, 5)}
              duration={12}
              className="flex-1 hidden lg:block"
            />
          </div>

          <div className="w-full lg:w-96 lg:sticky lg:top-24">
            <div className="p-6 rounded-2xl border border-white/20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))] backdrop-blur-xl">
              <h3 className="text-2xl font-light text-white mb-2">Post a Review</h3>
              <p className="text-sm text-white/60 mb-6">Share your experience with us</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-white/80 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                    placeholder="Your position"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
                >
                  Submit Review
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
