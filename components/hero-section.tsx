"use client"

import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
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
    <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-sm font-medium mb-6 sm:mb-8 mt-6 sm:mt-12">
          <span className="w-2 h-2 rounded-full mr-2 animate-pulse bg-green-400"></span>
          AI, Automation & Consulting
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-4 sm:mb-6">
          <span className="text-white">Elevate your</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
            <span className="text-white">Business</span>
            <RotatingText
              texts={["Growth", "Innovation", "Efficiency", "Success", "Performance"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-white/70 text-balance max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-light">
          Credantium helps businesses save time and boost revenue with smart AI automation, workflows, and intelligent
          solutions, fully managed for you.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full sm:w-auto px-4 sm:px-0">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-lg font-semibold transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl hover:shadow-white/10 group cursor-pointer w-full sm:w-auto shadow-lg"
          >
            Get Your Free Audit
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
