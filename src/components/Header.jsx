function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-center h-20 md:h-24">
          {/* Logo centralizada com Glassmorphism Ajustado */}
          <div className="flex justify-center w-full">
            <a href="#" className="hover:opacity-100 transition-opacity">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-0.5 shadow-2xl inline-flex">
                <img
                  src="/viacor-logo.webp"
                  alt="Via Cor Revestimentos"
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

