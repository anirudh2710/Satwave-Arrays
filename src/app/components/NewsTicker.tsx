'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { client } from '../../sanity/client';
import { NEWS_TICKER_QUERY } from '../../sanity/queries';
import { Button } from '@/components/ui/button';

interface NewsItem {
    title: string;
    slug: string;
    publishedAt: string;
    category: string;
}

export default function NewsTicker() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await client.fetch(NEWS_TICKER_QUERY);
                setNews(data);
            } catch (error) {
                console.error("Failed to fetch news ticker data:", error);
            }
        };

        fetchNews();
    }, []);

    if (news.length === 0) return null;

    // Only duplicate and scroll if we have more than 3 items
    const shouldScroll = news.length > 3;
    const tickerContent = shouldScroll ? [...news, ...news] : news;

    return (
        <div className="relative z-10 border-t border-white/10 py-6 pb-12 md:pb-16 lg:pb-20 news-ticker-area">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wider">Latest News</h3>
                <Link href="/news" className="text-brand-accent hover:text-gray-400 transition-colors text-sm font-medium">
                    <Button variant="outline" className="btn-brand-secondary h-auto px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm uppercase font-bold border-2 border-brand-accent/50 text-brand-accent rounded hover:bg-brand-accent hover:text-white transition-all">
                        View All →
                    </Button>
                </Link>
            </div>

            {/* Auto-scrolling News Ticker */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
                <div
                    className={`flex gap-6 ${!shouldScroll ? 'justify-start overflow-x-auto pb-4' : ''}`}
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
                            className="flex-shrink-0 w-[350px]"
                        >
                            <Card className="py-2 group glass-card-light border-brand-blue/30 hover:border-brand-accent hover:shadow-[0_0_30px_rgba(75,86,210,0.4)] transition-all duration-300 cursor-pointer h-full">
                                <CardContent className="p-3 md:p-4">
                                    <h2 className="text-white leading-snug group-hover:text-brand-accent transition-colors line-clamp-2 mb-3 h-[3rem]">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center text-brand-accent text-xs font-medium">
                                            <span className="relative group-hover:underline underline-offset-2 decoration-1">
                                                Read More
                                            </span>
                                            <svg className="w-3 h-3 ml-1 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <span className="inline-block px-2 md:px-3 py-0.5 bg-light-tertiary text-cool-off-white rounded-full text-xs font-medium border border-brand-blue/30 group-hover:bg-brand-accent/20 group-hover:border-brand-accent transition-all whitespace-nowrap">
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
