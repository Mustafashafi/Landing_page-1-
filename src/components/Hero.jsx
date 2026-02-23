import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="products" className="bg-primary relative overflow-hidden pt-20 pb-32">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute w-[180%] h-[180%] -top-[40%] -left-[40%] opacity-20" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <path key={i} d={`M ${100 + i * 40} 500 Q ${500 + i * 80} ${200 - i * 50}, 900 500 T ${1700 + i * 100} 500`} stroke="white" strokeWidth="1" />
                    ))}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h1 className="text-5xl lg:text-[64px] font-bold leading-[1.15] mb-6 tracking-tight">
                        Get More Done with whitepace
                    </h1>
                    <p className="text-lg lg:text-xl font-normal leading-relaxed mb-10 opacity-90 max-w-xl mx-auto lg:mx-0">
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                    <button className="bg-secondary text-white px-8 py-4 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-lg font-medium hover:bg-blue-500 transition-colors mx-auto lg:mx-0">
                        Try Whitepace free
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 2L14 7.5M14 7.5L8.5 13M14 7.5H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center border-4 border-black/5 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Team collaborating"
                            className="object-cover w-full h-full"
                        />
                        {/* Antigravity floating dots */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 bg-white p-3 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                        >
                            <div className="text-secondary font-bold text-sm tracking-tight flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Active
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                        >
                            <div className="text-[#212529] font-bold text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-yellow-400"></span> +12 New Tasks
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
