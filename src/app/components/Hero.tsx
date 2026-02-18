'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "./Navbar";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface HeroProps {
    scrollTo: (id: string) => void;
    setAboutTab?: (tab: string) => void;
}

// News headlines for ticker
const newsHeadlines = [
    {
        id: "article-1",
        headline: "Satwave Launches Next-Generation Ka-Band Antenna",
        category: "Product Launch"
    },
    {
        id: "article-2",
        headline: "Expanding Global Connectivity: New Partnership Announcement",
        category: "Partnership"
    },
    {
        id: "article-3",
        headline: "Innovation in Satellite Communications: Q4 2025 Highlights",
        category: "Company News"
    },
    {
        id: "article-4",
        headline: "Satwave Receives Industry Recognition for Technical Excellence",
        category: "Awards"
    },
    {
        id: "article-5",
        headline: "Maritime Connectivity Revolution: Case Study",
        category: "Case Study"
    },
];

export default function Hero({ scrollTo, setAboutTab }: HeroProps) {
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate cards for seamless infinite scroll
    const duplicatedNews = [...newsHeadlines, ...newsHeadlines];

    return (
        <div className="hero-container relative min-h-screen flex flex-col">
            {/* Antenna Background - Shared by both sections */}
            <div className="hero-background" />

            <Navbar scrollTo={scrollTo} setAboutTab={setAboutTab} />

            {/* Top Section - Main Content */}
            <div className="relative z-10 flex flex-col justify-center flex-grow py-20 md:py-24 lg:py-32">
                {/* Headline */}
                <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl">
                        <h1 className="uppercase text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-center w-full mb-8 md:mb-12">
                            Precision Phased Arrays for Next-Generation Satellite Communication
                        </h1>
                    </div>
                </div>
            </div>


            {/* Bottom Section - News Ticker */}
            <div className="relative z-10 border-t border-white/10 py-6 pb-12 md:pb-16 lg:pb-20 news-ticker-area">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto mb-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wider">Latest News</h3>
                    <Link href="/news" className="text-brand-accent hover:text-gray-400 transition-colors text-sm font-medium">
                        <Button variant="outline" className="btn-brand-secondary h-auto px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm uppercase font-bold border-2 transition-all hover:text-white">
                            View All →
                        </Button>
                    </Link>
                </div>

                {/* Auto-scrolling News Ticker */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
                    <div
                        className="flex gap-6"
                        style={{
                            animation: 'scroll 30s linear infinite',
                            animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {duplicatedNews.map((news, index) => (
                            <Link
                                key={`${news.id}-${index}`}
                                href={`/news/${news.id}`}
                                className="flex-shrink-0 w-[350px]"
                            >
                                <Card className="py-2 group glass-card-light border-brand-blue/30 hover:border-brand-accent hover:shadow-[0_0_30px_rgba(75,86,210,0.4)] transition-all duration-300 cursor-pointer h-full">
                                    <CardContent className="p-3 md:p-4">
                                        {/* Headline */}
                                        <h2 className="text-white leading-snug group-hover:text-brand-accent transition-colors line-clamp-2 mb-3">
                                            {news.headline}
                                        </h2>

                                        {/* Bottom Row: Read More (left) + Category Badge (right) */}
                                        <div className="flex items-center justify-between gap-3">
                                            {/* Read More */}
                                            <div className="flex items-center text-brand-accent text-xs font-medium">
                                                <span className="relative group-hover:underline underline-offset-2 decoration-1">
                                                    Read More
                                                </span>
                                                <svg className="w-3 h-3 ml-1 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>

                                            {/* Category Badge */}
                                            <span className="inline-block px-2 md:px-3 py-0.5 bg-brand-blue/20 text-brand-accent rounded-full text-xs font-medium border border-brand-blue/30 group-hover:bg-brand-accent/20 group-hover:border-brand-accent transition-all whitespace-nowrap">
                                                {news.category}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
