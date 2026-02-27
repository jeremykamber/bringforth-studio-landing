import React from 'react'

export default function Hero(){
  return (
    <section className="mb-12">
      <h1 className="text-4xl font-bold mb-4">Bringforth Studio</h1>
      <p className="text-lg max-w-2xl">Bringforth Studio is an AI Product Lab: a home for AI-centric apps and startup ideas. We build, test, and iterate on products that help people and teams — fast.</p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-4 py-2 border rounded">See projects</a>
        <a href="#" className="px-4 py-2 rounded bg-black text-white">Get in touch</a>
      </div>
    </section>
  )
}
