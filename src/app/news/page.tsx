'use client';

import { Card, CardContent } from "@/components/ui/card";
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

// Sample news data - replace with your actual content
const newsArticles = [
    {
        id: "article-1",
        headline: "Satwave Launches Next-Generation Ka-Band Antenna",
        image: "/news/placeholder-1.jpg",
        excerpt: "Revolutionary phased array technology enables seamless LEO/MEO satellite connectivity for maritime and aviation applications.",
        date: "February 2026",
        category: "Product Launch"
    },
    {
        id: "article-2",
        headline: "Expanding Global Connectivity: New Partnership Announcement",
        image: "/news/placeholder-2.jpg",
        excerpt: "Strategic collaboration brings advanced satellite communication solutions to underserved markets worldwide.",
        date: "January 2026",
        category: "Partnership"
    },
    {
        id: "article-3",
        headline: "Innovation in Satellite Communications: Q4 2025 Highlights",
        image: "/news/placeholder-3.jpg",
        excerpt: "A look back at our achievements in advancing phased array antenna technology and customer deployments.",
        date: "December 2025",
        category: "Company News"
    },
    {
        id: "article-4",
        headline: "Satwave Receives Industry Recognition for Technical Excellence",
        image: "/news/placeholder-4.jpg",
        excerpt: "Award recognizes breakthrough innovations in electronically steered antenna systems for mobile platforms.",
        date: "November 2025",
        category: "Awards"
    },
    {
        id: "article-5",
        headline: "Maritime Connectivity Revolution: Case Study",
        image: "/news/placeholder-5.jpg",
        excerpt: "How our Ku-Band antenna is transforming communications for commercial shipping fleets.",
        date: "October 2025",
        category: "Case Study"
    },
    {
        id: "article-6",
        headline: "Technology Deep Dive: Phased Array Antenna Design",
        image: "/news/placeholder-6.jpg",
        excerpt: "An inside look at the engineering innovations powering our next-generation satellite communication systems.",
        date: "September 2025",
        category: "Technology"
    },
];

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-[#0A0C1F]">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <section className="section-bg-container border-b border-white/5 pt-20">
                <div className="section-bg topo-pattern" />
                <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                    {/* Breadcrumb and Back Link Row */}
                    <div className="mb-6 flex items-center justify-between">
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

                    <h1 className="text-5xl font-bold text-white text-center uppercase tracking-wider mb-4">
                        News & Information
                    </h1>
                    <p className="text-gray-400 text-center text-lg max-w-3xl mx-auto">
                        Stay updated with the latest developments, product launches, and insights from Satwave
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {newsArticles.map((article) => (
                        <Link key={article.id} href={`/news/${article.id}`}>
                            <Card className="group glass-card border-brand-blue/30 hover:border-brand-accent/50 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                                <CardContent className="p-0">
                                    {/* Image */}
                                    <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-blue/20 to-brand-accent/20">
                                        <div className="w-full h-full flex items-center justify-center text-6xl">
                                            📰
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Category & Date */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-3 py-1 bg-brand-blue/20 text-brand-accent rounded-full text-xs font-medium border border-brand-blue/30">
                                                {article.category}
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                {article.date}
                                            </span>
                                        </div>

                                        {/* Headline */}
                                        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-brand-accent transition-colors">
                                            {article.headline}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {article.excerpt}
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
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
