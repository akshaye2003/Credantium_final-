"use client"

import { useEffect, useRef, useState } from "react"

const Search = () => (
  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

const Code = () => (
  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const Users = () => (
  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const ArrowDown = () => (
  <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

export function ProcessFlowchart() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const steps = [
    {
      icon: <Search />,
      number: "01",
      title: "Audit Your Business",
      description: "We analyze your business operations and identify where AI automation can deliver the most value",
    },
    {
      icon: <Code />,
      number: "02",
      title: "Develop the Automation",
      description: "Our team builds custom AI solutions tailored to your specific needs and integrates them seamlessly",
    },
    {
      icon: <Users />,
      number: "03",
      title: "Lifelong Consultation",
      description: "Continuous support and updates on new AI tools to keep your business at the cutting edge",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 px-4 relative z-10 sm:py-0">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Our Three-Step Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            From analysis to implementation and beyond, we're with you every step of the way
          </p>
        </div>

        {/* Flowchart */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:border-white/20 group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white/40 text-sm font-mono">{step.number}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
