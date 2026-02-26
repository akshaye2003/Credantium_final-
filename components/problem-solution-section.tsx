"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const AlertTriangle = () => (
  <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
)

const CheckCircle = () => (
  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"problem" | "solution">("problem")

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

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const elementAbsoluteTop = rect.top + currentScrollY
      const navbarHeight = 100
      const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight)

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-8 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
            The Problem Every Business Faces
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            <span className="text-red-400">60-70%</span> of Your Leads Are Slipping Away
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            While you&apos;re busy serving customers, your online inquiries are going unanswered. Here&apos;s how we fix it.
          </p>
        </div>

        {/* Mobile: Tab Toggle */}
        <div className="sm:hidden mb-6">
          <div className="flex p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab("problem")}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "problem"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              The Reality
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "solution"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              Our Solution
            </button>
          </div>
        </div>

        {/* Mobile: Single Card View */}
        <div className="sm:hidden">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {activeTab === "problem" ? (
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-red-500/20">
                      <AlertTriangle />
                    </div>
                    <h3 className="text-lg font-bold text-red-400">The Reality</h3>
                  </div>

                  {/* Key Stat */}
                  <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 mb-4">
                    <div className="text-3xl font-bold text-red-400 mb-1">4+ Hours</div>
                    <p className="text-white/80 text-sm">
                      Average response time, but 78% of customers choose the first business to respond
                    </p>
                  </div>

                  {/* Problem Points */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm">Staff miss inquiries during off-hours and weekends</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm">Busy serving customers while online leads go cold</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm">Marketing spend wasted on unresponded inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="group">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <CheckCircle />
                    </div>
                    <h3 className="text-lg font-bold text-green-400">Our Solution</h3>
                  </div>

                  {/* Key Stat */}
                  <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 mb-4">
                    <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                    <p className="text-white/80 text-sm">
                      AI assistant responds within seconds, books appointments while you sleep
                    </p>
                  </div>

                  {/* Solution Points */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle />
                      <p className="text-white/70 text-sm">Instantly qualifies leads and books appointments</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle />
                      <p className="text-white/70 text-sm">Integrates with your CRM and calendar system</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle />
                      <p className="text-white/70 text-sm">Works across website, WhatsApp, email, and phone</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop: Two Cards Side by Side */}
        <div className="hidden sm:grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {/* Problem Card */}
          <div
            className={`group transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-red-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/20">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-red-400">The Reality</h3>
              </div>

              {/* Key Stat */}
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 lg:p-6 mb-6">
                <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-2">4+ Hours</div>
                <p className="text-white/80 text-sm lg:text-base">
                  Average response time, but 78% of customers choose the first business to respond
                </p>
              </div>

              {/* Problem Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm lg:text-base">Staff miss inquiries during off-hours and weekends</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm lg:text-base">Busy serving customers while online leads go cold</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm lg:text-base">Marketing spend wasted on unresponded inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div
            className={`group transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-green-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <CheckCircle />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-green-400">Our Solution</h3>
              </div>

              {/* Key Stat */}
              <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 lg:p-6 mb-6">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-white/80 text-sm lg:text-base">
                  AI assistant responds within seconds, books appointments while you sleep
                </p>
              </div>

              {/* Solution Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm lg:text-base">Instantly qualifies leads and books appointments</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm lg:text-base">Integrates with your CRM and calendar system</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm lg:text-base">Works across website, WhatsApp, email, and phone</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - with spacing above */}
        <div className="mt-12 sm:mt-20">
          <div
            className={`relative overflow-hidden transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Background gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative text-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Free Audit — No Commitment
              </div>

              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-balance">
                Stop Losing Customers Today
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/60 mb-6 sm:mb-8 max-w-xl mx-auto font-light leading-relaxed">
                See exactly how many leads you&apos;re missing with a free response time audit.
              </p>
              
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-black rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 group cursor-pointer w-full sm:w-auto shadow-lg shadow-white/5"
              >
                Get Free Audit
                <ArrowRight />
              </Button>
              
              {/* Trust text */}
              <p className="mt-4 text-white/30 text-xs sm:text-sm">
                Takes 2 minutes • Results in 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
