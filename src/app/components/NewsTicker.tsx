'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { cn, getCategoryColor } from '@/lib/utils';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

interface NewsItem {
    title: string;
    slug: string;
    publishedAt: string;
    category: string;
    excerpt?: string;
}

interface NewsTickerProps {
    news: NewsItem[];
}

export default function NewsTicker({ news }: NewsTickerProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    if (news.length === 0) return null;

    return (
        <div className="relative z-10 pt-0 pb-4 md:pb-8 lg:pb-12">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-3 px-4 sm:px-12 flex items-center justify-between gap-6">
                <h4 className="text-white text-base md:text-lg font-bold uppercase tracking-wider">Latest News</h4>
                <Link href="/news" className="transition-colors text-sm font-medium" >
                    <Button className="btn-brand uppercase h-auto px-4 md:px-6 py-1.5 md:py-2 text-[10px] md:text-xs tracking-widest">
                        View All →
                    </Button>
                </Link>
            </div>

            {/* Carousel News Ticker */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-12">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {news.map((item) => (
                            <CarouselItem key={item.slug} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <Link
                                    href={`/news/${item.slug}`}
                                    className="block h-full"
                                >
                                    <Card className="py-2 group rounded-lg glass-card border-brand-black/30 transition-all duration-300 cursor-pointer h-full">
                                        <CardContent className="p-4 md:p-5 flex flex-col justify-between h-auto min-h-[120px]">
                                            <div>
                                                <h4 className="text-white uppercase text-base md:text-lg font-bold leading-snug transition-colors line-clamp-2">
                                                    {item.title}
                                                </h4>
                                                {item.excerpt && (
                                                    <p className="text-gray-400 text-sm mt-3 line-clamp-1">
                                                        {item.excerpt}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between gap-3 mt-4">
                                                <div className="flex items-center text-xs font-medium">
                                                    <span className="relative group-hover:underline underline-offset-2 decoration-1">
                                                        Read More
                                                    </span>
                                                    <svg className="w-3 h-3 ml-1 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <span className={cn("inline-block px-2 md:px-3 py-0.5 rounded-full text-xs font-medium border whitespace-nowrap", getCategoryColor(item.category))}>
                                                    {item.category}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Arrows */}
                    <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 border-white/20 bg-white/10 text-white hover:text-white transition-all duration-300 hover:scale-110" />
                    <CarouselNext className="hidden sm:flex -right-4 md:-right-12 border-white/20 bg-white/10 text-white hover:text-white transition-all duration-300 hover:scale-110" />
                </Carousel>

                {/* Dot Indicators */}
                <div className="hidden">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={`h-2.5 rounded-full transition-all duration-500 ease-out border border-transparent ${index === current
                                ? "w-8"
                                : "bg-brand-black/60 w-2.5 hover:bg-brand-black/80 hover:border-brand-black/50"
                                }`}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
