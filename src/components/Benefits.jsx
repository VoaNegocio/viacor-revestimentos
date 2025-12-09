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
    <section id="beneficios" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background Premium - Branding Via Cor */}
      
      {/* Base: Gradiente multicamada sofisticado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#1E3A5F]/8"></div>
      
      {/* Camada 1: Gradiente diagonal premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1E3A5F]/3 to-transparent"></div>
      
      {/* Camada 2: Gradiente radial superior (efeito de luz) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'
        }}
      ></div>
      
      {/* Camada 3: Gradiente inferior sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1E3A5F]/5 via-transparent to-transparent"></div>
      
      {/* Padrão geométrico refinado inspirado nos mosaicos */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 25px, #1E3A5F 25px, #1E3A5F 50px),
            repeating-linear-gradient(-45deg, transparent, transparent 25px, #C0392B 25px, #C0392B 50px)
          `,
          backgroundSize: '80px 80px'
        }}
      ></div>
      
      {/* Textura pontilhada sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A5F 0.5px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
      
      {/* Efeito de brilho lateral premium */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-[#1E3A5F]/8 via-[#1E3A5F]/3 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#C0392B]/8 via-[#C0392B]/3 to-transparent"></div>
      
      {/* Overlay de profundidade sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
      
      {/* Efeito de borda superior sutil */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E3A5F]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Ambientes com identidade, sofisticação e acabamento impecável
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Há mais de <strong className="text-[#1E3A5F]">16 anos</strong>, ajudamos a transformar projetos em referências de bom gosto.
          </p>
        </div>

        {/* Carrossel Horizontal Premium */}
        <div className="relative mb-12">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
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
                  <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col group hover:scale-[1.02] hover:border-[#1E3A5F]/30 hover:bg-white/90">
                    {/* Ícone Premium */}
                    <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#C0392B]/20 to-[#C0392B]/10 border border-[#C0392B]/30 group-hover:from-[#C0392B]/30 group-hover:to-[#C0392B]/20 transition-all duration-300">
                      <FaCheck className="text-xl text-[#C0392B]" />
                    </div>
                    
                    {/* Texto */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed flex-grow">
                      {benefit}
                    </p>
                    
                    {/* Decoração sutil */}
                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#1E3A5F]/20 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-8 h-2 bg-[#1E3A5F]/80'
                    : 'w-2 h-2 bg-[#1E3A5F]/30 hover:bg-[#1E3A5F]/50'
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

