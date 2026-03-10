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

                        {/* Products & Applications - Direct Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/products?tab=products"
                                    className="text-white uppercase tracking-[0.3em] hover:bg-white/10 transition-all font-bold bg-transparent px-3 py-2 h-auto rounded-md inline-flex items-center justify-center"
                                >
                                    Products & Applications
                                </Link>
                            </NavigationMenuLink>
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
                                        <div className="block px-4 py-2.5 rounded-md text-gray-300 text-sm font-medium">
                                            Resources
                                        </div>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/resources/ku-band"
                                                className="block px-6 py-2 rounded-md cursor-pointer text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            >
                                                <div className="text-sm font-normal">Ku-band</div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/resources/ka-band"
                                                className="block px-6 py-2 rounded-md cursor-pointer text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                                            >
                                                <div className="text-sm font-normal">Ka-band</div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink
                                            className="block px-4 py-2.5 rounded-md cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 mt-1"
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
                                <div className="text-white text-xl font-bold uppercase tracking-widest mb-4">About</div>
                                <div className="grid gap-4 pl-4">
                                    <button onClick={() => { handleAboutClick('overview'); setIsMobileMenuOpen(false); }} className="text-left text-gray-300 hover:text-white text-lg font-medium transition-colors">Overview</button>
                                    <button onClick={() => { handleAboutClick('mission'); setIsMobileMenuOpen(false); }} className="text-left text-gray-300 hover:text-white text-lg font-medium transition-colors">Mission</button>
                                    <button onClick={() => { handleAboutClick('values'); setIsMobileMenuOpen(false); }} className="text-left text-gray-300 hover:text-white text-lg font-medium transition-colors">Values</button>
                                    <button onClick={() => { handleAboutClick('governance'); setIsMobileMenuOpen(false); }} className="text-left text-gray-300 hover:text-white text-lg font-medium transition-colors">Governance</button>
                                    <button onClick={() => { handleAboutClick('team'); setIsMobileMenuOpen(false); }} className="text-left text-gray-300 hover:text-white text-lg font-medium transition-colors">Team</button>
                                </div>
                            </div>

                            {/* Products & Applications */}
                            <div className="border-b border-white/10 pb-6">
                                <Link href="/products?tab=products" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-xl font-bold uppercase tracking-widest block">
                                    Products & Applications
                                </Link>
                            </div>

                            {/* Technology */}
                            <div className="border-b border-white/10 pb-6">
                                <Link href="/technology" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-xl font-bold uppercase tracking-widest block">
                                    Technology
                                </Link>
                            </div>

                            {/* News */}
                            <div className="border-b border-white/10 pb-6">
                                <Link href="/news" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-xl font-bold uppercase tracking-widest block">
                                    News
                                </Link>
                            </div>

                            {/* Resources */}
                            <div className="border-b border-white/10 pb-6">
                                <div className="text-white text-xl font-bold uppercase tracking-widest mb-4 block">Resources</div>
                                <div className="grid gap-4 pl-4">
                                    <Link href="/resources/ku-band" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg font-medium block transition-colors">Ku-band</Link>
                                    <Link href="/resources/ka-band" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg font-medium block transition-colors">Ka-band</Link>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="pb-6">
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        if (isHomePage && scrollTo) {
                                            scrollTo('contact');
                                        } else {
                                            window.location.href = '/#contact';
                                        }
                                    }}
                                    className="text-left text-white text-xl font-bold uppercase tracking-widest block w-full"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
