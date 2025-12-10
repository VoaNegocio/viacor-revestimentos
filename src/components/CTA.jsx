import { HiLocationMarker } from 'react-icons/hi'
import { MdDirectionsCar, MdAccessTime } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa' // Importando ícone para o hover

function CTA() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita ao showroom da Via Cor Revestimentos."
  // Link direto para o Google Maps com o endereço da Via Cor
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Av.+João+Dias,+999+-+Granja+Julieta,+São+Paulo+-+SP"

  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-[#1E3A5F] relative overflow-hidden">
      
      {/* --- BACKGROUND DARK ARCHITECTURAL --- */}
      <div className="absolute inset-0 bg-[#1E3A5F]"></div>
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
      <div className="absolute bottom-0 right-0 w-full max-w-2xl h-[400px] bg-[#C0392B] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1E3A5F_90%)]"></div>


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Esquerda: Infos */}
          <div>
            <div className="mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6 font-serif leading-tight">
                Agende sua visita e eleve o nível do seu projeto
              </h2>
              <p className="text-lg text-white/80 font-light mb-8 max-w-lg">
                Atendimento personalizado com especialistas em acabamentos de alto padrão. Venha tomar um café conosco.
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#C0392B] hover:bg-[#A93226] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-[#C0392B]/40 hover:-translate-y-1"
              >
                Quero agendar meu atendimento
              </a>
            </div>

            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#C0392B] group-hover:border-[#C0392B] transition-all duration-300">
                  <HiLocationMarker className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-serif text-lg text-white mb-1 group-hover:text-[#C0392B] transition-colors">Endereço</p>
                  <p className="text-white/70 font-light">
                    Av. João Dias, 999/1009<br/>
                    Granja Julieta, São Paulo – SP
                  </p>
                </div>
              </div>

              {/* Estacionamento */}
              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#C0392B] group-hover:border-[#C0392B] transition-all duration-300">
                  <MdDirectionsCar className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-serif text-lg text-white mb-1 group-hover:text-[#C0392B] transition-colors">Estacionamento</p>
                  <p className="text-white/70 font-light">
                    Loja com estacionamento exclusivo e gratuito para clientes.
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#C0392B] group-hover:border-[#C0392B] transition-all duration-300">
                  <MdAccessTime className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-serif text-lg text-white mb-1 group-hover:text-[#C0392B] transition-colors">Horário de Funcionamento</p>
                  <p className="text-white/70 font-light">
                    Segunda a sexta das 9h às 18h<br />
                    Sábado das 9h às 14h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direita: Mapa Linkável (Full Color) */}
          <div className="relative h-full min-h-[400px] flex items-center">
            {/* Decoração Traseira */}
            <div className="absolute inset-0 bg-white/5 transform translate-x-4 translate-y-4 rounded-2xl border border-white/10 -z-10"></div>
            
            {/* Container Linkável */}
            <a 
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[450px] bg-[#152238] rounded-2xl border border-white/20 p-2 shadow-2xl relative overflow-hidden group block cursor-pointer"
            >
              {/* Brilho no vidro */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20"></div>
              
              {/* Iframe do Mapa (Colorido & Sem interação de mouse) */}
              <iframe
                src="https://maps.google.com/maps?q=Av.+João+Dias,+999+-+Granja+Julieta,+São+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl relative z-10 pointer-events-none" // pointer-events-none é o segredo aqui
                title="Localização Via Cor Revestimentos"
              />
              
              {/* Overlay de Hover com Botão */}
              <div className="absolute inset-0 bg-[#1E3A5F]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center">
                <span className="bg-white text-[#1E3A5F] px-6 py-3 rounded-full font-bold shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2">
                  <FaExternalLinkAlt className="text-sm" /> Abrir no Google Maps
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA