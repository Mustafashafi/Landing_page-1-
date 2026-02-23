import React from 'react';
import { motion } from 'framer-motion';

const YourWork = () => {
    return (
        <section className="bg-primary py-32 relative overflow-hidden text-center">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute w-[180%] h-[180%] -top-[40%] -left-[40%] opacity-20" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <path key={i} d={`M ${100 + i * 40} 500 Q ${500 + i * 80} ${200 - i * 50}, 900 500 T ${1700 + i * 100} 500`} stroke="white" strokeWidth="1" />
                    ))}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
                >
                    Your work, everywhere <span className="relative">
                        you are
                        <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full" width="100%" height="24" viewBox="0 0 357 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M2 18C100 -2 200 24 355 6" stroke="#4F9CF9" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-white mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-normal"
                >
                    Access your notes from your computer, phone or tablet by synchronising with various services,
                    including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux,
                    Android and iOS. A terminal app is also available!
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-secondary text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-lg font-medium hover:bg-blue-500 transition-colors mx-auto"
                >
                    Try Taskey
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 2L14 7.5M14 7.5L8.5 13M14 7.5H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>


            </div>
        </section>
    );
};

export default YourWork;
