import { useState, useEffect } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion' // eslint-disable-line no-unused-vars

const images = [
  "/fotos/img1.webp",
  "/fotos/showroom1.webp",
  "/fotos/showroom2.webp",
  "/fotos/showroom4.webp"
]

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* --- BACKGROUND CINEMATOGRÁFICO COM CARROSSEL --- */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Showroom Via Cor Revestimentos"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-[1] bg-black/30 pointer-events-none"></div>
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/60 via-black/20 to-black/80 md:from-black/70 md:via-transparent md:to-black/90"></div>







      {/* --- CONTEÚDO EDITORIAL --- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col justify-center h-full pt-20 md:pt-24 pb-12">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">

          {/* Título Principal (Verde Esmeralda) */}
          <div className="hero-fade-in-up-delay-1 mb-8 md:mb-10 relative inline-block text-left animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A5F] to-[#10B981] opacity-30 blur-xl rounded-tr-3xl rounded-br-3xl -z-10"></div>
            <div className="bg-[#1E3A5F]/90 backdrop-blur-xl p-6 md:p-10 lg:p-12 rounded-tr-[40px] border-l-[6px] border-[#10B981] shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold !text-white leading-[1.1] font-serif">
                Revestimentos de <br className="hidden lg:block" />
                <span className="relative inline-block">
                  <span className="italic font-light text-white/90 relative z-10">alto padrão</span>
                  <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#10B981]/60 -z-0 skew-x-12"></span>
                </span>{' '}
                para projetos exigentes
              </h1>
            </div>
          </div>

          {/* Subtítulo */}
          <p className="hero-fade-in-up-delay-2 text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl mx-auto md:mx-0 drop-shadow-md">
            Um showroom sensorial de <strong className="text-white font-semibold">450 m²</strong> com curadoria especializada e atendimento consultivo para transformar sua visão em realidade.
          </p>

          {/* Badge de Localização & CTA */}
          <div className="hero-fade-in-up-delay-3 flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* Botão Verde Premium */}
            <a
              href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de mais informações sobre revestimentos"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
              <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
              <span className="relative z-10 tracking-wide drop-shadow-md">Agendar Visita</span>
            </a>

            <div className="flex items-center gap-3 text-white/90 bg-black/40 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/10 shadow-lg">
              <HiLocationMarker className="text-[#10B981] text-xl animate-bounce" />
              <span className="text-sm font-medium">Zona Sul de SP <span className="mx-2 opacity-50">|</span> Estacionamento Próprio</span>
            </div>
          </div>

        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-80">
        <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-light drop-shadow-md">Explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16" className="drop-shadow-md">
          <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
        </svg>
      </div>

    </section>
  )
}

export default Hero