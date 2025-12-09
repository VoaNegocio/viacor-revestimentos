import { useState, useEffect } from 'react'
import { MdBuild } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

function Brands() {
  const brands = [
    { name: 'Portinari' },
    { name: 'Castellato' },
    { name: 'Eliane' },
    { name: 'Atlas' },
    { name: '+ outras 20 marcas selecionadas' }
  ]

  // Array de imagens dos projetos
  const projectImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/fotos/img${i + 1}.jpg`,
    alt: `Projeto Via Cor Revestimentos ${i + 1}`
  }))

  const [selectedImage, setSelectedImage] = useState(null)

  const currentIndex = selectedImage ? projectImages.findIndex(img => img.id === selectedImage.id) : -1

  const nextImage = () => {
    if (currentIndex < projectImages.length - 1) {
      setSelectedImage(projectImages[currentIndex + 1])
    } else {
      setSelectedImage(projectImages[0])
    }
  }

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(projectImages[currentIndex - 1])
    } else {
      setSelectedImage(projectImages[projectImages.length - 1])
    }
  }

  // Fechar modal com ESC e bloquear scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null)
      }
    }
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <section id="marcas" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Trabalhamos com quem dita tendência em acabamentos de alto padrão
          </h2>
          
          {/* Lista de Marcas - Desktop: antes da galeria, Mobile: depois da galeria */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
            {brands.map((brand, index) => (
              <span 
                key={index}
                className="text-lg md:text-xl font-semibold text-[#1E3A5F] px-4 py-2 border-b-2 border-[#C0392B]"
              >
                {brand.name}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8 md:mb-12">
            <MdBuild className="text-2xl text-[#1E3A5F]" />
            <p className="text-base md:text-lg">
              Garantia de sofisticação, durabilidade e excelência estética para seu projeto.
            </p>
          </div>
        </div>

        {/* Galeria de Projetos Realizados */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-8 text-center font-serif">
            Projetos Realizados
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {projectImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">Ver projeto</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de Marcas - Mobile: aparece depois da galeria */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-4 mb-8">
          {brands.map((brand, index) => (
            <span 
              key={index}
              className="text-lg font-semibold text-[#1E3A5F] px-4 py-2 border-b-2 border-[#C0392B]"
            >
              {brand.name}
            </span>
          ))}
        </div>

        {/* Modal para visualização ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-[#C0392B] transition-colors z-10"
                aria-label="Fechar"
              >
                <FaTimes />
              </button>

              {/* Botão Anterior */}
              {projectImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  aria-label="Imagem anterior"
                >
                  <FaChevronLeft />
                </button>
              )}

              {/* Imagem */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-xl shadow-2xl"
              />

              {/* Botão Próximo */}
              {projectImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  aria-label="Próxima imagem"
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

export default Brands

