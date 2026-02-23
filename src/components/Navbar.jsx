import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-primary px-6 py-4 w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <svg width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.913 22.8H18.9959L15.3465 28.528H9.49793L12.913 22.8Z" fill="white" />
                        <path d="M2.27838 28.528L8.36127 18.992H14.4442L8.59563 28.528H2.27838Z" fill="white" />
                        <path d="M18.9959 18.992L25.0788 8.048H31.1617L24.8445 18.992H18.9959Z" fill="white" />
                        <path d="M15.3465 14.4H21.4294L27.5123 2.8H21.4294L15.3465 14.4Z" fill="white" />
                    </svg>
                    <span className="text-white text-2xl font-bold font-inter tracking-tight">whitepace</span>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-white text-[15px] font-medium">
                    <a href="#products" className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">Products <ChevronDown size={14} /></a>
                    <a href="#solutions" className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">Solutions <ChevronDown size={14} /></a>
                    <a href="#resources" className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">Resources <ChevronDown size={14} /></a>
                    <a href="#pricing" className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">Pricing <ChevronDown size={14} /></a>
                </div>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="bg-accent text-primary px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-yellow-200 transition-colors">
                        Login
                    </button>
                    <button className="bg-secondary text-white px-6 py-3.5 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-blue-500 transition-colors">
                        Try Whitepace free
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 1.5L11 6M11 6L6.5 10.5M11 6H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-white">
                    <Menu size={28} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
