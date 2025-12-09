function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Espaço vazio para balancear o layout */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            <nav className="flex items-center gap-6">
              <a href="#marcas" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
                Marcas
              </a>
              <a href="#depoimentos" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
                Depoimentos
              </a>
            </nav>
          </div>

          {/* Logo centralizada com Glassmorphism Escuro */}
          <div className="flex-1 flex justify-center">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-xl px-4 py-2 md:px-6 md:py-3 shadow-2xl">
                <img 
                  src="/viacor-logo-instagram .jpg" 
                  alt="Via Cor Revestimentos" 
                  className="h-8 md:h-10 lg:h-12 object-contain drop-shadow-lg"
                />
              </div>
            </a>
          </div>

          {/* Navegação à direita */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            <nav className="flex items-center gap-6">
              <a href="#beneficios" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
                Benefícios
              </a>
              <a href="#contato" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

