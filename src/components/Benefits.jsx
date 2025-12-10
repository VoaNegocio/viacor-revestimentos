import { useState, useEffect, useRef } from 'react'
import { FaCheck } from 'react-icons/fa'

function Benefits() {
  const benefits = [
    "Revestimentos exclusivos das marcas mais desejadas: Castellato, Portinari, Eliane, Atlas e mais.",
    "Consultoria completa do porcelanato à esquadria — com ou sem arquiteto.",
    "Showroom sensorial com ambientações reais e materiais para todos os estilos.",
    "Piso vinílico, pedras naturais, cimentícios, porcelanatos importados e nacionais.",
    "Projetos assinados em bairros como Chácara Flora, Morumbi e Moema."
  ]

  const scrollContainerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Detectar qual badge está mais visível durante o scroll
  useEffect(() => {
    const container = scrollContainerRef.current
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
          setActiveIndex(index)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const cards = container.querySelectorAll('[data-index]')
    
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  // Scroll suave ao clicar nos dots
  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current
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
      
      {/* --- BACKGROUND PREMIUM (Igual à seção Marcas) --- */}
      
      {/* 1. Base Clara Sofisticada */}
      <div className="absolute inset-0 bg-[#F8FAFC]"></div>

      {/* 2. Grid Arquitetônico (Blueprint) */}
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

      {/* 3. Iluminação "Showroom" (Luz Suave no Topo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white rounded-full blur-[100px] opacity-80 pointer-events-none"></div>

      {/* 4. Vinheta Suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.6)_100%)]"></div>

      
      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 font-serif">
            Ambientes com identidade, sofisticação e acabamento impecável
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Há mais de <strong className="text-[#1E3A5F]">16 anos</strong>, ajudamos a transformar projetos em referências de bom gosto.
          </p>
        </div>

        {/* Carrossel Horizontal Premium */}
        <div className="relative mb-12">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-4 md:gap-6 lg:gap-8 min-w-max">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  data-index={index}
                  className="flex-shrink-0 w-[280px] md:w-[350px] lg:w-[400px]"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group hover:-translate-y-2 hover:bg-white/90">
                    
                    {/* Ícone Premium com Glow sutil */}
                    <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <FaCheck className="text-xl text-[#C0392B] drop-shadow-sm" />
                    </div>
                    
                    {/* Texto */}
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed flex-grow font-medium">
                      {benefit}
                    </p>
                    
                    {/* Decoração sutil no rodapé do card */}
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#1E3A5F]/20 to-transparent rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots - Estilo Slate */}
          <div className="flex justify-center gap-2 mt-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-8 h-2 bg-[#1E3A5F]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para benefício ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits