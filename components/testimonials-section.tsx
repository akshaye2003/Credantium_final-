"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[500px] md:min-h-[600px] overflow-hidden">
          <div
            className="flex gap-6 max-w-5xl"
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
        </div>
      </div>
    </section>
  )
}
