import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
    return (
        <section className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl lg:text-[72px] font-bold mb-20 text-[#212529]"
                >
                    Our <span className="relative">
                        sponsors
                        <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full" width="100%" height="24" viewBox="0 0 357 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M2 18C100 -2 200 24 355 6" stroke="#FFE492" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:justify-between opacity-80"
                >
                    {/* Apple Logo Placeholder */}
                    <div className="flex items-center justify-center w-auto h-12 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className="text-3xl font-bold font-inter text-gray-800 flex items-center">
                            <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.24-.86 3.48-.82 1.48.06 2.76.68 3.54 1.77-3.1 1.83-2.58 6.06.67 7.21-.76 1.87-1.67 3.2-2.77 4.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                        </div>
                    </div>

                    {/* Microsoft Logo Placeholder */}
                    <div className="flex items-center justify-center w-auto h-12 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className="text-3xl font-bold font-inter text-gray-800 flex items-center gap-2">
                            <div className="grid grid-cols-2 gap-1 w-8 h-8">
                                <div className="bg-[#F25022]"></div><div className="bg-[#7FBA00]"></div>
                                <div className="bg-[#00A4EF]"></div><div className="bg-[#FFB900]"></div>
                            </div>
                            <span className="text-2xl font-semibold tracking-tight ml-2">Microsoft</span>
                        </div>
                    </div>

                    {/* Slack Logo Placeholder */}
                    <div className="flex items-center justify-center w-auto h-12 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className="text-3xl font-bold font-inter text-gray-800 flex items-center gap-2">
                            <svg className="w-10 h-10" viewBox="0 0 24 24">
                                <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" />
                                <path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52h6.313A2.528 2.528 0 0 1 17.67 15.165a2.528 2.528 0 0 1-2.523 2.523H6.313a2.528 2.528 0 0 1-2.521-2.523z" />
                                <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" />
                                <path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521v6.313a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V8.834a2.528 2.528 0 0 1 2.521-2.521z" />
                                <path fill="#2EB67D" d="M18.956 8.835a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.835a2.528 2.528 0 0 1-2.522 2.52h-2.522v-2.52z" />
                                <path fill="#2EB67D" d="M17.685 8.835a2.528 2.528 0 0 1-2.523 2.521H8.847a2.528 2.528 0 0 1-2.521-2.521 2.527 2.527 0 0 1 2.521-2.52h6.315a2.527 2.527 0 0 1 2.523 2.52z" />
                                <path fill="#ECB22E" d="M15.165 18.958a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.52v-2.522h2.523z" />
                                <path fill="#ECB22E" d="M15.165 17.687a2.527 2.527 0 0 1-2.523-2.521V8.851a2.528 2.528 0 0 1 2.523-2.521 2.527 2.527 0 0 1 2.523 2.521v6.315a2.527 2.527 0 0 1-2.523 2.521z" />
                            </svg>
                            <span className="text-[28px] font-bold tracking-tight text-black ml-1">slack</span>
                        </div>
                    </div>

                    {/* Google Logo Placeholder */}
                    <div className="flex items-center justify-center w-auto h-12 grayscale hover:grayscale-0 transition-all duration-300">
                        <div className="text-3xl font-bold font-inter flex items-center">
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FBBC05]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34A853]">l</span>
                            <span className="text-[#EA4335]">e</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
