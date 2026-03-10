'use client';

import Navbar from "./Navbar";
import NewsTicker from "./NewsTicker";

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
            <div className="relative z-10 flex flex-col justify-center min-h-[50vh] md:min-h-[60vh] py-12 md:py-16 mt-10 lg:mt-20">
                {/* Headline & CTA */}
                <div className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl text-center">
                        <h1 className="uppercase text-white text-7xl sm:text-8xl md:text-9xl leading-[0.85] w-full mb-6 drop-shadow-2xl">
                            Enabling<br className="sm:hidden" /> Mobility
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex-grow flex flex-col justify-end min-h-[40vh] pb-8 relative z-10">
                <NewsTicker news={news} />
            </div>
        </div>
    );
}
