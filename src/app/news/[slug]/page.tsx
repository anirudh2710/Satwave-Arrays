import { client } from "../../../sanity/client";
import { cn, getCategoryColor } from '../../../lib/utils';
import { SINGLE_NEWS_QUERY } from "../../../sanity/queries";
import { urlFor } from "../../../sanity/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { notFound } from "next/navigation";

// Revalidate every 60 seconds
export const revalidate = 60;

interface NewsArticleProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function NewsArticlePage({ params }: NewsArticleProps) {
    const { slug } = await params;
    console.log("Fetching article for slug:", slug);
    const article = await client.fetch(SINGLE_NEWS_QUERY, { slug });

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-brand-black relative">
            <div className="absolute inset-0 z-0 bg-newsletter-detail" />
            <div className="relative z-10 w-full flex flex-col flex-grow">
                {/* Navbar */}
                <Navbar />

                {/* Navigation and Metadata Row */}
                <div className="max-w-4xl mx-auto px-6 pt-32 pb-6 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                        {/* Back Button - Left */}
                        <Link href="/news" className="group inline-flex items-center text-brand-accent hover:bg-white/10 transition-all px-3 py-2 rounded-md self-start sm:self-auto">
                            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to News
                        </Link>

                        {/* Category & Date - Right */}
                        <div className="flex flex-wrap items-center gap-4 self-start sm:self-auto">
                            <span className={cn("px-4 py-1.5 rounded-full text-sm font-medium border", getCategoryColor(article.category))}>
                                {article.category || 'News'}
                            </span>
                            <span className="text-gray-500 text-sm">
                                {new Date(article.publishedAt).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Article */}
                <article className="max-w-4xl mx-auto px-6 pb-12 w-full flex-grow">

                    {/* Headline */}
                    <h1 className="text-5xl font-bold text-white mb-8 uppercase leading-tight">
                        {article.title}
                    </h1>

                    {/* Featured Image */}
                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20 mb-12 relative">
                        {article.mainImage ? (
                            <img
                                src={urlFor(article.mainImage).url()}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-9xl">
                                📰
                            </div>
                        )}
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                    prose-h2:text-3xl prose-h3:text-2xl
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:text-gray-300 prose-ul:my-6
                    prose-li:mb-2
                    prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-brand-accent prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-4">
                        {article.body && <PortableText value={article.body} />}
                    </div>

                    {/* Share/Contact Section */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <p className="text-gray-400 text-center">
                            For more information, please <Link href="/#contact" className="text-brand-accent hover:underline">contact us</Link>
                        </p>
                    </div>
                </article>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
