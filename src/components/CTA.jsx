import { HiLocationMarker } from 'react-icons/hi'
import { MdDirectionsCar, MdAccessTime } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa'

function CTA() {
  const whatsappUrl = "https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de mais informações sobre revestimentos"
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Av.+João+Dias,+999+-+Granja+Julieta,+São+Paulo+-+SP"

  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-[#1E3A5F] relative overflow-hidden">

      {/* --- BACKGROUND PREMIUM WITH SHOWROOM PHOTO --- */}
      <div className="absolute inset-0 select-none">
        {/* Imagem de Fundo (Showroom) */}
        <div className="absolute inset-0">
          <img
            src="/fotos/showroom5.webp"
            alt="Showroom Via Cor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlays para Contraste e Cor da Marca */}
        <div className="absolute inset-0 bg-[#1E3A5F]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F] via-[#1E3A5F]/95 to-transparent/80"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Grid Pattern Sutil */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), 
              linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>


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
            </div>

            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#C0392B] group-hover:border-[#C0392B] transition-all duration-300">
                  <HiLocationMarker className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-serif text-lg text-white mb-1 group-hover:text-[#C0392B] transition-colors">Endereço</p>
                  <p className="text-white/70 font-light">
                    Av. João Dias, 999/1009<br />
                    Granja Julieta, São Paulo – SP
                  </p>
                  <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Dentro da loja Ibiza Acabamentos</p>
                </div>
              </div>

              {/* Estacionamento */}
              <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#C0392B] group-hover:border-[#C0392B] transition-all duration-300">
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
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#C0392B] group-hover:border-[#C0392B] transition-all duration-300">
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

            {/* CTA Button moved here for better context */}
            <div className="mt-10 md:mt-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 w-full md:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#059669] via-[#10B981] to-[#34D399] group-hover:bg-gradient-to-br group-hover:from-[#047857] group-hover:via-[#059669] group-hover:to-[#10B981] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors"></span>
                <span className="relative z-10 tracking-wide drop-shadow-md text-lg">Quero agendar meu atendimento</span>
              </a>
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

              {/* Iframe do Mapa */}
              <iframe
                src="https://maps.google.com/maps?q=Av.+João+Dias,+999+-+Granja+Julieta,+São+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl relative z-10 pointer-events-none"
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