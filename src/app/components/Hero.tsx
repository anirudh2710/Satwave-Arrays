'use client';

import Navbar from "./Navbar";
import NewsTicker from "./NewsTicker";
import { motion } from "framer-motion";

interface NewsItem {
    title: string;
    slug: string;
    publishedAt: string;
    category: string;
    excerpt?: string;
}

interface HeroProps {
    scrollTo: (id: string) => void;
    setAboutTab?: (tab: string) => void;
    news: NewsItem[];
}

export default function Hero({ scrollTo, setAboutTab, news }: HeroProps) {
    return (
        <div className="hero-container relative min-h-screen flex flex-col">
            {/* Antenna Background - Shared by both sections */}
            <div className="hero-background" />

            <Navbar scrollTo={scrollTo} setAboutTab={setAboutTab} />

            {/* Top Section - Main Content */}
            <div className="relative z-10 flex flex-col justify-start flex-grow pt-12 md:pt-24 mt-20 lg:mt-32">
                {/* Headline & CTA */}
                <div className="flex-1 flex flex-col items-center justify-start w-full px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl text-center">
                        <h1 className="uppercase text-7xl sm:text-8xl md:text-9xl leading-[0.82] w-full mb-8 tracking-tighter flex flex-col sm:block overflow-hidden">
                            <motion.span
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="inline-block text-white/90 font-light drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            >
                                Enabling
                            </motion.span>
                            <br className="sm:hidden" />
                            {" "}
                            <motion.span
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                                className="inline-block relative text-white font-black drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                            >
                                Mobility
                            </motion.span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-end pb-8 relative z-10">
                <NewsTicker news={news} />
            </div>
        </div>
    );
}
