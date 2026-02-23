import React from 'react';
import { motion } from 'framer-motion';

const Customise = () => {
    return (
        <section id="resources" className="bg-white py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full flex justify-center lg:justify-start"
                >
                    <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden flex items-center justify-center border border-black/5 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Customisation data dashboard"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Right Graphics */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h2 className="text-[48px] lg:text-[72px] font-bold leading-[1.1] mb-6 tracking-tight text-[#212529]">
                        Customise it to <br className="hidden lg:block" />
                        <span className="relative">
                            your needs
                            <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full" width="100%" height="24" viewBox="0 0 357 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M2 18C100 -2 200 24 355 6" stroke="#FFE492" strokeWidth="5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg text-[#212529] font-normal leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown).
                        Or create your own scripts and plugins using the Extension API.
                    </p>
                    <button className="bg-secondary text-white px-8 py-4 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-lg font-medium hover:bg-blue-500 transition-colors mx-auto lg:mx-0">
                        Let's Go
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 2L14 7.5M14 7.5L8.5 13M14 7.5H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default Customise;
