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
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedNewsGrid from "../components/AnimatedNewsGrid";
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
                                        <BreadcrumbLink href="/" className="text-gray-400 hover:text-white transition-colors">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-gray-600" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-white font-medium">News & Information</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            <Link href="/" className="group inline-flex items-center text-white hover:bg-white/10 transition-all px-3 py-2 rounded-md">
                                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Go Back
                            </Link>
                        </div>

                        <AnimatedHeading className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white text-center uppercase tracking-tight mb-4 leading-tight">
                            News & Information
                        </AnimatedHeading>
                        <p className="text-gray-400 text-center text-lg max-w-3xl mx-auto">
                            Stay updated with the latest developments, product launches, and insights from Satwave
                        </p>
                    </div>
                </section>

                {/* News Grid */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <AnimatedNewsGrid articles={newsArticles} />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
