function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Via Cor Revestimentos</h3>
            <p className="text-gray-300 text-sm">
              Revestimentos de alto padrão para projetos exigentes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#marcas" className="hover:text-[#C0392B] transition-colors">Marcas</a></li>
              <li><a href="#depoimentos" className="hover:text-[#C0392B] transition-colors">Depoimentos</a></li>
              <li><a href="#beneficios" className="hover:text-[#C0392B] transition-colors">Benefícios</a></li>
              <li><a href="#contato" className="hover:text-[#C0392B] transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-sm text-gray-300 mb-2">
              Av. João Dias, 999/1009
            </p>
            <p className="text-sm text-gray-300 mb-2">
              Granja Julieta, São Paulo – SP
            </p>
            <p className="text-sm text-gray-300">
              Zona Sul de São Paulo
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#2C3E50] pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Via Cor Revestimentos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

