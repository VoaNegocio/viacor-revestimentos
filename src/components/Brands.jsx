import { useState, useEffect } from 'react'
import { MdBuild } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

function Brands() {
  const brands = [
    { name: 'Portinari', logo: '/marcas/portinari-logo.svg' },
    { name: 'Castellato', logo: '/marcas/castelato-logo3.png' },
    { name: 'Eliane', logo: '/marcas/eliane-logo.png' },
    { name: 'Atlas', logo: '/marcas/atlas-logo.png' }
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
    <section id="marcas" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background Premium - Branding Via Cor */}
      
      {/* Base: Gradiente multicamada sofisticado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#1E3A5F]/8"></div>
      
      {/* Camada 1: Gradiente diagonal premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1E3A5F]/3 to-transparent"></div>
      
      {/* Camada 2: Gradiente radial superior (efeito de luz) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 bg-gradient-radial from-white/50 via-white/20 to-transparent"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'
        }}
      ></div>
      
      {/* Camada 3: Gradiente inferior sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1E3A5F]/5 via-transparent to-transparent"></div>
      
      {/* Padrão geométrico refinado inspirado nos mosaicos - mais sutil e elegante */}
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
      
      {/* Textura pontilhada sutil (inspirada em texturas de revestimentos) */}
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
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Trabalhamos com quem dita tendência em acabamentos de alto padrão
          </h2>
          
          {/* Logos das Marcas - Desktop: antes da galeria */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-16 md:h-20 px-4 py-2"
              >
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            ))}
            <div className="flex items-center justify-center h-16 md:h-20 px-4 py-2">
              <span className="text-base md:text-lg font-semibold text-[#1E3A5F]">
                + outras 20 marcas selecionadas
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8 md:mb-12">
            <MdBuild className="text-2xl text-[#1E3A5F]" />
            <p className="text-base md:text-lg">
              Garantia de sofisticação, durabilidade e excelência estética para seu projeto.
            </p>
          </div>
        </div>

        {/* Logos das Marcas - Mobile: acima da galeria */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-4 mb-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-14 px-3 py-2"
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
          <div className="flex items-center justify-center h-14 px-3 py-2">
            <span className="text-sm font-semibold text-[#1E3A5F]">
              + outras 20 marcas
            </span>
          </div>
        </div>

        {/* Galeria de Projetos Realizados */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-8 text-center font-serif">
            Projetos Realizados
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {projectImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg md:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs md:text-sm font-semibold drop-shadow-lg">Ver projeto</p>
                </div>
              </div>
            ))}
          </div>
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
      </div>
    </section>
  )
}

export default Brands

