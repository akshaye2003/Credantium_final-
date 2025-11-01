"use client"

import { useEffect, useRef, useState } from "react"

const Globe = () => (
  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export function CountriesSection() {
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

  const countries = [
    { name: "UAE", flag: "🇦🇪" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "India", flag: "🇮🇳" },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Physical Consultants Available In</h3>
            </div>
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Meet with our expert consultants in person across four continents
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {countries.map((country, index) => (
                <div
                  key={country.name}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <span className="text-white font-semibold text-lg">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
