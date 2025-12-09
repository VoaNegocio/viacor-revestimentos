import { HiLocationMarker } from 'react-icons/hi'
import { MdDirectionsCar, MdAccessTime } from 'react-icons/md'

function CTA() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita ao showroom da Via Cor Revestimentos."

  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
            Agende sua visita ao showroom e descubra como elevar o nível do seu projeto
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
            Atendimento personalizado via WhatsApp com especialistas em acabamentos de alto padrão.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C0392B] hover:bg-[#A93226] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-12"
          >
            Quero agendar meu atendimento
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <HiLocationMarker className="text-2xl text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Endereço</p>
                <p className="text-white/90">
                  Av. João Dias, 999/1009 – Granja Julieta, São Paulo – SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdDirectionsCar className="text-2xl text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Estacionamento</p>
                <p className="text-white/90">
                  Showroom com estacionamento próprio
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdAccessTime className="text-2xl text-white flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Horário de Funcionamento</p>
                <p className="text-white/90">
                  Segunda a sexta das 9h às 18h<br />
                  Sábado das 9h às 14h
                </p>
              </div>
            </div>
          </div>

          {/* Mapa Google Maps */}
          <div className="relative">
            {/* Glow effect - Múltiplas camadas para efeito premium */}
            <div className="absolute -inset-2 bg-gradient-to-r from-white/30 via-white/20 to-white/30 rounded-2xl blur-2xl opacity-60 -z-10 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-white/20 via-transparent to-white/20 rounded-2xl blur-lg opacity-40 -z-10"></div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8371785985773!2d-46.71019989999999!3d-23.6460014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5101f5a4a161%3A0x350834a56a2196b6!2sViaCor%20-%20Pisos%20e%20Revestimentos%20em%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1765314635103!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] md:h-[450px] relative z-10"
                title="Localização Via Cor Revestimentos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

