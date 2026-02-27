import React from 'react'

const projects = [
  {
    title: 'DeepBound',
    tagline: 'Automated user testing for startups',
    description: 'Generates realistic user personas from an ICP, runs them through a product end-to-end, and produces detailed reports of the AI agents\' thought processes, emotions, pain points, and actionable insights.'
  },
  {
    title: 'Echo',
    tagline: 'Your AI-powered journaling companion',
    description: 'Echo listens as you write, retrieves relevant past entries, and offers thoughtful, context-aware reflections to deepen self-understanding.'
  }
]

export default function Projects(){
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p=> (
          <article key={p.title} className="p-6 rounded shadow bg-white dark:bg-gray-900">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{p.tagline}</p>
            <p className="mt-3">{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
