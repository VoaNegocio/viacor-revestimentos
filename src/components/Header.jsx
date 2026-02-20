import { useState, useEffect } from 'react'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu ao clicar em link
  const handleNavClick = () => setMenuOpen(false)

  const navLinks = [
    { href: '#marcas', label: 'Marcas' },
    { href: '#beneficios', label: 'Showroom' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#1E3A5F]/95 backdrop-blur-lg shadow-xl border-b border-white/10'
          : 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-0.5 shadow-2xl inline-flex">
              <img
                src="/viacor-logo.webp"
                alt="Via Cor Revestimentos"
                className="h-10 md:h-14 lg:h-16 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#10B981] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Desktop + Hamburger Mobile */}
          <div className="flex items-center gap-4">
            {/* CTA WhatsApp - Desktop */}
            <a
              href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de mais informações sobre revestimentos"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-lg" />
              <span>Fale Conosco</span>
            </a>

            {/* Hamburger - Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="bg-[#1E3A5F]/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 mt-4">
            <a
              href="https://wa.me/5511940371530?text=Olá! Vim pelo Google e gostaria de mais informações sobre revestimentos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              <FaWhatsapp className="text-lg" />
              <span>Fale Conosco no WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
