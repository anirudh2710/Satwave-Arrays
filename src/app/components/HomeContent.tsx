'use client';

import { useState, useEffect } from 'react';
import Hero from "./Hero";
import AntennaShowcase from "./AntennaShowcase";
import About from "./About";
import ContactUs from "./ContactUs";
import Technology from "./Technology";
import Footer from "./Footer";

interface NewsItem {
    title: string;
    slug: string;
    publishedAt: string;
    category: string;
}

interface HomeContentProps {
    news: NewsItem[];
}

export default function HomeContent({ news }: HomeContentProps) {
    const [aboutTab, setAboutTab] = useState('overview');

    // Read aboutTab from URL params and handle hash navigation on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tabParam = params.get('aboutTab');
        if (tabParam) {
            setAboutTab(tabParam);
        }

        // If there's a hash in the URL, instantly scroll to that section
        // This prevents scrolling through the antenna showcase when navigating from other pages
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({ behavior: 'instant' });
            }, 100);
        }
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    };

    return (
        <main className="relative">
            <Hero scrollTo={scrollTo} setAboutTab={setAboutTab} news={news} />
            <AntennaShowcase />
            <div className="relative z-10">
                <About activeTab={aboutTab} onTabChange={setAboutTab} />
                <Technology />
                <ContactUs />
                <Footer />
            </div>
        </main>
    );
}
