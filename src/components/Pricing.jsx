import React from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
    {
        name: 'Free',
        price: '$0',
        description: 'Capture ideas and find them quickly',
        features: [
            'Sync unlimited devices',
            '10 GB monthly uploads',
            '200 MB max. note size',
            'Customize Home dashboard and access extra widgets',
            'Connect primary Google Calendar account',
            'Add due dates, reminders, and notifications to your tasks'
        ],
        highlighted: false
    },
    {
        name: 'Personal',
        price: '$11.99',
        description: 'Keep home and family on track',
        features: [
            'Sync unlimited devices',
            '10 GB monthly uploads',
            '200 MB max. note size',
            'Customize Home dashboard and access extra widgets',
            'Connect primary Google Calendar account',
            'Add due dates, reminders, and notifications to your tasks'
        ],
        highlighted: true
    },
    {
        name: 'Organization',
        price: '$49.99',
        description: 'Capture ideas and find them quickly',
        features: [
            'Sync unlimited devices',
            '10 GB monthly uploads',
            '200 MB max. note size',
            'Customize Home dashboard and access extra widgets',
            'Connect primary Google Calendar account',
            'Add due dates, reminders, and notifications to your tasks'
        ],
        highlighted: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="bg-white py-32 relative">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl lg:text-7xl font-bold mb-6 text-[#212529]"
                >
                    Choose <span className="relative">
                        Your Plan
                        <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full" width="100%" height="24" viewBox="0 0 357 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M2 18C100 -2 200 24 355 6" stroke="#FFE492" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-[#212529] mb-16 max-w-2xl mx-auto"
                >
                    Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-[10px] text-left transition-all duration-300 relative border border-black/5
                ${plan.highlighted ? 'bg-[#043873] text-white shadow-2xl py-16 z-10' : 'bg-white text-[#212529] hover:border-[#ffe492] hover:shadow-xl'}
              `}
                        >
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <div className={`text-4xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-[#212529]'}`}>
                                {plan.price}
                            </div>
                            <p className={`mb-8 font-medium ${plan.highlighted ? 'text-white/90' : 'text-[#212529]'}`}>
                                {plan.description}
                            </p>

                            <ul className="space-y-6 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4">
                                        <svg className={`shrink-0 mt-1 ${plan.highlighted ? 'text-[#FFE492]' : 'text-[#212529]'}`} width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 1L6 12L1 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-[15px] font-medium tracking-tight">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-fit px-8 py-3 rounded-lg font-medium transition-colors border
                ${plan.highlighted
                                    ? 'bg-[#4F9CF9] text-white border-transparent hover:bg-blue-500'
                                    : 'bg-white text-[#212529] border-[#A8A8A8] hover:bg-gray-50'
                                }
              `}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
