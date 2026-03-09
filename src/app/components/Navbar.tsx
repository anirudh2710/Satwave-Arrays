'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    scrollTo?: (id: string) => void;
    setAboutTab?: (tab: string) => void;
}

export default function Navbar({ scrollTo, setAboutTab }: NavbarProps) {
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isHomePage = pathname === '/';

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Close dropdowns on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeDropdown && !(event.target as Element).closest('.nav-dropdown-trigger') && !(event.target as Element).closest('.nav-dropdown-content')) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [activeDropdown]);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAboutClick = (tab: string) => {
        if (isHomePage && scrollTo) {
            setAboutTab?.(tab);
            scrollTo('about');
        } else {
            // Use Next.js router for instant client-side navigation (no page reload)
            router.push(`/?aboutTab=${tab}#about`);
        }
    };

    return (
        <nav className={`full-nav ${isAtTop ? 'nav-transparent' : 'nav-hero-active'}`}>
            <div className="w-full px-6 h-20 flex items-center justify-between">
                {/* Logo Container - Extreme Left */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        onClick={(e) => {
                            if (isHomePage) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'instant' });
                            }
                        }}
                    >
                        <img
                            src='/Satwave_logos/Horizontal_logo/SVGs/Satwave_White.svg'
                            alt="Satwave Logo"
                            className="h-10 w-auto cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Navigation Menu - Extreme Right */}
                {/* Navigation Menu - Extreme Right */}
                <NavigationMenu className="hidden lg:flex" viewport={false} value={activeDropdown || ""} onValueChange={setActiveDropdown}>
                    <NavigationMenuList className="gap-8">
                        {/* About Dropdown */}
                        <NavigationMenuItem value="about">
                            <NavigationMenuTrigger
                                className="uppercase tracking-[0.3em] hover:bg-white/10 transition-all font-bold bg-transparent px-3 py-2 h-auto rounded-md gap-1.5"
                                onPointerMove={(e: any) => e.preventDefault()}
                                onPointerLeave={(e: any) => e.preventDefault()}
                                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                            >
                                About
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="gradient-navbar-dropdown backdrop-blur-2xl border border-mid-gray-tint/30 shadow-xl rounded-lg md:left-0">
                                <ul className="grid w-[220px] gap-0.5 p-3">
                                    <li>
                                        <NavigationMenuLink
                                            className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            onClick={() => handleAboutClick('overview')}
                                        >
                                            <div className="uppercase text-sm font-medium">Overview</div>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            onClick={() => handleAboutClick('mission')}
                                        >
                                            <div className="uppercase text-sm font-medium">Mission</div>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            onClick={() => handleAboutClick('values')}
                                        >
                                            <div className="uppercase text-sm font-medium">Values</div>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            onClick={() => handleAboutClick('governance')}
                                        >
                                            <div className="uppercase text-sm font-medium">Governance</div>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            onClick={() => handleAboutClick('team')}
                                        >
                                            <div className="uppercase text-sm font-medium">Team</div>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Separator */}
                        <div className="h-6 w-px bg-white/20"></div>

                        {/* Products & Applications Dropdown */}
                        <NavigationMenuItem value="products">
                            <NavigationMenuTrigger
                                className="text-white uppercase tracking-[0.3em] hover:bg-white/10 transition-all font-bold bg-transparent px-3 py-2 h-auto rounded-md gap-1.5"
                                onPointerMove={(e: any) => e.preventDefault()}
                                onPointerLeave={(e: any) => e.preventDefault()}
                                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                            >
                                Products & Applications
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="gradient-navbar-dropdown backdrop-blur-2xl border border-mid-gray-tint/30 shadow-xl rounded-lg md:-left-20">
                                <ul className="grid grid-cols-2 w-[440px] gap-4 p-4">
                                    {/* Products Section */}
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/products?tab=products" className="block p-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-200">
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                                    Products
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="uppercase px-3 py-1.5 bg-brand-black/20 text-brand-accent rounded-full text-xs font-medium border border-brand-black/30">
                                                        Ku Antenna
                                                    </span>
                                                    <span className="uppercase px-3 py-1.5 bg-brand-black/20 text-brand-accent rounded-full text-xs font-medium border border-brand-black/30">
                                                        Ka Antenna
                                                    </span>
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>

                                    {/* Applications Section */}
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/products?tab=applications" className="block p-4 rounded-md cursor-pointer hover:bg-white/10 transition-all duration-200">
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                                    Applications
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="uppercase px-3 py-1.5 bg-brand-black/20 text-brand-accent rounded-full text-xs font-medium border border-brand-black/30">
                                                        Comms on the Move
                                                    </span>
                                                    <span className="uppercase px-3 py-1.5 bg-brand-black/20 text-brand-accent rounded-full text-xs font-medium border border-brand-black/30">
                                                        Comms on the Pause
                                                    </span>
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Separator */}
                        <div className="h-6 w-px bg-white/20"></div>

                        {/* Technology */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/technology"
                                    className="text-white uppercase tracking-[0.3em] hover:bg-white/10 transition-all font-bold bg-transparent px-3 py-2 h-auto rounded-md inline-flex items-center justify-center"
                                >
                                    Technology
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Separator */}
                        <div className="h-6 w-px bg-white/20"></div>

                        {/* More */}
                        <NavigationMenuItem value="more">
                            <NavigationMenuTrigger
                                className="text-white uppercase tracking-[0.3em] hover:bg-white/10 transition-all font-bold bg-transparent px-3 py-2 h-auto rounded-md gap-1.5"
                                onPointerMove={(e: any) => e.preventDefault()}
                                onPointerLeave={(e: any) => e.preventDefault()}
                                onClick={() => setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
                            >
                                More
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="gradient-navbar-dropdown backdrop-blur-2xl border border-mid-gray-tint/30 shadow-xl rounded-lg md:right-0 md:left-auto">
                                <ul className="grid w-[220px] gap-0.5 p-3">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/news"
                                                className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            >
                                                <div className="text-sm font-medium">News</div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            onClick={() => {
                                                if (isHomePage && scrollTo) {
                                                    scrollTo('contact');
                                                } else {
                                                    window.location.href = '/#contact';
                                                }
                                            }}
                                        >
                                            <div className="text-sm font-medium">Contact Us</div>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center justify-end lg:hidden flex-1 relative z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 top-0 left-0 w-full bg-brand-black/95 backdrop-blur-xl z-40 overflow-y-auto pt-24 pb-12 px-6 lg:hidden flex flex-col"
                    >
                        <div className="space-y-6">
                            {/* About Section */}
                            <div className="border-b border-white/10 pb-6">
                                <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">About</h3>
                                <div className="grid gap-3 pl-4">
                                    <button onClick={() => { handleAboutClick('overview'); setIsMobileMenuOpen(false); }} className="text-left text-white text-lg font-medium">Overview</button>
                                    <button onClick={() => { handleAboutClick('mission'); setIsMobileMenuOpen(false); }} className="text-left text-white text-lg font-medium">Mission</button>
                                    <button onClick={() => { handleAboutClick('values'); setIsMobileMenuOpen(false); }} className="text-left text-white text-lg font-medium">Values</button>
                                    <button onClick={() => { handleAboutClick('governance'); setIsMobileMenuOpen(false); }} className="text-left text-white text-lg font-medium">Governance</button>
                                    <button onClick={() => { handleAboutClick('team'); setIsMobileMenuOpen(false); }} className="text-left text-white text-lg font-medium">Team</button>
                                </div>
                            </div>

                            {/* Products & Applications */}
                            <div className="border-b border-white/10 pb-6">
                                <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Products & Applications</h3>
                                <div className="grid gap-3 pl-4">
                                    <Link href="/products?tab=products" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium block">Products</Link>
                                    <Link href="/products?tab=applications" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium block">Applications</Link>
                                </div>
                            </div>

                            {/* Technology */}
                            <div className="border-b border-white/10 pb-6">
                                <Link href="/technology" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-xl font-bold uppercase tracking-widest">
                                    Technology
                                </Link>
                            </div>

                            {/* More */}
                            <div className="pb-6">
                                <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">More</h3>
                                <div className="grid gap-3 pl-4">
                                    <Link href="/news" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium block">News</Link>
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            if (isHomePage && scrollTo) {
                                                scrollTo('contact');
                                            } else {
                                                window.location.href = '/#contact';
                                            }
                                        }}
                                        className="text-left text-brand-accent text-lg font-medium"
                                    >
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
