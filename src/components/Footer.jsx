import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary pt-24 pb-8 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <svg width="30" height="24" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.913 22.8H18.9959L15.3465 28.528H9.49793L12.913 22.8Z" fill="white" />
                                <path d="M2.27838 28.528L8.36127 18.992H14.4442L8.59563 28.528H2.27838Z" fill="white" />
                                <path d="M18.9959 18.992L25.0788 8.048H31.1617L24.8445 18.992H18.9959Z" fill="white" />
                                <path d="M15.3465 14.4H21.4294L27.5123 2.8H21.4294L15.3465 14.4Z" fill="white" />
                            </svg>
                            <span className="text-white text-xl font-bold font-inter tracking-tight">whitepace</span>
                        </div>
                        <p className="text-[15px] leading-relaxed opacity-90 pr-4">
                            whitepace was created for the new ways we live and work. We make beautifully designed workspace that inspires and enables collaboration.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Product</h4>
                        <ul className="space-y-4 opacity-90 text-[15px]">
                            <li><a href="#" className="hover:text-accent transition-colors">Overview</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Customer stories</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 opacity-90 text-[15px]">
                            <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Guides & tutorials</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Help center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-4 opacity-90 text-[15px]">
                            <li><a href="#" className="hover:text-accent transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Media kit</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
                    <p>©2023 Whitepace LLC.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-accent transition-colors">Terms & privacy</a>
                        <a href="#" className="hover:text-accent transition-colors">Security</a>
                        <a href="#" className="hover:text-accent transition-colors">Status</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
