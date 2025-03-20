import React from 'react'

const Hero = () => {
  return (
      <div>
        {/* Sezione Hero */}
        <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-center relative z-1"
        >
        <h1 className="text-4xl md:text-6xl mb-4">
            Hi, I'm <strong>Luca Cirio</strong>
        </h1>
        <p className="text-lg md:text-2xl opacity-80">
            Sviluppatore Web | Front-end & Back-end
        </p>
          </section>
      </div>
  )
}

export default Hero