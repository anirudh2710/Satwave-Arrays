'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Sample news data - should match the data in news/page.tsx
const newsArticles = [
    {
        id: "article-1",
        headline: "Satwave Launches Next-Generation Ka-Band Antenna",
        image: "/news/placeholder-1.jpg",
        excerpt: "Revolutionary phased array technology enables seamless LEO/MEO satellite connectivity for maritime and aviation applications.",
        date: "February 2026",
        category: "Product Launch",
        content: `
            <p>Satwave is proud to announce the launch of our next-generation Ka-Band phased array antenna, representing a significant leap forward in satellite communication technology.</p>
            
            <h2>Revolutionary Technology</h2>
            <p>Our new Ka-Band antenna features advanced electronically steered beam technology, enabling seamless connectivity with LEO and MEO satellite constellations. This breakthrough allows for uninterrupted high-speed data transmission even in the most challenging mobile environments.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li>Multi-orbit satellite tracking (LEO/MEO/GEO)</li>
                <li>High-speed data rates up to 200 Mbps</li>
                <li>Compact, lightweight design for easy integration</li>
                <li>All-weather performance capability</li>
                <li>Low power consumption</li>
            </ul>
            
            <h2>Applications</h2>
            <p>The new Ka-Band antenna is designed for maritime vessels, aviation platforms, and mobile ground applications where reliable, high-bandwidth connectivity is essential.</p>
            
            <p>For more information about our Ka-Band antenna, please contact our sales team.</p>
        `
    },
    {
        id: "article-2",
        headline: "Expanding Global Connectivity: New Partnership Announcement",
        image: "/news/placeholder-2.jpg",
        excerpt: "Strategic collaboration brings advanced satellite communication solutions to underserved markets worldwide.",
        date: "January 2026",
        category: "Partnership",
        content: `
            <p>Satwave announces a strategic partnership to expand global satellite connectivity solutions to underserved markets.</p>
            
            <h2>Partnership Overview</h2>
            <p>This collaboration combines Satwave's cutting-edge phased array antenna technology with our partner's extensive network infrastructure and market presence.</p>
            
            <h2>Impact</h2>
            <p>Together, we will deliver reliable, high-speed satellite connectivity to regions that have historically lacked access to modern communication infrastructure.</p>
            
            <p>This partnership represents our commitment to bridging the digital divide and enabling connectivity for all.</p>
        `
    },
    {
        id: "article-3",
        headline: "Innovation in Satellite Communications: Q4 2025 Highlights",
        image: "/news/placeholder-3.jpg",
        excerpt: "A look back at our achievements in advancing phased array antenna technology and customer deployments.",
        date: "December 2025",
        category: "Company News",
        content: `
            <p>As we close out 2025, we reflect on a year of significant achievements and milestones in satellite communication technology.</p>
            
            <h2>Q4 Highlights</h2>
            <ul>
                <li>Successful deployment of 50+ antenna systems</li>
                <li>Launch of new Ku-Band product line</li>
                <li>Expansion of engineering team by 30%</li>
                <li>Multiple industry awards and recognition</li>
            </ul>
            
            <h2>Looking Ahead</h2>
            <p>2026 promises even more exciting developments as we continue to push the boundaries of what's possible in satellite communications.</p>
        `
    },
    {
        id: "article-4",
        headline: "Satwave Receives Industry Recognition for Technical Excellence",
        image: "/news/placeholder-4.jpg",
        excerpt: "Award recognizes breakthrough innovations in electronically steered antenna systems for mobile platforms.",
        date: "November 2025",
        category: "Awards",
        content: `
            <p>Satwave has been honored with the Satellite Innovation Award for our groundbreaking work in phased array antenna technology.</p>
            
            <h2>Award Recognition</h2>
            <p>The award recognizes our team's dedication to pushing the boundaries of satellite communication technology and delivering innovative solutions to our customers.</p>
            
            <h2>Technical Achievement</h2>
            <p>Our electronically steered antenna systems represent a significant advancement in mobile satellite communications, enabling reliable connectivity in previously challenging scenarios.</p>
        `
    },
    {
        id: "article-5",
        headline: "Maritime Connectivity Revolution: Case Study",
        image: "/news/placeholder-5.jpg",
        excerpt: "How our Ku-Band antenna is transforming communications for commercial shipping fleets.",
        date: "October 2025",
        category: "Case Study",
        content: `
            <p>Discover how Satwave's Ku-Band antenna is revolutionizing maritime communications for a major commercial shipping operator.</p>
            
            <h2>The Challenge</h2>
            <p>The customer needed reliable, high-bandwidth connectivity across global shipping routes to support operational systems, crew welfare, and real-time cargo tracking.</p>
            
            <h2>The Solution</h2>
            <p>Satwave's Ku-Band phased array antenna provided seamless multi-orbit satellite connectivity with automatic beam steering and handoff capabilities.</p>
            
            <h2>Results</h2>
            <ul>
                <li>99.9% uptime across all routes</li>
                <li>10x improvement in data speeds</li>
                <li>Significant reduction in communication costs</li>
                <li>Enhanced crew satisfaction and retention</li>
            </ul>
        `
    },
    {
        id: "article-6",
        headline: "Technology Deep Dive: Phased Array Antenna Design",
        image: "/news/placeholder-6.jpg",
        excerpt: "An inside look at the engineering innovations powering our next-generation satellite communication systems.",
        date: "September 2025",
        category: "Technology",
        content: `
            <p>Take a deep dive into the technology behind Satwave's advanced phased array antenna systems.</p>
            
            <h2>Phased Array Fundamentals</h2>
            <p>Phased array antennas use multiple antenna elements working together to electronically steer the beam without mechanical movement.</p>
            
            <h2>Our Innovation</h2>
            <p>Satwave's proprietary beamforming algorithms and RF design enable unprecedented performance in compact, cost-effective packages.</p>
            
            <h2>Key Technologies</h2>
            <ul>
                <li>Advanced digital signal processing</li>
                <li>Adaptive beamforming algorithms</li>
                <li>Multi-band RF front-end design</li>
                <li>Thermal management systems</li>
            </ul>
            
            <p>These innovations enable our antennas to deliver superior performance in the most demanding applications.</p>
        `
    },
];

export default function NewsArticlePage() {
    const params = useParams();
    const articleId = params?.id as string;

    const article = newsArticles.find(a => a.id === articleId);

    if (!article) {
        return (
            <main className="min-h-screen bg-[#0A0C1F] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                    <Link href="/news" className="text-brand-accent hover:underline">
                        Back to News
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0C1F]">
            {/* Navbar */}
            <Navbar />

            {/* Navigation and Metadata Row */}
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-6">
                <div className="flex items-center justify-between">
                    {/* Back Button - Left */}
                    <Link href="/news" className="group inline-flex items-center text-brand-accent hover:bg-white/10 transition-all px-3 py-2 rounded-md">
                        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to News
                    </Link>

                    {/* Category & Date - Right */}
                    <div className="flex items-center gap-4">
                        <span className="px-4 py-1.5 bg-brand-blue/20 text-brand-accent rounded-full text-sm font-medium border border-brand-blue/30">
                            {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                            {article.date}
                        </span>
                    </div>
                </div>
            </div>

            {/* Article */}
            <article className="max-w-4xl mx-auto px-6 pb-12">

                {/* Headline */}
                <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                    {article.headline}
                </h1>

                {/* Featured Image */}
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand-blue/20 to-brand-accent/20 mb-12">
                    <div className="w-full h-full flex items-center justify-center text-9xl">
                        📰
                    </div>
                </div>

                {/* Article Content */}
                <div
                    className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                        prose-h2:text-3xl prose-h3:text-2xl
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:text-gray-300 prose-ul:my-6
                        prose-li:mb-2
                        prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

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
    );
}
