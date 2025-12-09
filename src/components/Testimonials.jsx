import { useState, useEffect, useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Testimonials() {
  const reviews = [
    { id: 1, src: '/fotos/review1-viacor.png', alt: 'Depoimento Google Review 1' },
    { id: 2, src: '/fotos/review2-viacor.png', alt: 'Depoimento Google Review 2' },
    { id: 3, src: '/fotos/review3-viacor.png', alt: 'Depoimento Google Review 3' },
    { id: 4, src: '/fotos/review4-viacor.png', alt: 'Depoimento Google Review 4' }
  ]

  const [selectedReview, setSelectedReview] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const cardRefs = useRef([])

  const currentIndex = selectedReview ? reviews.findIndex(review => review.id === selectedReview.id) : -1

  const nextReview = () => {
    if (currentIndex < reviews.length - 1) {
      setSelectedReview(reviews[currentIndex + 1])
    } else {
      setSelectedReview(reviews[0])
    }
  }

  const prevReview = () => {
    if (currentIndex > 0) {
      setSelectedReview(reviews[currentIndex - 1])
    } else {
      setSelectedReview(reviews[reviews.length - 1])
    }
  }

  // Função para scrollar para um card específico
  const scrollToCard = (index) => {
    if (cardRefs.current[index] && scrollContainerRef.current) {
      const card = cardRefs.current[index]
      const container = scrollContainerRef.current
      const cardLeft = card.offsetLeft
      const cardWidth = card.offsetWidth
      const containerWidth = container.offsetWidth
      const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2)
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  // Detectar qual card está visível usando scroll e Intersection Observer
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Função para determinar qual card está mais visível
    const updateActiveIndex = () => {
      if (!container || cardRefs.current.length === 0) return

      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      cardRefs.current.forEach((card, index) => {
        if (!card) return
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distance = Math.abs(containerCenter - cardCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    // Listener de scroll para atualizar o índice ativo
    container.addEventListener('scroll', updateActiveIndex)
    
    // Atualizar inicialmente
    updateActiveIndex()

    // Intersection Observer como backup
    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: [0.3, 0.5, 0.7]
    }

    const observerCallback = (entries) => {
      // Encontrar o card com maior interseção
      let maxIntersection = 0
      let maxIndex = 0

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio
          const index = cardRefs.current.findIndex(ref => ref === entry.target)
          if (index !== -1) {
            maxIndex = index
          }
        }
      })

      if (maxIntersection > 0.3) {
        setActiveIndex(maxIndex)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      container.removeEventListener('scroll', updateActiveIndex)
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  // Fechar modal com ESC e bloquear scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedReview) {
        setSelectedReview(null)
      }
    }
    
    if (selectedReview) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedReview])

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Escolher a Via Cor é ter segurança do início ao fim do projeto.
          </p>
        </div>

        {/* Carrossel Horizontal de Reviews do Google */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          >
            <div className="flex gap-4 md:gap-6 lg:gap-8 min-w-max">
              {reviews.map((review, index) => (
                <div 
                  key={review.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-gray-800/60 backdrop-blur-xl border border-gray-600/40 rounded-xl p-4 md:p-6 shadow-2xl hover:shadow-gray-900/60 transition-all duration-300 overflow-hidden cursor-pointer group transform hover:scale-105 flex-shrink-0 w-[280px] md:w-[350px] lg:w-[400px]"
                  onClick={() => setSelectedReview(review)}
                >
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots de Navegação */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-8 h-3 bg-[#C0392B]'
                    : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Modal para visualização ampliada */}
        {selectedReview && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedReview(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-[#C0392B] transition-colors z-10"
                aria-label="Fechar"
              >
                <FaTimes />
              </button>

              {/* Botão Anterior */}
              {reviews.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevReview()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  aria-label="Review anterior"
                >
                  <FaChevronLeft />
                </button>
              )}

              {/* Imagem do Review */}
              <img
                src={selectedReview.src}
                alt={selectedReview.alt}
                className="w-full h-auto rounded-xl shadow-2xl"
              />

              {/* Botão Próximo */}
              {reviews.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextReview()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  aria-label="Próximo review"
                >
                  <FaChevronRight />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials

