import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // eslint-disable-line no-unused-vars
import { HiArrowRight, HiSparkles } from 'react-icons/hi'

const promoImages = [
    "/promocao/promo1.jpg",
    "/promocao/promo2.jpg",
    "/promocao/promo3.jpg",
    "/promocao/promo4.jpg"
]

const PromoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % promoImages.length)
        }, 4500) // 4.5s rotation
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full max-w-[360px] mx-auto md:mx-0 perspective-1000 group">

            {/* --- FLOATING CRYTAL CARD EFFECT --- */}
            <motion.div
                initial={{ opacity: 0, y: 20, rotateY: 10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/20"
            >

                {/* Header: Flash Sale Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full shadow-lg border border-red-500/50">
                    <HiSparkles className="text-yellow-300 animate-pulse" />
                    <span className="text-xs font-bold tracking-wider uppercase">Oferta Especial</span>
                </div>

                {/* Stories Progress Bar */}
                <div className="absolute top-0 left-0 right-0 z-30 flex gap-1 p-2">
                    {promoImages.map((_, idx) => (
                        <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: "0%" }}
                                animate={{ width: idx === currentIndex ? "100%" : idx < currentIndex ? "100%" : "0%" }}
                                transition={{ duration: idx === currentIndex ? 4.5 : 0, ease: "linear" }}
                            />
                        </div>
                    ))}
                </div>

                {/* Image Display */}
                <div className="relative aspect-[4/5] bg-gray-900 w-full overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={currentIndex}
                            src={promoImages[currentIndex]}
                            alt={`Promoção Viacor ${currentIndex + 1}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-contain bg-[#152238]"
                        />
                    </AnimatePresence>

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>
                </div>

                {/* CTA Footer */}
                <div className="p-4 bg-white/5 border-t border-white/10">
                    <div className="flex items-center justify-between">
                        <div className="text-white">
                            <p className="text-xs text-white/60 font-light uppercase tracking-widest">Tempo Limitado</p>
                            <p className="font-semibold text-sm">Consulte condições</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                            <HiArrowRight className="text-lg" />
                        </button>
                    </div>
                </div>

            </motion.div>

            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>

        </div>
    )
}

export default PromoCarousel
