'use client';

import Navbar from "./Navbar";
import NewsTicker from "./NewsTicker";

interface NewsItem {
    title: string;
    slug: string;
    publishedAt: string;
    category: string;
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
            <div className="relative z-10 flex flex-col justify-center min-h-[50vh] md:min-h-[60vh] py-12 md:py-16">
                {/* Headline */}
                <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl">
                        <h1 className="uppercase text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-center w-full mb-8 md:mb-12 font-bold">
                            Next-Generation Satellite Communication
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
