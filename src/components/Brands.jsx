import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

function Brands() {
  const brands = [
    { name: 'Portinari', logo: '/marcas/portinari-logo.svg' },
    { name: 'Castellato', logo: '/marcas/castelato-logo3.png' },
    { name: 'Eliane', logo: '/marcas/eliane-logo.png' },
    { name: 'Atlas', logo: '/marcas/atlas-logo.png' }
  ]

  const projectImages = [
    { id: 1, src: '/fotos/img1.jpg', alt: 'Projeto Via Cor Revestimentos 1' },
    { id: 2, src: '/fotos/img2.jpg', alt: 'Projeto Via Cor Revestimentos 2' },
    { id: 3, src: '/fotos/img3.jpg', alt: 'Projeto Via Cor Revestimentos 3' },
    { id: 4, src: '/fotos/img4.jpg', alt: 'Projeto Via Cor Revestimentos 4' },
    { id: 5, src: '/fotos/img5.jpg', alt: 'Projeto Via Cor Revestimentos 5' },
    { id: 6, src: '/fotos/img6.jpg', alt: 'Projeto Via Cor Revestimentos 6' },
    { id: 7, src: '/fotos/img7.jpg', alt: 'Projeto Via Cor Revestimentos 7' },
    { id: 8, src: '/fotos/img8.jpg', alt: 'Projeto Via Cor Revestimentos 8' }
  ]

  const [selectedImage, setSelectedImage] = useState(null)
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)
  const mobileScrollRef = useRef(null)

  const currentIndex = selectedImage ? projectImages.findIndex(img => img.id === selectedImage.id) : -1
  const totalMobileGroups = Math.ceil(projectImages.length / 4)

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

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const { scrollLeft, clientWidth } = mobileScrollRef.current
      const newIndex = Math.round(scrollLeft / clientWidth)
      setActiveMobileIndex(newIndex)
    }
  }

  const scrollToGroup = (index) => {
    if (mobileScrollRef.current) {
      const width = mobileScrollRef.current.clientWidth
      mobileScrollRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      switch (e.key) {
        case 'Escape': setSelectedImage(null); break
        case 'ArrowRight': nextImage(); break
        case 'ArrowLeft': prevImage(); break
        default: break
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
  }, [selectedImage, currentIndex])

  return (
    <section id="marcas" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F8FAFC]">
      
      {/* --- BACKGROUND PREMIUM (Arquitetura & Luz) --- */}
      
      {/* 1. Base Clara Sofisticada (Slate-50) */}
      <div className="absolute inset-0 bg-[#F8FAFC]"></div>

      {/* 2. Grid Arquitetônico (Efeito Blueprint Minimalista) 
          Substitui as linhas diagonais por um grid reto e limpo */}
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

      {/* 3. Iluminação "Showroom" (Spotlight Central)
          Cria um ponto de luz suave vindo de cima, como se iluminasse os produtos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-white rounded-full blur-[120px] opacity-70 pointer-events-none"></div>

      {/* 4. Vinheta Suave (Foco no Centro) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)]"></div>
      
      {/* 5. Detalhe de Profundidade no Rodapé (Fade out) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent"></div>


      {/* --- CONTEÚDO PRINCIPAL (Z-Index Ajustado) --- */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 font-serif tracking-tight">
              Trabalhamos com quem dita tendência em acabamentos de alto padrão
            </h2>
            
            {/* Logos das Marcas - Desktop */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center h-16 md:h-20 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="flex items-center justify-center h-16 md:h-20 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-100">
                <span className="text-base md:text-lg font-semibold text-slate-600">
                  + outras 20 marcas
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-600 mb-8 md:mb-12">
              <p className="text-base md:text-lg font-medium">
                Garantia de sofisticação, durabilidade e excelência estética.
              </p>
            </div>
          </div>

          {/* Logos das Marcas - Mobile */}
          <div className="md:hidden mb-12 overflow-hidden">
            <div className="flex gap-4 animate-scroll-infinite py-2">
              {[...brands, ...brands].map((brand, index) => (
                <div key={`brand-${index}`} className="flex items-center justify-center h-16 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm flex-shrink-0">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- Galeria de Projetos --- */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center font-serif">
              Projetos Realizados
            </h3>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {projectImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square border border-white/20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay Premium: Gradiente escuro apenas na base para texto legível */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm font-medium tracking-wide border-l-2 border-[#C0392B] pl-3">
                      Ver detalhes do projeto
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Grid/Carousel */}
            <div className="md:hidden">
              <div 
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                <div className="flex gap-4 min-w-max">
                  {Array.from({ length: totalMobileGroups }, (_, groupIndex) => {
                    const startIndex = groupIndex * 4
                    const groupImages = projectImages.slice(startIndex, startIndex + 4)
                    return (
                      <div key={groupIndex} className="flex-shrink-0 w-[calc(100vw-2rem)]" style={{ scrollSnapAlign: 'start' }}>
                        <div className="grid grid-cols-2 gap-3">
                          {groupImages.map((image) => (
                            <div
                              key={image.id}
                              onClick={() => setSelectedImage(image)}
                              className="relative group overflow-hidden rounded-lg shadow-md aspect-square"
                            >
                              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                          ))}
                          {groupImages.length < 4 && Array.from({ length: 4 - groupImages.length }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square"></div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* Dots */}
              {totalMobileGroups > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                  {Array.from({ length: totalMobileGroups }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToGroup(index)}
                      className={`transition-all duration-300 rounded-full ${
                        activeMobileIndex === index ? 'w-6 h-1.5 bg-slate-800' : 'w-1.5 h-1.5 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Modal (Lightbox) */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 transition-opacity duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors text-2xl p-2"
                >
                  <FaTimes />
                </button>
                {projectImages.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); prevImage() }} className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-colors"><FaChevronLeft /></button>
                    <button onClick={(e) => { e.stopPropagation(); nextImage() }} className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-colors"><FaChevronRight /></button>
                  </>
                )}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
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