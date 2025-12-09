import { HiLocationMarker } from 'react-icons/hi'
import { MdDirectionsCar, MdAccessTime } from 'react-icons/md'
import { FaCamera, FaMap } from 'react-icons/fa'

function CTA() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita ao showroom da Via Cor Revestimentos."

  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Agende sua visita ao showroom e descubra como elevar o nível do seu projeto
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
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
              <HiLocationMarker className="text-2xl text-[#1E3A5F] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                <p className="text-gray-700">
                  Av. João Dias, 999/1009 – Granja Julieta, São Paulo – SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdDirectionsCar className="text-2xl text-[#1E3A5F] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Estacionamento</p>
                <p className="text-gray-700">
                  Showroom com estacionamento próprio
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdAccessTime className="text-2xl text-[#1E3A5F] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</p>
                <p className="text-gray-700">
                  Segunda a sexta das 9h às 18h<br />
                  Sábado das 9h às 14h
                </p>
              </div>
            </div>
          </div>

          {/* Espaço para foto e mapa */}
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-gray-500">
                <FaCamera className="text-3xl" />
                <p className="text-center text-sm">
                  Foto do showroom
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-gray-500">
                <FaMap className="text-3xl" />
                <p className="text-center text-sm">
                  Mapa/Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

