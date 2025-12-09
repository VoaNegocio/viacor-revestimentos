function Brands() {
  const brands = [
    { name: 'Portinari' },
    { name: 'Castellato' },
    { name: 'Eliane' },
    { name: 'Atlas' },
    { name: '+ outras 20 marcas selecionadas' }
  ]

  return (
    <section id="marcas" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Trabalhamos com quem dita tendência em acabamentos de alto padrão
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
            {brands.map((brand, index) => (
              <span 
                key={index}
                className="text-lg md:text-xl font-semibold text-[#1E3A5F] px-4 py-2 border-b-2 border-[#C0392B]"
              >
                {brand.name}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <span className="text-2xl">🛠️</span>
            <p className="text-base md:text-lg">
              Garantia de sofisticação, durabilidade e excelência estética para seu projeto.
            </p>
          </div>
        </div>

        {/* Espaço para imagem de projetos realizados */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12 min-h-[400px] flex items-center justify-center">
          <p className="text-gray-500 text-center">
            📷 Espaço para inserir imagem de projetos realizados com cada uma das marcas
          </p>
        </div>
      </div>
    </section>
  )
}

export default Brands

