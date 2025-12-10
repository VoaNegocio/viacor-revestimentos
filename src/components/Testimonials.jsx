import { useState, useEffect, useRef } from 'react'
import { FaStar } from 'react-icons/fa'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Claudia Pereto',
      location: 'São Paulo',
      rating: 5,
      text: 'Ótimo atendimento, diversidade de materiais com preços e condições de pagamento boa, entrega pontual.',
      project: 'Cliente Via Cor',
      avatar: '/avatars/claudiapereto-img-avatar1.png'
    },
    {
      id: 2,
      name: 'Sayuri Fukuoka',
      location: 'São Paulo',
      rating: 5,
      text: 'Atenciosos e prestativos. Oferecem boas condições de pagamento, entregam no prazo e o pós venda é realmente acima da média. Recomendo muito!',
      project: 'Cliente Via Cor',
      avatar: '/avatars/sayuri-fukuoka-img-avatar1.png'
    },
    {
      id: 3,
      name: 'Elcio Nogueira',
      location: 'São Paulo',
      rating: 5,
      text: 'Esta já é a terceira compra com a Via Cor, e SEMPRE um excelente atendimento ! O custo benefício tambem é muito vantajoso! Pessoas muito prestativas e compreensivas. Recomendo muito!',
      project: 'Cliente Via Cor',
      avatar: '/avatars/elcio-nogueira-img-avatar1.png'
    },
    {
      id: 4,
      name: 'Monica Estellita',
      location: 'São Paulo',
      rating: 5,
      text: 'Segunda obra que faço é claro que na Via Cor , um time especializado que nos dá todo suporte e produtos de alta qualidade! Sem dor de cabeça!! Sem dúvidas minha botique favorita!!!',
      project: 'Cliente Via Cor',
      avatar: '/avatars/monica-estellita-img-avatar1.png'
    },
    {
      id: 5,
      name: 'Fernanda Cardoso',
      location: 'São Paulo',
      rating: 5,
      text: 'Atendimento excepcional e material de excelentíssima qualidade 🫶🏼',
      project: 'Cliente Via Cor',
      avatar: '/avatars/fernanda-cardoso-img-avatar1.png'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const cardRefs = useRef([])

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

  // Função para obter iniciais do nome
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 bg-[#1E3A5F] relative overflow-hidden">
      {/* Background Premium - Múltiplas Camadas */}
      
      {/* Base Gradient - Profundidade */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#152238]"></div>
      
      {/* Gradiente Radial Superior - Iluminação */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)'
        }}
      ></div>
      
      {/* Gradiente Inferior - Profundidade */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0F1A2E] via-transparent to-transparent"></div>
      
      {/* Gradientes Laterais - Dimensão */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-[#1E3A5F] via-[#1E3A5F]/80 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#1E3A5F] via-[#1E3A5F]/80 to-transparent"></div>
      
      {/* Padrão Geométrico Diagonal - Premium */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 60px),
            repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255,255,255,0.08) 30px, rgba(255,255,255,0.08) 60px)
          `,
          backgroundSize: '120px 120px'
        }}
      ></div>
      
      {/* Padrão de Pontos - Textura Sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Overlay de Brilho Sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E3A5F]/20"></div>
      
      {/* Borda Superior Sutil */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Efeito de Luz Lateral Esquerda */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-1/2"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 0% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)'
        }}
      ></div>
      
      {/* Efeito de Luz Lateral Direita */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-1/2"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 100% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6 font-serif">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Escolher a Via Cor é ter segurança do início ao fim do projeto.
          </p>
        </div>

        {/* Carrossel Horizontal Premium */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-4 md:gap-6 lg:gap-8 min-w-max">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  data-index={index}
                  className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[420px]"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-white/10 transition-all duration-300 h-full flex flex-col group hover:scale-[1.02] hover:border-white/30">
                    {/* Header do Card */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Avatar */}
                      {testimonial.avatar ? (
                        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-[#C0392B]/40">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#C0392B]/30 to-[#C0392B]/20 border border-[#C0392B]/40 flex items-center justify-center text-white font-bold text-lg">
                          {getInitials(testimonial.name)}
                        </div>
                      )}
                      
                      {/* Nome e Localização */}
                      <div className="flex-grow">
                        <h3 className="!text-white font-semibold text-lg mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-2">
                          {testimonial.location}
                        </p>
                        
                        {/* Estrelas */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className="text-[#C0392B] text-sm" 
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Texto do Depoimento */}
                    <div className="flex-grow mb-4">
                      <p className="text-white/90 leading-relaxed text-base md:text-lg italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Projeto */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/60 text-xs md:text-sm font-medium">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots de Navegação */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-8 h-2 bg-[#C0392B]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

