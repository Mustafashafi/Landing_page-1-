import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "The intuitive design and robust features of Whitepace have streamlined our team's workflow immensely. We can't imagine going back to our old tools.",
        author: "Sarah Jenkins",
        role: "Director of Operations, TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
        theme: "light",
    },
    {
        quote: "Since we integrated Whitepace into our daily routine, productivity has soared. It's the perfect central hub for all our project planning needs.",
        author: "Marcus Chen",
        role: "Lead Developer, Innovate Solutions",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
        theme: "primary",
    },
    {
        quote: "Whitepace is exactly what our agency needed to scale. It is beautifully designed, highly reliable, and incredibly simple for our new hires to learn.",
        author: "Elena Rodriguez",
        role: "Managing Partner, Creative Collective",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
        theme: "secondary",
    }
];

const Testimonials = () => {
    return (
        <section className="bg-white py-32 relative">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl lg:text-[72px] font-bold mb-20 text-[#212529]"
                >
                    What Our Clients <span className="relative">
                        Says
                        <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full" width="100%" height="24" viewBox="0 0 357 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M2 18C100 -2 200 24 355 6" stroke="#FFE492" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((test, index) => {
                        const isLight = test.theme === 'light';
                        const isPrimary = test.theme === 'primary';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className={`p-10 rounded-[10px] text-left relative flex flex-col justify-between
                   ${isLight ? 'bg-white shadow-[0px_4px_50px_rgba(0,0,0,0.08)]' : isPrimary ? 'bg-[#4F9CF9]' : 'bg-[#4F9CF9]'}
                 `}
                                style={{ minHeight: '380px' }}
                            >
                                <div>
                                    {/* Quote Icon */}
                                    <div className="mb-6">
                                        <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 0C5 0 0 6.6 0 14.5V30H15V14.5H5.5C5.5 10 8 5.5 13 4L11 0ZM36 0C30 0 25 6.6 25 14.5V30H40V14.5H30.5C30.5 10 33 5.5 38 4L36 0Z"
                                                fill={isLight ? '#043873' : 'white'} />
                                        </svg>
                                    </div>

                                    <p className={`text-[15px] leading-relaxed mb-8 border-b pb-8
                     ${isLight ? 'text-[#212529] border-[#212529]/20' : 'text-white border-white/20'}
                   `}>
                                        {test.quote}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white/20">
                                        <img src={test.avatar} alt={test.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className={`font-bold text-[15px] ${isLight ? 'text-[#212529]' : 'text-white'}`}>
                                            {test.author}
                                        </h4>
                                        <p className={`text-[13px] ${isLight ? 'text-[#212529]/70' : 'text-white/80'}`}>
                                            {test.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
