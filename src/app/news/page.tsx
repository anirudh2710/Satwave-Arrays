import { Card, CardContent } from "@/components/ui/card";
import { cn, getCategoryColor } from '@/lib/utils';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { client } from "../../sanity/client";
import { ALL_NEWS_QUERY } from "../../sanity/queries";
import { urlFor } from "../../sanity/image";

// Revalidate every 60 seconds
export const revalidate = 60;

interface NewsArticle {
    title: string;
    slug: string;
    mainImage?: any;
    publishedAt: string;
    category?: string;
    body?: any;
}

export default async function NewsPage() {
    let newsArticles: NewsArticle[] = [];

    try {
        newsArticles = await client.fetch(ALL_NEWS_QUERY);
    } catch (error) {
        console.error("Failed to fetch news:", error);
    }

    return (
        <div className="min-h-screen bg-brand-black flex flex-col relative z-0 overflow-x-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Main Content Area with Background */}
            <main className="relative flex-grow">
                {/* Background spanning only main content */}
                <div className="absolute inset-0 z-[-1] news-bg" />

                {/* Header */}
                <section className="relative z-10 border-b border-white/5 pt-20">
                    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                        {/* Breadcrumb and Back Link Row */}
                        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/" className="text-gray-400 hover:text-brand-accent transition-colors">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-gray-600" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-white font-medium">News & Information</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            <Link href="/" className="group inline-flex items-center text-brand-accent hover:bg-white/10 transition-all px-3 py-2 rounded-md">
                                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Go Back
                            </Link>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center uppercase tracking-wider mb-4">
                            News & Information
                        </h1>
                        <p className="text-gray-400 text-center text-lg max-w-3xl mx-auto">
                            Stay updated with the latest developments, product launches, and insights from Satwave
                        </p>
                    </div>
                </section>

                {/* News Grid */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    {newsArticles.length === 0 ? (
                        <div className="text-center text-gray-400 py-20">
                            <p>No news articles found at the moment.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {newsArticles.map((article) => (
                                <Link key={article.slug} href={`/news/${article.slug}`}>
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

                                                {/* Excerpt - manually truncated or needs a field */}
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
                            ))}
                        </div>
                    )}
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
