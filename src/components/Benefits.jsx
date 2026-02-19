import { useState, useEffect, useRef } from 'react'
import { FaImages } from 'react-icons/fa'

function Benefits() {


  const showroomImages = [
    { src: "/fotos/showroom1.webp", alt: "Showroom Via Cor: Experiência sensorial completa" },
    { src: "/fotos/showroom2.webp", alt: "Ambientações reais para inspirar seu projeto" },
    { src: "/fotos/showroom3.webp", alt: "Variedade de texturas e acabamentos premium" },
    { src: "/fotos/showroom4.webp", alt: "Atendimento consultivo e personalizado" },
    { src: "/fotos/showroom5.webp", alt: "O melhor do design mundial em um só lugar" }
  ]

  const showroomRef = useRef(null)
  const [activeShowroomIndex, setActiveShowroomIndex] = useState(0)

  // Helper para observer
  const setupObserver = (ref, setActive) => {
    const container = ref.current
    if (!container) return

    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: [0.5, 0.6, 0.7, 0.8, 0.9]
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const index = parseInt(entry.target.dataset.index)
          setActive(index)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const cards = container.querySelectorAll('[data-index]')

    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }

  useEffect(() => {
    const cleanupShowroom = setupObserver(showroomRef, setActiveShowroomIndex)

    return () => {
      if (cleanupShowroom) cleanupShowroom()
    }
  }, [])

  // Helper para scroll
  const scrollToIndex = (ref, index) => {
    const container = ref.current
    if (!container) return

    const cards = container.querySelectorAll('[data-index]')
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <section id="beneficios" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F8FAFC]">

      {/* --- BACKGROUND PREMIUM --- */}
      <div className="absolute inset-0 bg-[#F8FAFC]"></div>

      {/* Grid Arquitetônico */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: `
            linear-gradient(#E2E8F0 1px, transparent 1px), 
            linear-gradient(to right, #E2E8F0 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Iluminação */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white rounded-full blur-[100px] opacity-80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.6)_100%)]"></div>


      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* SHOWROOM (MANTIDO) */}

        {/* 2. CARROSSEL DE SHOWROOM (FOTOS) */}
        <div>
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-full mb-4 shadow-sm">
              <FaImages className="text-[#C0392B]" />
              <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">Visite nosso espaço</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 font-serif">
              Conheça nosso Showroom Sensorial
            </h3>
          </div>

          <div className="relative">
            <div
              ref={showroomRef}
              className="overflow-x-auto scrollbar-hide pb-12 -mx-4 px-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex gap-4 md:gap-6 min-w-max pl-4 md:pl-0">
                {showroomImages.map((img, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className="flex-shrink-0 w-[300px] md:w-[450px] lg:w-[600px] aspect-[4/3]"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-white/20">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />

                      {/* Overlay Gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/90 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Texto no Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-serif text-xl font-medium drop-shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {img.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Showroom */}
            <div className="flex justify-center gap-2 -mt-4">
              {showroomImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(showroomRef, index)}
                  className={`transition-all duration-300 rounded-full ${activeShowroomIndex === index
                    ? 'w-8 h-2 bg-[#C0392B]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  aria-label={`Ver foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Benefits