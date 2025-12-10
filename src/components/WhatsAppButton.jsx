import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5511940371530?text=Olá! Gostaria de agendar uma visita ao showroom da Via Cor Revestimentos."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn-premium fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Botão Principal */}
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        {/* Efeito de brilho pulsante */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        
        {/* Efeito de glow */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 blur-xl animate-pulse"></div>
        
        {/* Botão com gradiente */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-[#128C7E] shadow-2xl hover:shadow-[#25D366]/60 transition-all duration-300 transform hover:scale-110 flex items-center justify-center overflow-hidden">
          {/* Efeito de brilho interno */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
          
          {/* Ícone */}
          <FaWhatsapp className="w-8 h-8 md:w-9 md:h-9 text-white relative z-10 drop-shadow-lg" />
          
          {/* Efeito de shimmer no hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </div>
      </div>

      {/* Tooltip Premium */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl pointer-events-none">
        Fale conosco
        {/* Seta do tooltip */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
      </span>
    </a>
  )
}

export default WhatsAppButton

