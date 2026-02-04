import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import PromoCarousel from './PromoCarousel'

const Promotions = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-[#152238] to-[#1E3A5F] overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute -left-20 top-1/2 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -right-20 bottom-0 w-80 h-80 bg-[#3498DB]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                            Oportunidades <span className="text-[#10B981]">Exclusivas</span>
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            Aproveite nossas condições especiais nas principais marcas do mercado. Conheça a nossa linha promocional completa, visite o nosso showroom e aproveite!
                        </p>


                    </motion.div>

                    {/* Carousel Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <PromoCarousel />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Promotions
