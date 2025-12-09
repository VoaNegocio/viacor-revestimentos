function Benefits() {
  const benefits = [
    "Revestimentos exclusivos das marcas mais desejadas: Castellato, Portinari, Eliane, Atlas e mais.",
    "Consultoria completa do porcelanato à esquadria — com ou sem arquiteto.",
    "Showroom sensorial com ambientações reais e materiais para todos os estilos.",
    "Piso vinílico, pedras naturais, cimentícios, porcelanatos importados e nacionais.",
    "Projetos assinados em bairros como Chácara Flora, Morumbi e Moema."
  ]

  return (
    <section id="beneficios" className="py-16 md:py-24 px-4 bg-white">
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
              <span className="text-2xl text-[#C0392B] flex-shrink-0">✔️</span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Carrossel com fotos do showroom */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12 min-h-[400px] flex items-center justify-center">
          <p className="text-gray-500 text-center">
            🎞️ Carrossel com fotos do showroom e ambientações
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits

