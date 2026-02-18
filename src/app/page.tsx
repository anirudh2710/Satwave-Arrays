'use client';

import { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

export default function Home() {
    const [aboutTab, setAboutTab] = useState('overview');

    // Read aboutTab from URL params on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tabParam = params.get('aboutTab');
        if (tabParam) {
            setAboutTab(tabParam);
        }
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="relative">
            <Hero scrollTo={scrollTo} setAboutTab={setAboutTab} />
            <div className="relative z-10">
                <About activeTab={aboutTab} onTabChange={setAboutTab} />
                <Technology />
                <ContactUs />
                <Footer />
            </div>
        </main>
    );
}
