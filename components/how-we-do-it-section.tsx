"use client"

import { useEffect, useRef, useState } from "react"

const CheckCircle = () => (
  <svg className="h-5 w-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export function HowWeDoItSection() {
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

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div
          className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            How We Deliver These Three Steps
          </h3>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Study Phase */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4">Deep Business Analysis</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">Comprehensive workflow assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">Identify automation opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">ROI projection and planning</p>
                </div>
              </div>
            </div>

            {/* Development Phase */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4">Custom Development</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">Tailored AI solutions built for you</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">Seamless system integration</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">Thorough testing and deployment</p>
                </div>
              </div>
            </div>

            {/* Consultation Phase */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4">Ongoing Partnership</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">24/7 technical support</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">Regular AI tool updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm">Strategic consultation sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
