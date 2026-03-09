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

export default function TechnologyPage() {
    const topics = [
        {
            id: "phased-array",
            title: "Large-Scale Phased Array System Development",
            icon: "📡",
            description: "Advanced 32×32 AESA systems for Ku and Ka-band"
        },
        {
            id: "em-simulation",
            title: "Electromagnetic Simulation & Modeling",
            icon: "🔬",
            description: "Data-driven EM design validation and analysis"
        },
        {
            id: "acu",
            title: "Proprietary Antenna Control Unit (ACU)",
            icon: "⚙️",
            description: "In-house ACU with OPENAMIP/OPENBMIP support"
        },
        {
            id: "tracking",
            title: "Tracking & Control Algorithms",
            icon: "🎯",
            description: "Conical scan techniques for LEO and GEO satellites"
        },
        {
            id: "validation",
            title: "Measurement & Validation",
            icon: "📊",
            description: "Extensive testing in near-field and compact ranges"
        },
        {
            id: "next-gen",
            title: "Next-Generation Systems",
            icon: "🚀",
            description: "R&D into multi-band, digital beamforming, and AI-driven designs"
        },
        {
            id: "philosophy",
            title: "Satwave's Engineering Philosophy",
            icon: "💡",
            description: "Data-driven, transparent, and iterative development"
        }
    ];

    return (
        <div className="min-h-screen bg-brand-black flex flex-col relative z-0">
            {/* Navbar */}
            <Navbar />

            {/* Main Content Area with Background */}
            <main className="relative flex-grow">
                {/* Background spanning only main content */}
                <div className="absolute inset-0 z-[-1] technology-home-bg" />

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
                                        <BreadcrumbPage className="text-white font-medium">Technology</BreadcrumbPage>
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

                        {/* Page Header */}
                        <h1 className="text-5xl font-bold text-white text-center uppercase tracking-wider mb-4">
                            Technology Portfolio
                        </h1>
                        <p className="text-gray-400 text-center text-lg max-w-3xl mx-auto">
                            Explore our comprehensive technology portfolio in phased array antenna systems
                        </p>
                    </div>
                </section>

                {/* Topic Cards Grid */}
                <section className="relative z-10 py-16">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid md:grid-cols-3 gap-8">
                            {topics.map((topic) => (
                                <Link key={topic.id} href={`/technology/${topic.id}`}>
                                    <Card className="group glass-card border-brand-black/30 hover:border-brand-accent/50 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                                        <CardContent className="p-0">
                                            {/* Image Placeholder */}
                                            <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20">
                                                <div className="w-full h-full flex items-center justify-center text-6xl">
                                                    {topic.icon}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                {/* Title */}
                                                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-brand-accent transition-colors">
                                                    {topic.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {topic.description}
                                                </p>

                                                {/* Learn More */}
                                                <div className="mt-4 flex items-center text-brand-accent text-sm font-medium">
                                                    <span className="group-hover:underline">Learn More</span>
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
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
