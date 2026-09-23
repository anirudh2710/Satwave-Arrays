import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeading from '../components/AnimatedHeading';
import JobOpeningsClient, { JobPosting } from './JobOpeningsClient';
import { client } from '../../sanity/client';
import { ALL_JOBS_QUERY } from '../../sanity/queries';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Sparkles } from 'lucide-react';

export const revalidate = 60;

export default async function CareersPage() {
    let jobs: JobPosting[] = [];

    try {
        jobs = await client.fetch(ALL_JOBS_QUERY);
    } catch (error) {
        console.error('Failed to fetch jobs from Sanity:', error);
    }

    return (
        <div className="min-h-screen bg-brand-black flex flex-col relative z-0 overflow-x-hidden">
            {/* Top Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative flex-grow">
                {/* Background Texture */}
                <div className="absolute inset-0 z-[-1] news-bg opacity-30" />

                {/* Hero / Header Section */}
                <section className="relative z-10 border-b border-white/5 pt-20">
                    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                        {/* Breadcrumbs & Return Button */}
                        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/" className="text-gray-400 hover:text-white transition-colors">
                                            Home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-gray-600" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-white font-medium">Careers</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            <Link
                                href="/"
                                className="group inline-flex items-center text-white hover:bg-white/10 transition-all px-3 py-2 rounded-md"
                            >
                                <svg
                                    className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Go Back
                            </Link>
                        </div>

                        {/* Title & Tagline */}
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-gray-300 mb-6">
                                <Sparkles className="w-3.5 h-3.5 text-white" />
                                Open Opportunities
                            </div>
                            <AnimatedHeading className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
                                Careers at Satwave
                            </AnimatedHeading>
                            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
                                Join a world-class team advancing the frontier of intelligent active phased array technology and space connectivity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Job Openings Section - Shows only role cards by default, modal opens on click */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <JobOpeningsClient jobs={jobs} />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
