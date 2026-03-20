'use client';

import { motion } from 'framer-motion';

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
            image: "/large-scale-array/image003.png",
            description: "Advanced 32×32 AESA systems for Ku and Ka-band"
        },
        {
            id: "em-simulation",
            title: "Electromagnetic Simulation & Modeling",
            icon: "🔬",
            image: "/em-sim/image004.png",
            description: "Data-driven EM design validation and analysis"
        },
        {
            id: "acu",
            title: "Proprietary Antenna Control Unit (ACU)",
            icon: "⚙️",
            image: "/proprietory-antenna-control-unit/proprietory-a-c-u.jpg",
            description: "In-house ACU with OPENAMIP/OPENBMIP support"
        },
        {
            id: "tracking",
            title: "Tracking & Control Algorithms",
            icon: "🎯",
            image: "/tracking-control/image.png",
            description: "Conical scan techniques for LEO, MEO and GEO satellites"
        },
        {
            id: "validation",
            title: "Measurement & Validation",
            icon: "📊",
            image: "/measurement-and-validation/image002.png",
            description: "Extensive testing in near-field and compact ranges"
        },
        {
            id: "next-gen",
            title: "Next-Generation Systems",
            icon: "🚀",
            image: "/em-sim/image006.gif",
            description: "R&D into multi-band, digital beamforming, and AI-driven designs"
        }
    ];

    return (
        <div className="min-h-screen bg-brand-black flex flex-col relative z-0 overflow-x-hidden">
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
                        <motion.h1
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white text-center uppercase tracking-tight mb-12 mt-4 leading-tight"
                        >
                            Our Phased Array Technology
                        </motion.h1>

                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
                            className="grid md:grid-cols-2 gap-8 mb-4 w-full"
                        >
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}>
                                <Card className="glass-card group border-brand-black/30 w-full hover:border-brand-accent/50 transition-colors h-full">
                                    <CardContent className="p-6 h-full flex flex-col justify-start text-left">
                                        <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-brand-accent transition-colors">Our Approach</h3>
                                        <p className="text-lg/relaxed text-gray-300 leading-relaxed font-light">
                                            Our innovative approach includes an end-to-end structure that starts with array designs using simulations and modeling, developing critical components such as antenna control unit, software and satellite tracking algorithms and finally integrating them into antennas for measurement and validation through multiple rounds of testing planar near field and compact test ranges.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}>
                                <Card className="glass-card group border-brand-black/30 w-full hover:border-brand-accent/50 transition-colors h-full">
                                    <CardContent className="p-6 h-full flex flex-col justify-start text-left">
                                        <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-brand-accent transition-colors">Engineering Philosophy</h3>
                                        <ul className="text-lg/relaxed text-gray-300 font-light leading-relaxed list-disc pl-6 space-y-3">
                                            <li><strong className="text-white font-semibold flex-shrink-0">Data-Driven Design:</strong> Simulation is always paired with real-world measurements.</li>
                                            <li><strong className="text-white font-semibold flex-shrink-0">Open-Book Engineering:</strong> Customers receive detailed performance data and validation reports.</li>
                                            <li><strong className="text-white font-semibold flex-shrink-0">Iterative Development:</strong> Design → test → refine → re-test</li>
                                            <li><strong className="text-white font-semibold flex-shrink-0">Transparency & Reliability:</strong> No performance claims without measured proof.</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Topic Cards Grid */}
                <section className="relative z-10 py-16">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {topics.map((topic) => (
                                <motion.div
                                    key={topic.id}
                                    variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
                                >
                                    <Link href={`/technology/${topic.id}`}>
                                        <Card className="group glass-card border-brand-black/30 hover:border-brand-accent/50 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                                            <CardContent className="p-0">
                                                {/* Image Placeholder */}
                                                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20">
                                                    {topic.image ? (
                                                        <img src={topic.image} alt={topic.title} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-6xl">
                                                            {topic.icon}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="p-6">
                                                    <h3 className="text-white uppercase font-bold text-lg mb-3 group-hover:text-brand-accent transition-colors">
                                                        {topic.title}
                                                    </h3>
                                                    <p className="uppercase text-gray-400 text-sm leading-relaxed">
                                                        {topic.description}
                                                    </p>
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
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
