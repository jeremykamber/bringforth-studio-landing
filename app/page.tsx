import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Page() {
  return (
    <main className="min-h-screen bg-bf-lightBg dark:bg-bf-darkBg text-bf-primaryLight dark:text-bf-primaryDark">
      <div className="container mx-auto px-6 py-16">
        <Hero />
        <Projects />
      </div>
    </main>
  )
}
