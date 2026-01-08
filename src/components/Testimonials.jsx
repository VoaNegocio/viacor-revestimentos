import { useState, useEffect, useRef } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Claudia Pereto',
      location: 'São Paulo',
      rating: 5,
      text: 'Ótimo atendimento, diversidade de materiais com preços e condições de pagamento boa, entrega pontual.',
      project: 'Cliente Via Cor',
      avatar: '/avatars/claudiapereto-img-avatar1.webp'
    },
    {
      id: 2,
      name: 'Sayuri Fukuoka',
      location: 'São Paulo',
      rating: 5,
      text: 'Atenciosos e prestativos. Oferecem boas condições de pagamento, entregam no prazo e o pós venda é realmente acima da média. Recomendo muito!',
      project: 'Cliente Via Cor',
      avatar: '/avatars/sayuri-fukuoka-img-avatar1.webp'
    },
    {
      id: 3,
      name: 'Elcio Nogueira',
      location: 'São Paulo',
      rating: 5,
      text: 'Esta já é a terceira compra com a Via Cor, e SEMPRE um excelente atendimento ! O custo benefício tambem é muito vantajoso! Pessoas muito prestativas e compreensivas. Recomendo muito!',
      project: 'Cliente Via Cor',
      avatar: '/avatars/elcio-nogueira-img-avatar1.webp'
    },
    {
      id: 4,
      name: 'Monica Estellita',
      location: 'São Paulo',
      rating: 5,
      text: 'Segunda obra que faço é claro que na Via Cor , um time especializado que nos dá todo suporte e produtos de alta qualidade! Sem dor de cabeça!! Sem dúvidas minha botique favorita!!!',
      project: 'Cliente Via Cor',
      avatar: '/avatars/monica-estellita-img-avatar1.webp'
    },
    {
      id: 5,
      name: 'Fernanda Cardoso',
      location: 'São Paulo',
      rating: 5,
      text: 'Atendimento excepcional e material de excelentíssima qualidade 🫶🏼',
      project: 'Cliente Via Cor',
      avatar: '/avatars/fernanda-cardoso-img-avatar1.webp'
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

  // Detectar qual card está visível
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

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

    container.addEventListener('scroll', updateActiveIndex)
    updateActiveIndex()

    return () => {
      container.removeEventListener('scroll', updateActiveIndex)
    }
  }, [])

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 bg-[#1E3A5F] relative overflow-hidden">

      {/* --- BACKGROUND DARK ARCHITECTURAL --- */}

      {/* 1. Base Profunda */}
      <div className="absolute inset-0 bg-[#1E3A5F]"></div>

      {/* 2. Grid Arquitetônico Noturno (Linhas finas e sutis) */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), 
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 3. Iluminação "Moonlight" (Luz fria no topo para destacar o título) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#3498DB] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      {/* 4. Vinheta para focar no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1E3A5F_90%)]"></div>

      {/* --- CONTEÚDO --- */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6 font-serif">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light tracking-wide">
            Escolher a Via Cor é ter segurança do início ao fim do projeto.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"
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
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300 h-full flex flex-col group">

                    {/* Ícone de Aspas Decorativo (Marca d'água) */}
                    <div className="absolute top-6 right-6 text-white/5 text-6xl font-serif pointer-events-none group-hover:text-white/10 transition-colors">
                      <FaQuoteLeft />
                    </div>

                    {/* Header do Card */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      {/* Avatar com borda brilhante suave */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-[#C0392B] to-transparent rounded-full opacity-70 blur-sm"></div>
                        {testimonial.avatar ? (
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="relative w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg">
                            {getInitials(testimonial.name)}
                          </div>
                        )}
                      </div>

                      <div className="flex-grow">
                        <h3 className="!text-white font-semibold text-lg tracking-wide">
                          {testimonial.name}
                        </h3>
                        <p className="text-white/50 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Estrelas */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#C0392B] text-sm drop-shadow-lg" />
                      ))}
                    </div>

                    {/* Texto */}
                    <div className="flex-grow mb-6 relative z-10">
                      <p className="text-white/90 leading-relaxed text-lg font-light italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Rodapé do Card */}
                    <div className="pt-4 border-t border-white/10 relative z-10 flex items-center justify-between">
                      <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
                        {testimonial.project}
                      </p>
                      {/* Badge Google */}
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="text-white/70 text-xs font-semibold">Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots de Navegação - Versão Dark */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`transition-all duration-300 rounded-full ${activeIndex === index
                    ? 'w-8 h-2 bg-[#C0392B] shadow-[0_0_10px_rgba(192,57,43,0.5)]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
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