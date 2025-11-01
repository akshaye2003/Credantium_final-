"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Globe, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <GlassmorphismNav />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
              <div className="w-8 h-px bg-white/30"></div>
              About Us
              <div className="w-8 h-px bg-white/30"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              Empowering businesses with <span className="font-medium italic">AI automation</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Credantium is a leading AI automation agency headquartered in India, dedicated to transforming how
              businesses operate through intelligent automation solutions.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <Target className="w-12 h-12 text-white mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-white/70 leading-relaxed">
                To empower businesses worldwide with cutting-edge AI automation solutions that drive efficiency,
                innovation, and sustainable growth.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <Globe className="w-12 h-12 text-white mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                To become the world's most trusted AI automation partner, helping organizations unlock their full
                potential through intelligent technology.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">8+</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5 ⭐️</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-4xl font-light text-white mb-8 text-center">Our Story</h2>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
              <p className="text-white/70 leading-relaxed mb-6">
                Founded in India, Credantium emerged from a simple observation: businesses were drowning in repetitive
                tasks while missing opportunities for growth. Our founders, a team of AI experts and business
                strategists, set out to change this narrative.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Today, we serve clients across UAE, UK, Singapore, and India, providing comprehensive AI automation
                solutions that transform operations, enhance customer experiences, and drive measurable results.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our approach is simple: we study your business, develop tailored automation solutions, and provide
                lifelong consultation on emerging AI tools. We're not just a service provider—we're your long-term
                partner in digital transformation.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-4xl font-light text-white mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-white/70">
                  We stay at the forefront of AI technology to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Client Success</h3>
                <p className="text-white/70">
                  Your success is our success. We're committed to delivering measurable results.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
                <p className="text-white/70">We believe in clear communication and honest partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
