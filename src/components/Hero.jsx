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
    <section className="relative min-h-[60vh] md:min-h-screen flex items-start md:items-center justify-center overflow-x-hidden">

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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col justify-start md:justify-center h-full pt-24 md:pt-24 pb-8 md:pb-40 overflow-x-hidden">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">

          {/* Título Principal (Verde Esmeralda) */}
          <div className="hero-fade-in-up-delay-1 mb-6 md:mb-10 relative block md:inline-block text-left animate-fade-in-up w-full max-w-[85vw] mx-auto md:max-w-none md:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A5F] to-[#10B981] opacity-30 blur-xl rounded-tr-3xl rounded-br-3xl -z-10"></div>
            <div className="bg-[#1E3A5F]/90 backdrop-blur-xl p-4 md:p-10 lg:p-12 rounded-tr-[20px] md:rounded-tr-[40px] border-l-4 md:border-l-[6px] border-[#10B981] shadow-2xl">
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold !text-white leading-tight md:leading-[1.1] font-serif break-words">
                Revestimentos de <br className="hidden lg:block" />
                <span className="relative inline-block">
                  <span className="italic font-light text-white/90 relative z-10">alto padrão</span>
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[3px] md:h-[6px] bg-[#10B981]/60 -z-0 skew-x-12"></span>
                </span>{' '}
                que valorizam cada detalhe do seu projeto.
              </h1>
            </div>
          </div>

          {/* Subtítulo */}
          {/* --- CARROSSEL DE MARCAS --- */}
          <div className="hero-fade-in-up-delay-2 w-full mb-6 md:mb-10 overflow-hidden max-w-[85vw] mx-auto md:max-w-none md:mx-0">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-scroll-infinite py-2 md:py-4 gap-4 md:gap-10">
                {/* Loop Infinito de Marcas (Portinari, Castellato, Eliane, Atlas repetidos) */}
                {[...Array(6)].map((_, i) => (
                  <>
                    <div className="relative flex-shrink-0 flex items-center justify-center h-8 md:h-20 px-3 md:px-10 py-1 md:py-4 mx-1 md:mx-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                      <img alt="Logo Portinari" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="80" height="40" src="/marcas/portinari-logo.svg" />
                    </div>
                    <div className="relative flex-shrink-0 flex items-center justify-center h-8 md:h-20 px-3 md:px-10 py-1 md:py-4 mx-1 md:mx-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                      <img alt="Logo Castellato" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="80" height="40" src="/marcas/castelato-logo3.webp" />
                    </div>
                    <div className="relative flex-shrink-0 flex items-center justify-center h-8 md:h-20 px-3 md:px-10 py-1 md:py-4 mx-1 md:mx-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                      <img alt="Logo Eliane" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="80" height="40" src="/marcas/eliane-logo.webp" />
                    </div>
                    <div className="relative flex-shrink-0 flex items-center justify-center h-8 md:h-20 px-3 md:px-10 py-1 md:py-4 mx-1 md:mx-6 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                      <img alt="Logo Atlas" className="h-full w-auto object-contain opacity-80 grayscale transition-all duration-300" loading="lazy" width="80" height="40" src="/marcas/atlas-logo.webp" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Badge de Localização & CTA */}
          <div className="hero-fade-in-up-delay-3 flex flex-col gap-3 md:gap-6 items-center md:items-start w-full max-w-[85vw] mx-auto md:mx-0">

            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 w-full md:w-auto">

              {/* Botão 1: Catálogo */}
              <a
                href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de solicitar o catálogo completo."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full md:w-auto px-4 py-3 md:px-6 md:py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 bg-[#10B981] md:flex-1 text-center text-sm md:text-base"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
                <span className="relative z-10 tracking-wide drop-shadow-md whitespace-normal break-words leading-tight">Solicitar Catálogo</span>
              </a>

              {/* Botão 2: Ligue Agora */}
              <a
                href="tel:+5511940371530"
                className="group relative inline-flex items-center justify-center w-full md:w-auto px-4 py-3 md:px-6 md:py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 bg-[#10B981] md:flex-1 text-center text-sm md:text-base"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
                <span className="relative z-10 tracking-wide drop-shadow-md whitespace-normal break-words leading-tight">Ligar agora</span>
              </a>

              {/* Botão 3: Agendar Visita (Original) */}
              <a
                href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de mais informações sobre revestimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full md:w-auto px-4 py-3 md:px-6 md:py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 bg-[#10B981] md:flex-1 text-center text-sm md:text-base"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
                <span className="relative z-10 tracking-wide drop-shadow-md whitespace-normal break-words leading-tight">Converse pelo WhatsApp</span>
              </a>

            </div>


          </div>
        </div>

      </div>

      {/* --- SCROLL INDICATOR --- */}


    </section >
  )
}

export default Hero