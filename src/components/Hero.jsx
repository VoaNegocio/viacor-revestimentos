import { HiLocationMarker } from 'react-icons/hi'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/fotos/img1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay Premium - Gradiente Radial para Mobile */}
        <div 
          className="absolute inset-0 md:hidden"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)'
          }}
        ></div>
        <div className="hidden md:block absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-2xl">
          
          {/* Logo - Apenas Mobile - Premium com Glow */}
          <div className="md:hidden flex justify-center mb-8 hero-fade-in-up">
            <div className="hero-logo-premium bg-white/30 backdrop-blur-xl border border-white/40 rounded-xl p-3 shadow-2xl">
              <img 
                src="/viacor-logo-instagram .jpg" 
                alt="Via Cor Revestimentos" 
                className="h-16 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Glassmorphism Container para o Título - Premium Mobile */}
          <div className="hero-title-glow bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 md:p-8 mb-8 md:mb-6 shadow-2xl hero-fade-in-up-delay-1 md:bg-white/25 md:backdrop-blur-lg md:border-white/30">
            <div className="absolute inset-0 bg-black/10 rounded-2xl md:hidden"></div>
            <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl font-serif">
              Revestimentos de alto padrão para projetos exigentes
            </h1>
          </div>
          
          {/* Texto Descritivo - Glassmorphism Leve no Mobile */}
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-8 leading-relaxed drop-shadow-lg font-sans font-semibold hero-fade-in-up-delay-2 md:drop-shadow-lg">
            <span className="md:hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 inline-block">
              Um showroom sensorial de <strong className="text-white">450 m²</strong> com curadoria especializada, marcas exclusivas e atendimento consultivo para transformar ideias em ambientes únicos.
            </span>
            <span className="hidden md:inline">
              Um showroom sensorial de <strong className="text-white">450 m²</strong> com curadoria especializada, marcas exclusivas e atendimento consultivo para transformar ideias em ambientes únicos.
            </span>
          </p>

          {/* Badge de Localização - Premium com Glow */}
          <div className="flex justify-start mb-8 hero-fade-in-up-delay-3">
            <div className="hero-badge-premium bg-white/25 backdrop-blur-xl border border-white/35 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-xl inline-flex items-center gap-2 md:bg-white/20 md:backdrop-blur-lg md:border-white/30 md:shadow-lg">
              <HiLocationMarker className="hero-location-icon text-lg md:text-xl text-white drop-shadow-lg flex-shrink-0" />
              <span className="text-sm md:text-base text-white font-medium drop-shadow-md whitespace-nowrap">
                Zona Sul de São Paulo | Estacionamento no local
              </span>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="flex justify-center hero-fade-in-up-delay-4">
            <a 
              href="#contato"
              className="btn-premium inline-block text-white px-8 py-4 rounded-lg font-semibold text-lg relative z-10"
            >
              <span className="relative z-10">Agendar Visita ao Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero