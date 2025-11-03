"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Function to scroll to hash
    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # from the hash
        const id = hash.replace("#", "")
        const element = document.getElementById(id)

        if (element) {
          // Wait a bit for the page to fully render
          setTimeout(() => {
            const navbarHeight = 100
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }, 100)
        }
      }
    }

    // Scroll on initial load and when pathname changes
    scrollToHash()

    // Also listen for hash changes
    window.addEventListener("hashchange", scrollToHash)

    return () => {
      window.removeEventListener("hashchange", scrollToHash)
    }
  }, [pathname])

  return null
}
