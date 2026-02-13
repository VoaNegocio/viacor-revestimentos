import { motion } from 'framer-motion'
import PromoCarousel from './PromoCarousel'

const Promotions = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
            <div className="absolute -left-20 top-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -right-20 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>



            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left relative"
                    >
                        <div className="relative inline-block">
                            <h2 className="font-serif font-bold text-white leading-tight">
                                <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">
                                    Condições
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-sm filter">
                                    Exclusivas
                                </span>
                                <span className="block text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    nas melhores marcas que você procura.
                                </span>
                            </h2>

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-8 mx-auto lg:mx-0"
                            />
                        </div>
                    </motion.div>

                    {/* Carousel Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative z-10 p-6">
                            <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full -z-10 transform scale-110"></div>
                            <PromoCarousel />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Promotions
