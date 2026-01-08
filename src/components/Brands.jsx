import { useState, useEffect, useCallback } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import GalleryModal from './GalleryModal'

function Brands() {
  const brands = [
    { name: 'Portinari', logo: '/marcas/portinari-logo.svg' },
    { name: 'Castellato', logo: '/marcas/castelato-logo3.png' },
    { name: 'Eliane', logo: '/marcas/eliane-logo.png' },
    { name: 'Atlas', logo: '/marcas/atlas-logo.png' }
  ]

  // Imagens por marca - cada marca tem seu próprio conjunto de imagens
  const brandImages = {
    Portinari: [
      { src: '/fotos/img1.webp', alt: 'Projeto Portinari - Via Cor Revestimentos 1' },
      { src: '/fotos/img2.webp', alt: 'Projeto Portinari - Via Cor Revestimentos 2' },
      { src: '/fotos/img3.webp', alt: 'Projeto Portinari - Via Cor Revestimentos 3' },
    ],
    Castellato: [
      { src: '/fotos/img4.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 1' },
      { src: '/fotos/img5.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 2' },
      { src: '/fotos/img6.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 3' },
      { src: '/fotos/imgcastelato4.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 4' },
      { src: '/fotos/imgcastelato5.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 5' },
      { src: '/fotos/imgcastelato6.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 6' },
      { src: '/fotos/imgcastelato7.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 7' },
      { src: '/fotos/imgcastelato8.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 8' },
      { src: '/fotos/imgcastelato9.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 9' },
      { src: '/fotos/imgcastelato10.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 10' },
      { src: '/fotos/imgcastelato11.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 11' },
      { src: '/fotos/imgcastelato12.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 12' },
      { src: '/fotos/imgcastelato13.webp', alt: 'Projeto Castellato - Via Cor Revestimentos 13' },
    ],
    Eliane: [
      { src: '/fotos/img7.webp', alt: 'Projeto Eliane - Via Cor Revestimentos 1' },
      { src: '/fotos/img8.webp', alt: 'Projeto Eliane - Via Cor Revestimentos 2' },
      { src: '/fotos/img1.webp', alt: 'Projeto Eliane - Via Cor Revestimentos 3' },
    ],
    Atlas: [
      { src: '/fotos/img2.webp', alt: 'Projeto Atlas - Via Cor Revestimentos 1' },
      { src: '/fotos/img3.webp', alt: 'Projeto Atlas - Via Cor Revestimentos 2' },
      { src: '/fotos/img4.webp', alt: 'Projeto Atlas - Via Cor Revestimentos 3' },
    ]
  }

  const projectImages = [
    { id: 1, src: '/fotos/img1.webp', alt: 'Projeto Via Cor Revestimentos 1' },
    { id: 2, src: '/fotos/img2.webp', alt: 'Projeto Via Cor Revestimentos 2' },
    { id: 3, src: '/fotos/img3.webp', alt: 'Projeto Via Cor Revestimentos 3' },
    { id: 4, src: '/fotos/img4.webp', alt: 'Projeto Via Cor Revestimentos 4' },
    { id: 5, src: '/fotos/img5.webp', alt: 'Projeto Via Cor Revestimentos 5' },
    { id: 6, src: '/fotos/img6.webp', alt: 'Projeto Via Cor Revestimentos 6' },
    { id: 7, src: '/fotos/img7.webp', alt: 'Projeto Via Cor Revestimentos 7' },
    { id: 8, src: '/fotos/img8.webp', alt: 'Projeto Via Cor Revestimentos 8' }
  ]

  // Estados para galeria por marca
  const [selectedBrand, setSelectedBrand] = useState(null) // Marca selecionada (mostra sua galeria)
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false) // Controla se o modal está aberto
  const [brandModalIndex, setBrandModalIndex] = useState(0) // Índice da imagem no modal da marca

  // Estados para galeria geral de projetos (mantido para compatibilidade)
  const [selectedImage, setSelectedImage] = useState(null)

  // Duplicar marcas para o efeito de carrossel infinito (várias vezes para garantir fluidez em telas largas)
  // 4 marcas originais * 6 repetições = 24 itens no total
  const displayBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands]

  // Funções para seleção de marca e galeria
  const selectBrand = (brandName) => {
    if (selectedBrand === brandName) {
      setSelectedBrand(null) // Clicar na mesma marca desativa o filtro
    } else {
      setSelectedBrand(brandName)
    }
    setIsBrandModalOpen(false) // Fecha modal se estiver aberto
  }

  // Funções para modal de marcas
  const openBrandModal = (imageIndex) => {
    if (selectedBrand && brandImages[selectedBrand]) {
      setBrandModalIndex(imageIndex)
      setIsBrandModalOpen(true)
    }
  }

  const closeBrandModal = () => {
    setIsBrandModalOpen(false)
  }

  const nextBrandImage = () => {
    if (selectedBrand && brandImages[selectedBrand]) {
      setBrandModalIndex((prev) => (prev + 1) % brandImages[selectedBrand].length)
    }
  }

  const prevBrandImage = () => {
    if (selectedBrand && brandImages[selectedBrand]) {
      setBrandModalIndex((prev) => (prev - 1 + brandImages[selectedBrand].length) % brandImages[selectedBrand].length)
    }
  }

  const getSelectedBrandImages = () => {
    return selectedBrand ? brandImages[selectedBrand] || [] : []
  }

  const nextImage = useCallback(() => {
    setSelectedImage((current) => {
      const currentIdx = projectImages.findIndex(img => img.id === current?.id)
      if (currentIdx < projectImages.length - 1) {
        return projectImages[currentIdx + 1]
      } else {
        return projectImages[0]
      }
    })
  }, [projectImages])

  const prevImage = useCallback(() => {
    setSelectedImage((current) => {
      const currentIdx = projectImages.findIndex(img => img.id === current?.id)
      if (currentIdx > 0) {
        return projectImages[currentIdx - 1]
      } else {
        return projectImages[projectImages.length - 1]
      }
    })
  }, [projectImages])

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = 'unset'
      return
    }

    const handleKeyDown = (e) => {
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

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage, nextImage, prevImage])

  return (
    <section id="marcas" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F8FAFC]">

      {/* --- BACKGROUND PREMIUM (Arquitetura & Luz) --- */}
      <div className="absolute inset-0 bg-[#F8FAFC]"></div>
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-white rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent"></div>


      {/* --- CONTEÚDO PRINCIPAL (Z-Index Ajustado) --- */}
      <div className="relative z-10">
        <div className="max-w-full mx-auto">

          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 font-serif tracking-tight max-w-5xl mx-auto">
              Trabalhamos com quem dita tendência em acabamentos de alto padrão
            </h2>

            {/* INFINITE CAROUSEL - Substitui as versões estáticas desktop e mobile */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-8">
              <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll-infinite hover:[animation-play-state:paused] py-4">
                {displayBrands.map((brand, index) => (
                  <button
                    key={index}
                    onClick={() => selectBrand(brand.name)}
                    className={`relative flex-shrink-0 flex items-center justify-center h-20 md:h-24 px-8 py-3 mx-4 bg-white/60 backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-pointer group hover:scale-105 ${selectedBrand === brand.name
                      ? 'border-[#C0392B] shadow-md scale-105 bg-white'
                      : 'border-slate-100 shadow-sm hover:shadow-md hover:border-[#C0392B] hover:bg-white'
                      }`}
                    aria-label={`Ver projetos ${brand.name}`}
                  >
                    <img
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      className={`h-full w-auto object-contain transition-all duration-300 filter ${selectedBrand === brand.name
                        ? 'opacity-100 grayscale-0'
                        : 'opacity-70 group-hover:opacity-20 grayscale group-hover:grayscale-0'
                        }`}
                      loading="lazy"
                    />

                    {/* Indicador de Clique (Hover) */}
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-[#C0392B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap">
                        Ver Projetos
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Indicador Mobile - Toque para ver */}
            <div className="md:hidden text-center -mt-6 mb-8 animate-pulse">
              <span className="text-sm text-slate-500 font-medium flex items-center justify-center gap-2">
                👆 Toque na marca para ver projetos
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-600 mb-8 md:mb-12">
              <p className="text-base md:text-lg font-medium">
                Garantia de sofisticação, durabilidade e excelência estética.
              </p>
            </div>
          </div>

          {/* --- Galeria de Projetos por Marca --- */}
          <div className="mb-8 max-w-7xl mx-auto px-4">
            {selectedBrand && getSelectedBrandImages().length > 0 ? (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center font-serif">
                  Projetos {selectedBrand}
                </h3>

                {/* Desktop Grid - Fotos da Marca Selecionada */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                  {getSelectedBrandImages().map((image, index) => (
                    <div
                      key={index}
                      onClick={() => openBrandModal(index)}
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
              </>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center font-serif">
                  Projetos Realizados
                </h3>

                {/* Grid Geral (quando nenhuma marca está selecionada) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
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
              </>
            )}
          </div>

          {/* Modal de Galeria por Marca */}
          <GalleryModal
            isOpen={isBrandModalOpen}
            onClose={closeBrandModal}
            images={getSelectedBrandImages()}
            currentIndex={brandModalIndex}
            onNext={nextBrandImage}
            onPrev={prevBrandImage}
            onSelectImage={setBrandModalIndex}
          />

          {/* Modal (Lightbox) - Galeria Geral de Projetos */}
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