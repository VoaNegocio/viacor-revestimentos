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
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-2xl">
          
          {/* Logo - Apenas Mobile */}
          <div className="md:hidden flex justify-center mb-6">
            {/* AQUI: Mudei para p-2 para ficar mais coladinho */}
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-2 shadow-2xl">
              <img 
                src="/viacor-logo-instagram .jpg" 
                alt="Via Cor Revestimentos" 
                className="h-16 object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Glassmorphism Container para o Título - Maior Contraste com Glow */}
          <div className="hero-title-glow bg-white/25 backdrop-blur-lg border border-white/30 rounded-2xl p-6 md:p-8 mb-6 shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl font-serif">
              Revestimentos de alto padrão para projetos exigentes
            </h1>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg font-sans font-semibold">
            Um showroom sensorial de <strong className="text-white">450 m²</strong> com curadoria especializada, marcas exclusivas e atendimento consultivo para transformar ideias em ambientes únicos.
          </p>

          {/* Badge de Localização */}
          <div className="flex justify-start mb-8">
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg inline-flex items-center gap-2">
              <HiLocationMarker className="text-lg md:text-xl text-white drop-shadow-lg flex-shrink-0" />
              <span className="text-sm md:text-base text-white font-medium drop-shadow-md whitespace-nowrap">
                Zona Sul de São Paulo | Estacionamento no local
              </span>
            </div>
          </div>

          <div className="flex justify-center">
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