import { useState, useEffect } from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { HiClipboardList } from 'react-icons/hi'
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

          {/* Título Principal */}
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

          {/* Carrossel de Marcas */}
          <div className="hero-fade-in-up-delay-2 w-full mb-6 md:mb-10 overflow-hidden max-w-[85vw] mx-auto md:max-w-none md:mx-0">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none animate-scroll-infinite py-2 md:py-4 gap-4 md:gap-10">
                {[...Array(6)].map((_, i) => (
                  <div key={`brand-group-${i}`} className="contents">
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs Hierarquizados */}
          <div className="hero-fade-in-up-delay-3 flex flex-col gap-3 md:gap-6 items-center md:items-start w-full max-w-[85vw] mx-auto md:mx-0">

            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 w-full md:w-auto">

              {/* Botão PRINCIPAL: Catálogo (sólido verde, maior) */}
              <a
                href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de solicitar o catálogo completo."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium group relative inline-flex items-center justify-center w-full md:w-auto px-6 py-4 md:px-8 md:py-5 overflow-hidden font-bold text-white transition-all duration-300 rounded-xl shadow-lg text-center text-base md:text-lg"
              >
                <span className="relative z-10 flex items-center gap-2.5 tracking-wide drop-shadow-md">
                  <HiClipboardList className="text-xl md:text-2xl" />
                  Solicitar Catálogo
                </span>
              </a>

              {/* Botão SECUNDÁRIO: Ligar Agora (outline) */}
              <a
                href="tel:+5511940371530"
                className="group relative inline-flex items-center justify-center w-full md:w-auto px-5 py-3 md:px-6 md:py-4 font-semibold text-white transition-all duration-300 rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center text-sm md:text-base"
              >
                <span className="flex items-center gap-2 tracking-wide">
                  <FaPhoneAlt className="text-sm md:text-base" />
                  Ligar agora
                </span>
              </a>

              {/* Botão SECUNDÁRIO: WhatsApp (outline) */}
              <a
                href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de mais informações sobre revestimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full md:w-auto px-5 py-3 md:px-6 md:py-4 font-semibold text-white transition-all duration-300 rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center text-sm md:text-base"
              >
                <span className="flex items-center gap-2 tracking-wide">
                  <FaWhatsapp className="text-lg" />
                  Converse pelo WhatsApp
                </span>
              </a>
            </div>

            {/* Stats de Autoridade */}
            <div className="hero-fade-in-up-delay-4 flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-0 mt-2 md:mt-4 w-full">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/15">
                <span className="text-[#10B981] font-bold text-lg md:text-xl">40+</span>
                <span className="text-white/70 text-xs md:text-sm font-medium">anos de experiência</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20 mx-4"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/15">
                <span className="text-[#10B981] font-bold text-lg md:text-xl">450m²</span>
                <span className="text-white/70 text-xs md:text-sm font-medium">de Showroom</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20 mx-4"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/15">
                <span className="text-[#10B981] font-bold text-lg md:text-xl">🇧🇷</span>
                <span className="text-white/70 text-xs md:text-sm font-medium">Atendimento Nacional</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero