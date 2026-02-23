import React from 'react';
import { motion } from 'framer-motion';

const AppsIntegration = () => {
    return (
        <section className="bg-primary py-32 relative overflow-hidden">
            {/* Background waves */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <svg className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%]" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <path key={i} d={`M ${100 + i * 40} 500 Q ${500 + i * 80} ${200 - i * 50}, 900 500 T ${1700 + i * 100} 500`} stroke="white" strokeWidth="1" />
                    ))}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">

                {/* Left Graphics */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full flex justify-center lg:justify-start"
                >
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="App Integrations Dashboard"
                            className="object-cover w-full h-full bg-white"
                        />
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h2 className="text-[48px] lg:text-[72px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                        Work with Your <br /> Favorite Apps Using <br className="hidden lg:block" />
                        <span className="relative">
                            whitepace
                        </span>
                    </h2>
                    <p className="text-lg text-white font-normal leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 opacity-90">
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>
                    <button className="bg-secondary text-white px-8 py-4 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-lg font-medium hover:bg-blue-500 transition-colors mx-auto lg:mx-0">
                        Read more
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 2L14 7.5M14 7.5L8.5 13M14 7.5H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default AppsIntegration;
