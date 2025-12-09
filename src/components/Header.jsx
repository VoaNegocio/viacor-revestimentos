function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/viacor-logo-instagram .jpg" 
              alt="Via Cor Revestimentos" 
              className="h-10 md:h-12 lg:h-14 object-contain drop-shadow-lg"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#marcas" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
              Marcas
            </a>
            <a href="#depoimentos" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
              Depoimentos
            </a>
            <a href="#beneficios" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
              Benefícios
            </a>
            <a href="#contato" className="text-white hover:text-[#C0392B] transition-colors font-medium font-sans drop-shadow-md">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

