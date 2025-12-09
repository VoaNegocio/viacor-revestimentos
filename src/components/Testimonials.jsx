function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Escolher a Via Cor é ter segurança do início ao fim do projeto.
          </p>
        </div>

        {/* Espaço para prints do Google Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg min-h-[200px] flex items-center justify-center"
            >
              <p className="text-gray-500 text-center text-sm">
                📸 Espaço para inserir print do Google Review {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

