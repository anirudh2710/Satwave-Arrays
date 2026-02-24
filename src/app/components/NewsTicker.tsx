'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

interface NewsItem {
    title: string;
    slug: string;
    publishedAt: string;
    category: string;
}

interface NewsTickerProps {
    news: NewsItem[];
}

export default function NewsTicker({ news }: NewsTickerProps) {
    const [isPaused, setIsPaused] = useState(false);

    if (news.length === 0) return null;

    // Only duplicate and scroll if we have more than 3 items
    const shouldScroll = news.length > 3;
    const tickerContent = shouldScroll ? [...news, ...news] : news;

    return (
        <div className="relative z-10 py-6 pb-12 md:pb-16 lg:pb-20">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <h4 className="text-white text-lg md:text-xl font-bold uppercase tracking-wider">Latest News</h4>
                <Link href="/news" className="transition-colors text-sm font-medium" >
                    <Button className="btn-brand uppercase h-auto px-4 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-widest">
                        View All →
                    </Button>
                </Link>
            </div>

            {/* Auto-scrolling News Ticker */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
                <div
                    className={`flex gap-6 ${!shouldScroll ? 'justify-start overflow-x-auto no-scrollbar pb-4' : ''}`}
                    style={shouldScroll ? {
                        animation: 'scroll 30s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running',
                    } : {}}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {tickerContent.map((item, index) => (
                        <Link
                            key={`${item.slug}-${index}`}
                            href={`/news/${item.slug}`}
                            className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[450px]"
                        >
                            <Card className="py-2 group glass-card border-brand-black/30 hover:border-brand-accent hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer h-full">
                                <CardContent className="p-6 md:p-6">
                                    <h3 className="text-white uppercase text-xl md:text-2xl font-bold leading-snug group-hover:text-brand-accent transition-colors line-clamp-2 mb-6 h-[4rem]">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center text-brand-accent text-xs font-medium">
                                            <span className="text-brand-accent relative group-hover:underline underline-offset-2 decoration-1">
                                                Read More
                                            </span>
                                            <svg className="w-3 h-3 ml-1 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <span className="inline-block px-2 md:px-3 py-0.5 bg-light-gray-secondary text-cool-off-white rounded-full text-xs font-medium border border-brand-black/30 group-hover:bg-brand-accent/20 group-hover:border-brand-accent transition-all whitespace-nowrap">
                                            {item.category}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
