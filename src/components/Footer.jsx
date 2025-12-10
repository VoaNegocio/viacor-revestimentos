import { FaHeart } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F8FAFC] text-slate-600 py-12 px-4 border-t border-slate-200">
      
      {/* --- BACKGROUND PREMIUM (Mesa de Projetos) --- */}
      
      {/* 1. Base Clara Sofisticada */}
      <div className="absolute inset-0 bg-[#F8FAFC]"></div>

      {/* 2. Grid Arquitetônico (Blueprint Minimalista) */}
      <div 
        className="absolute inset-0 opacity-[0.6] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#E2E8F0 1px, transparent 1px), 
            linear-gradient(to right, #E2E8F0 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 3. Vinheta Suave para profundidade nas bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)] pointer-events-none"></div>


      {/* --- CONTEÚDO DO RODAPÉ --- */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Coluna 1 - Marca */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1E3A5F] font-serif">Via Cor Revestimentos</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Curadoria especializada em revestimentos de alto padrão para transformar projetos em obras de arte.
            </p>
          </div>
          
          {/* Coluna 2 - Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1E3A5F]">Navegação</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#marcas" className="hover:text-[#C0392B] transition-colors">Marcas Exclusivas</a></li>
              <li><a href="#depoimentos" className="hover:text-[#C0392B] transition-colors">O que dizem</a></li>
              <li><a href="#beneficios" className="hover:text-[#C0392B] transition-colors">Nossos Diferenciais</a></li>
              <li><a href="#contato" className="hover:text-[#C0392B] transition-colors">Agendar Visita</a></li>
            </ul>
          </div>
          
          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1E3A5F]">Showroom</h4>
            <div className="text-sm text-slate-500 space-y-2">
              <p>Av. João Dias, 999/1009</p>
              <p>Granja Julieta, São Paulo – SP</p>
              <p className="pt-2 font-medium text-[#C0392B]">Estacionamento no local</p>
            </div>
          </div>
        </div>
        
        {/* Rodapé Inferior */}
        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Via Cor Revestimentos. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-1">
            <p>
              Landing Page made by <span className="font-semibold text-[#1E3A5F]">Voa Negocio Digital</span> e{' '}
              <a 
                href="https://almavictor.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-[#1E3A5F] hover:text-[#C0392B] transition-colors"
              >
                Victor
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer