import { FaCheck } from 'react-icons/fa'
import { MdVideoLibrary } from 'react-icons/md'

function Benefits() {
  const benefits = [
    "Revestimentos exclusivos das marcas mais desejadas: Castellato, Portinari, Eliane, Atlas e mais.",
    "Consultoria completa do porcelanato à esquadria — com ou sem arquiteto.",
    "Showroom sensorial com ambientações reais e materiais para todos os estilos.",
    "Piso vinílico, pedras naturais, cimentícios, porcelanatos importados e nacionais.",
    "Projetos assinados em bairros como Chácara Flora, Morumbi e Moema."
  ]

  return (
    <section id="beneficios" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background Premium - Branding Via Cor */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#1E3A5F]/5"></div>
      {/* Padrão geométrico sutil inspirado nos mosaicos */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, #1E3A5F 10px, #1E3A5F 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, #C0392B 10px, #C0392B 20px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Ambientes com identidade, sofisticação e acabamento impecável
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Há mais de <strong>16 anos</strong>, ajudamos a transformar projetos em referências de bom gosto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <FaCheck className="text-2xl text-[#C0392B] flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Carrossel com fotos do showroom */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12 min-h-[400px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <MdVideoLibrary className="text-4xl" />
            <p className="text-center text-sm">
              Carrossel com fotos do showroom e ambientações
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits

