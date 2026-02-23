import React from 'react';
import { motion } from 'framer-motion';

const ProjectManagement = () => {
    return (
        <section id="solutions" className="bg-white py-32 relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute -left-[20%] top-0 h-full w-1/2 pointer-events-none opacity-30">
                <svg viewBox="0 0 500 500" className="w-[800px] h-[800px] absolute -top-1/4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <circle key={i} cx="250" cy="250" r={50 + i * 40} stroke="#E5E7EB" strokeWidth="2" fill="none" />
                    ))}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h2 className="text-[48px] lg:text-[72px] font-bold leading-[1.1] mb-6 tracking-tight text-[#212529]">
                        Project <br className="hidden lg:block" />
                        <span className="relative">
                            Management
                            <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full" width="100%" height="24" viewBox="0 0 357 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M2 18C100 -2 200 24 355 6" stroke="#FFE492" strokeWidth="5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg text-[#212529] font-normal leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <button className="bg-secondary text-white px-8 py-4 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-lg font-medium hover:bg-blue-500 transition-colors mx-auto lg:mx-0">
                        Get Started
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 2L14 7.5M14 7.5L8.5 13M14 7.5H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center border border-black/5 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Project Management Dashboard"
                            className="object-cover w-full h-full"
                        />
                        {/* Floating avatars placeholders */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -left-6 top-1/4 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-whtie overflow-hidden hidden md:block">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute -right-4 bottom-1/3 w-20 h-20 bg-white rounded-full shadow-lg border-4 border-white overflow-hidden hidden md:block">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectManagement;
