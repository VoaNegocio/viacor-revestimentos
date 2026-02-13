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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col justify-center h-full pt-20 md:pt-24 pb-12 md:pb-40">
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
                que valorizam cada detalhe do seu projeto.
              </h1>
            </div>
          </div>

          {/* Subtítulo */}
          <p className="hero-fade-in-up-delay-2 text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl mx-auto md:mx-0 drop-shadow-md">
            Um showroom sensorial de <strong className="text-white font-semibold">450 m²</strong> com curadoria especializada e atendimento consultivo para transformar sua visão em realidade.
          </p>

          {/* Badge de Localização & CTA */}
          <div className="hero-fade-in-up-delay-3 flex flex-col gap-6 items-center md:items-start">

            <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full md:w-auto">

              {/* Botão 1: Catálogo */}
              <a
                href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de solicitar o catálogo completo."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 bg-[#10B981] md:flex-1 text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
                <span className="relative z-10 tracking-wide drop-shadow-md text-sm md:text-base">Solicitar Catálogo</span>
              </a>

              {/* Botão 2: Ligue Agora */}
              <a
                href="tel:+5511940371530"
                className="group relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 bg-[#10B981] md:flex-1 text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
                <span className="relative z-10 tracking-wide drop-shadow-md text-sm md:text-base">Ligue agora (11) 94037-1530</span>
              </a>

              {/* Botão 3: Agendar Visita (Original) */}
              <a
                href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de mais informações sobre revestimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 bg-[#10B981] md:flex-1 text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
                <span className="relative z-10 tracking-wide drop-shadow-md text-sm md:text-base">Agendar Visita</span>
              </a>

            </div>

            <div className="flex items-center gap-3 text-white/90 bg-black/40 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/10 shadow-lg w-full md:w-auto justify-center md:justify-start">
              <HiLocationMarker className="text-[#10B981] text-xl animate-bounce flex-shrink-0" />
              <span className="text-sm font-medium text-center md:text-left">Zona Sul de SP <span className="mx-2 opacity-50 hidden sm:inline">|</span> <br className="sm:hidden" /> Estacionamento Próprio</span>
            </div>
          </div>
        </div>

      </div>

      {/* --- SCROLL INDICATOR --- */}
      {/* --- CARROSSEL DE MARCAS (Substitui o Explore) --- */}
      {/* --- CARROSSEL DE MARCAS (Substitui o Explore) --- */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-0 w-full overflow-hidden">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll-infinite py-4">
            {/* Loop Infinito de Marcas (Portinari, Castellato, Eliane, Atlas repetidos) */}
            {[...Array(6)].map((_, i) => (
              <>
                <div className="relative flex-shrink-0 flex items-center justify-center h-12 md:h-20 px-6 md:px-10 py-2 md:py-4 mx-6 md:mx-10 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                  <img alt="Logo Portinari" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="120" height="60" src="/marcas/portinari-logo.svg" />
                </div>
                <div className="relative flex-shrink-0 flex items-center justify-center h-12 md:h-20 px-6 md:px-10 py-2 md:py-4 mx-6 md:mx-10 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                  <img alt="Logo Castellato" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="120" height="60" src="/marcas/castelato-logo3.webp" />
                </div>
                <div className="relative flex-shrink-0 flex items-center justify-center h-12 md:h-20 px-6 md:px-10 py-2 md:py-4 mx-6 md:mx-10 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                  <img alt="Logo Eliane" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="120" height="60" src="/marcas/eliane-logo.webp" />
                </div>
                <div className="relative flex-shrink-0 flex items-center justify-center h-12 md:h-20 px-6 md:px-10 py-2 md:py-4 mx-6 md:mx-10 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                  <img alt="Logo Atlas" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="120" height="60" src="/marcas/atlas-logo.webp" />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

    </section >
  )
}

export default Hero