import { useState, useEffect } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Testimonials() {
  const reviews = [
    { id: 1, src: '/fotos/review1-viacor.png', alt: 'Depoimento Google Review 1' },
    { id: 2, src: '/fotos/review2-viacor.png', alt: 'Depoimento Google Review 2' },
    { id: 3, src: '/fotos/review3-viacor.png', alt: 'Depoimento Google Review 3' },
    { id: 4, src: '/fotos/review4-viacor.png', alt: 'Depoimento Google Review 4' }
  ]

  const [selectedReview, setSelectedReview] = useState(null)

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
    <section id="depoimentos" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Escolher a Via Cor é ter segurança do início ao fim do projeto.
          </p>
        </div>

        {/* Grid de Reviews do Google */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-gray-800/60 backdrop-blur-xl border border-gray-600/40 rounded-xl p-4 md:p-6 shadow-2xl hover:shadow-gray-900/60 transition-all duration-300 overflow-hidden cursor-pointer group transform hover:scale-105"
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

