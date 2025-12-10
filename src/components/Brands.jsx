import { useState, useEffect, useRef } from 'react'
import { MdBuild } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

function Brands() {
  const brands = [
    { name: 'Portinari', logo: '/marcas/portinari-logo.svg' },
    { name: 'Castellato', logo: '/marcas/castelato-logo3.png' },
    { name: 'Eliane', logo: '/marcas/eliane-logo.png' },
    { name: 'Atlas', logo: '/marcas/atlas-logo.png' }
  ]

  // Array de imagens dos projetos (apenas as 8 imagens disponíveis)
  const projectImages = [
    { id: 1, src: '/fotos/img1.jpg', alt: 'Projeto Via Cor Revestimentos 1' },
    { id: 2, src: '/fotos/img2.jpg', alt: 'Projeto Via Cor Revestimentos 2' },
    { id: 3, src: '/fotos/img3.JPG', alt: 'Projeto Via Cor Revestimentos 3' },
    { id: 4, src: '/fotos/img4.jpg', alt: 'Projeto Via Cor Revestimentos 4' },
    { id: 5, src: '/fotos/img5.jpg', alt: 'Projeto Via Cor Revestimentos 5' },
    { id: 6, src: '/fotos/img6.jpg', alt: 'Projeto Via Cor Revestimentos 6' },
    { id: 7, src: '/fotos/img7.jpg', alt: 'Projeto Via Cor Revestimentos 7' },
    { id: 8, src: '/fotos/img8.jpg', alt: 'Projeto Via Cor Revestimentos 8' }
  ]

  // Estados e Refs
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)
  const mobileScrollRef = useRef(null)

  // Cálculos auxiliares
  const currentIndex = selectedImage ? projectImages.findIndex(img => img.id === selectedImage.id) : -1
  const totalMobileGroups = Math.ceil(projectImages.length / 4)

  // Funções de Navegação do Modal
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

  // Função para lidar com o scroll no mobile e atualizar os dots
  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const { scrollLeft, clientWidth } = mobileScrollRef.current
      const newIndex = Math.round(scrollLeft / clientWidth)
      setActiveMobileIndex(newIndex)
    }
  }

  // Função para clicar no dot e ir para o grupo
  const scrollToGroup = (index) => {
    if (mobileScrollRef.current) {
      const width = mobileScrollRef.current.clientWidth
      mobileScrollRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      })
    }
  }

  // Efeitos: Teclado (ESC e Setas) e Bloqueio de Scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return

      switch (e.key) {
        case 'Escape':
          setSelectedImage(null)
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
        default:
          break
      }
    }
    
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage, currentIndex]) // Dependências atualizadas para capturar o índice correto

  return (
    <section id="marcas" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* --- Background Premium Cinza --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-transparent"></div>
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 30%, transparent 70%)' }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-200/30 via-transparent to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 25px, rgb(100, 116, 139) 25px, rgb(100, 116, 139) 50px), repeating-linear-gradient(-45deg, transparent, transparent 25px, rgb(148, 163, 184) 25px, rgb(148, 163, 184) 50px)`,
          backgroundSize: '80px 80px'
        }}
      ></div>
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100, 116, 139) 0.5px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      ></div>
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-gray-200/20 via-gray-200/10 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-slate-200/20 via-slate-200/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

      {/* --- Conteúdo Principal --- */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header da Seção */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-serif">
              Trabalhamos com quem dita tendência em acabamentos de alto padrão
            </h2>
            
            {/* Logos das Marcas - Desktop */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center h-16 md:h-20 px-4 py-2">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="flex items-center justify-center h-16 md:h-20 px-4 py-2">
                <span className="text-base md:text-lg font-semibold text-gray-700">
                  + outras 20 marcas selecionadas
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-700 mb-8 md:mb-12">
              <MdBuild className="text-2xl text-gray-600" />
              <p className="text-base md:text-lg">
                Garantia de sofisticação, durabilidade e excelência estética para seu projeto.
              </p>
            </div>
          </div>

          {/* Logos das Marcas - Mobile (Loop Infinito) */}
          <div className="md:hidden mb-8 overflow-hidden">
            <div className="flex gap-6 animate-scroll-infinite">
              {[...brands, ...brands].map((brand, index) => (
                <div key={`brand-${index}`} className="flex items-center justify-center h-14 px-3 py-2 flex-shrink-0">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
               <div className="flex items-center justify-center h-14 px-3 py-2 flex-shrink-0">
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                  + outras 20 marcas
                </span>
              </div>
            </div>
          </div>

          {/* --- Galeria de Projetos --- */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center font-serif">
              Projetos Realizados
            </h3>
            
            {/* Desktop: Grid Normal */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {projectImages.map((image) => (
                <div
                  key={image.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalhes do projeto ${image.id}`}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] aspect-square focus:outline-none focus:ring-4 focus:ring-gray-400/30"
                  onClick={() => setSelectedImage(image)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedImage(image)}
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

            {/* Mobile: Carrossel Horizontal com Grid 2x2 + Dots */}
            <div className="md:hidden">
              <div 
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                <div className="flex gap-4 min-w-max">
                  {/* Agrupa imagens em blocos de 4 (2x2) */}
                  {Array.from({ length: totalMobileGroups }, (_, groupIndex) => {
                    const startIndex = groupIndex * 4
                    const groupImages = projectImages.slice(startIndex, startIndex + 4)
                    
                    return (
                      <div
                        key={groupIndex}
                        className="flex-shrink-0 w-[calc(100vw-2rem)]"
                        style={{ scrollSnapAlign: 'start' }}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {groupImages.map((image) => (
                            <div
                              key={image.id}
                              role="button"
                              tabIndex={0}
                              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md active:scale-95 transition-all duration-300 aspect-square"
                              onClick={() => setSelectedImage(image)}
                              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedImage(image)}
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-active:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-active:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-xs font-semibold drop-shadow-lg">Ver projeto</p>
                              </div>
                            </div>
                          ))}
                          {/* Preencher espaços vazios */}
                          {groupImages.length < 4 && Array.from({ length: 4 - groupImages.length }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square"></div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Dots de Navegação Mobile */}
              {totalMobileGroups > 1 && (
                <div className="flex justify-center items-center gap-2 mt-2">
                  {Array.from({ length: totalMobileGroups }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToGroup(index)}
                      className={`transition-all duration-300 rounded-full ${
                        activeMobileIndex === index
                          ? 'w-8 h-2 bg-gray-600'
                          : 'w-2 h-2 bg-gray-400/40 hover:bg-gray-500/60'
                      }`}
                      aria-label={`Ir para grupo de fotos ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Modal (Lightbox) */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-[#C0392B] transition-colors z-10 focus:outline-none"
                  aria-label="Fechar"
                >
                  <FaTimes />
                </button>

                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage() }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 focus:outline-none hover:scale-110"
                      aria-label="Imagem anterior"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage() }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 focus:outline-none hover:scale-110"
                      aria-label="Próxima imagem"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}

                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Brands