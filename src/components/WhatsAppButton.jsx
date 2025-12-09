import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita ao showroom da Via Cor Revestimentos."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco
      </span>
    </a>
  )
}

export default WhatsAppButton

