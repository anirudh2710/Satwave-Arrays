'use client';

import { motion, type Variants } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { cn, getCategoryColor } from '@/lib/utils';
import Link from "next/link";
import { urlFor } from "../../sanity/image";

interface NewsArticle {
    title: string;
    slug: string;
    mainImage?: any;
    publishedAt: string;
    category?: string;
    body?: any;
}

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

export default function AnimatedNewsGrid({ articles }: { articles: NewsArticle[] }) {
    if (articles.length === 0) {
        return (
            <div className="text-center text-gray-400 py-20">
                <p>No news articles found at the moment.</p>
            </div>
        );
    }

    return (
        <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
        >
            {articles.map((article) => (
                <motion.div key={article.slug} variants={cardVariants}>
                    <Link href={`/news/${article.slug}`}>
                        <Card className="group glass-card border-brand-black/30 hover:border-brand-accent/50 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                            <CardContent className="p-0">
                                {/* Image */}
                                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20 relative">
                                    {article.mainImage ? (
                                        <img
                                            src={urlFor(article.mainImage).width(800).height(450).url()}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-6xl">
                                            📰
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category & Date */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={cn("px-3 py-1 rounded-full text-xs font-medium border", getCategoryColor(article.category))}>
                                            {article.category || 'News'}
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            {new Date(article.publishedAt).toLocaleDateString()}
                                        </span>
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        Click to read full story...
                                    </p>

                                    {/* Read More */}
                                    <div className="mt-4 flex items-center text-brand-accent text-sm font-medium">
                                        <span className="group-hover:underline">Read More</span>
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
