import { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

function GalleryModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
  onSelectImage
}) {
  // Fechar modal com tecla ESC e controle de scroll
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset'
      return
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden' // Previne scroll
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Navegação com setas do teclado
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        onNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onNext, onPrev])

  // Verificações de segurança
  if (!isOpen) {
    return null
  }

  if (!images || !Array.isArray(images) || images.length === 0) {
    return null
  }

  // Garantir que currentIndex está dentro dos limites
  const safeIndex = Math.max(0, Math.min(currentIndex, images.length - 1))
  const currentImage = images[safeIndex]

  if (!currentImage) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 transition-opacity duration-300"
      onClick={onClose} // Fecha ao clicar fora
    >
      <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors text-2xl p-2 z-10"
          aria-label="Fechar galeria"
        >
          <FaTimes />
        </button>

        {/* Contador de Imagens */}
        <div className="absolute -top-12 left-0 text-white/80 text-sm font-medium">
          {safeIndex + 1} / {images.length}
        </div>

        {/* Botões de Navegação */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-colors z-10 bg-slate-900/50 rounded-full p-2 backdrop-blur-sm"
              aria-label="Imagem anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-colors z-10 bg-slate-900/50 rounded-full p-2 backdrop-blur-sm"
              aria-label="Próxima imagem"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Imagem Principal */}
        <img
          src={currentImage.src}
          alt={currentImage.alt || `Imagem ${safeIndex + 1}`}
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Indicadores (Dots) */}
        {images.length > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectImage(index)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === safeIndex
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryModal

