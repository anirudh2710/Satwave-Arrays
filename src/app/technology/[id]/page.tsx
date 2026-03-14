'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Technology topics data
const techTopics = [
    {
        id: "phased-array",
        title: "Large-Scale Phased Array System Development",
        icon: "📡",
        image: "/large-scale-array/image003.png",
        description: "Advanced 32×32 AESA systems for Ku and Ka-band",
        content: `
            <ul class="text-gray-300 my-6 list-disc pl-6">
                <li class="mb-3 leading-relaxed">Our current Design and realization of phased array systems include:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">32×32 Ku-band AESA</li>
                        <li class="mb-2 leading-relaxed">32×32 Ka-band AESA</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">The architectures Satwave implemented include:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Stacked patch radiating elements with proprietary, ML-optimized, inner layers for 
                        wideband performance, enhanced cross-polarization, and improved efficiency at large scan angles.</li>                
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Full RF backend designed in-house</li>
                <li class="mb-3 leading-relaxed">Systems designed for scalability, modularity, and manufacturability.</li>
            </ul>
        `
    },
    {
        id: "em-simulation",
        title: "Electromagnetic Simulation & Modeling",
        icon: "🔬",
        image: "/em-sim/image005.png",
        description: "Data-driven EM design validation and analysis",
        content: `
            <ul class="text-gray-300 my-6 list-disc pl-6">
                <li class="mb-3 leading-relaxed">We rely on data-driven electromagnetic (EM) design validation and use both commercial EM solvers and internally developed (in-progress) FDTD tools for:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Large-scale array analysis.</li>
                        <li class="mb-2 leading-relaxed">Element-to-element coupling studies.</li>
                        <li class="mb-2 leading-relaxed">Wide-scan and broadband performance prediction.</li>
                        <li class="mb-2 leading-relaxed">Continuous correlation between simulation.</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: "validation",
        title: "Measurement & Validation",
        icon: "📊",
        image: "/measurement-and-validation/image002.png",
        description: "Extensive antenna testing in:",
        content: `
            <ul class="text-gray-300 my-6 list-disc pl-6">
                <li class="mb-3 leading-relaxed">Extensive antenna testing in:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Planar near-field measurement chambers</li>
                        <li class="mb-2 leading-relaxed">Compact range antenna measurement facilities</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Validation across:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Multiple frequencies</li>
                        <li class="mb-2 leading-relaxed">Wide scan angles</li>
                        <li class="mb-2 leading-relaxed">Large beam sets</li>
                        <li class="mb-2 leading-relaxed">Specific polarization states</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Demonstrated close alignment between simulation and measured results, reinforcing model accuracy and design credibility.</li>
            </ul>
        `
    },
    {
        id: "acu",
        title: "Proprietary Antenna Control Unit & System Integration",
        icon: "⚙️",
        image: "/proprietory-antenna-control-unit/proprietory-a-c-u.jpg",
        description: "In-house ACU with OPENAMIP/OPENBMIP support",
        content: `
            <ul class="text-gray-300 my-6 list-disc pl-6">
                <li class="mb-3 leading-relaxed">Satwave Arrays has fully designed, developed, and tested its own Antenna Control Unit (ACU) in-house.</li>
                <li class="mb-3 leading-relaxed">Native support for OPENAMIP and OPENBMIP, enabling direct interoperability with commercial and defense SATCOM modems.</li>
                <li class="mb-3 leading-relaxed">The Satwave ACU manages:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Satellite acquisition and tracking</li>
                        <li class="mb-2 leading-relaxed">Beam steering and pointing control</li>
                        <li class="mb-2 leading-relaxed">Interface coordination between antenna, beamforming layer, and modem</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Enables a plug-and-play system architecture:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Connect a modem</li>
                        <li class="mb-2 leading-relaxed">Load configuration</li>
                        <li class="mb-2 leading-relaxed">Operate — no external controllers or custom integration layers required</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Designed for seamless deployment across mobile, maritime, airborne, and fixed platforms.</li>
            </ul>
        `
    },
    {
        id: "tracking",
        title: "Tracking & Control Algorithms",
        icon: "🎯",
        image: "/tracking-control/image.png",
        description: "Conical scan techniques for LEO and GEO satellites",
        content: `
            <ul class="text-gray-300 my-6 list-disc pl-6">
                <li class="mb-3 leading-relaxed">Satellite tracking algorithms based on scan techniques.</li>
                <li class="mb-3 leading-relaxed">We validate our algorithms using:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Motion platforms with roll and pitch dynamics.</li>
                        <li class="mb-2 leading-relaxed">Live tracking of MEO and GEO satellites.</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Designed for direct integration with:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">The Satwave ACU.</li>
                        <li class="mb-2 leading-relaxed">Ground segment and system-level controllers.</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Results and measured hardware to ensure model fidelity</li>
            </ul>
        `
    },
    {
        id: "next-gen",
        title: "Next-Generation Systems for New Applications",
        icon: "🚀",
        image: "/em-sim/image006.gif",
        description: "R&D into multi-band, digital beamforming, and AI-driven designs",
        content: `
            <ul class="text-gray-300 my-6 list-disc pl-6">
                <li class="mb-3 leading-relaxed">R&D into simultaneous Ku and Ka operation by antenna                    
                </li>
                <li class="mb-3 leading-relaxed">Exploration of next gen capabilities:
                    <ul class="text-gray-400 my-4 list-[circle] pl-6">
                        <li class="mb-2 leading-relaxed">Higher-frequency arrays</li>
                        <li class="mb-2 leading-relaxed">Multi-band and Multi-Beam architectures</li>
                        <li class="mb-2 leading-relaxed">True-Time Delay architectures for large scale arrays</li>
                        <li class="mb-2 leading-relaxed">Digital beamforming Arrays</li>
                        <li class="mb-2 leading-relaxed">AI/ML-driven antenna design.</li>
                    </ul>
                </li>
                <li class="mb-3 leading-relaxed">Architectures being prepared for future digital beamforming integration.</li>
            </ul>
        `
    },
    {
        id: "philosophy",
        title: "Satwave Engineering Philosophy",
        icon: "💡",
        image: "/em-sim/image004.png",
        description: "Data-driven, transparent, and iterative development",
        content: `
            <ul class="text-gray-300 my-6 list-disc pl-6">
                <li class="mb-3 leading-relaxed"><strong class="text-white font-semibold">Data-Driven Design:</strong> Simulation is always paired with real-world measurements.</li>
                <li class="mb-3 leading-relaxed"><strong class="text-white font-semibold">Open-Book Engineering:</strong> Customers receive detailed performance data and validation reports.</li>
                <li class="mb-3 leading-relaxed"><strong class="text-white font-semibold">Iterative Development:</strong> Design → test → refine → re-test</li>
                <li class="mb-3 leading-relaxed"><strong class="text-white font-semibold">Transparency & Reliability:</strong> No performance claims without measured proof.</li>
            </ul>
        `
    }
];

export default function TechnologyDetailPage() {
    const params = useParams();
    const techId = params?.id as string;

    const topic = techTopics.find(t => t.id === techId);

    if (!topic) {
        return (
            <main className="min-h-screen bg-brand-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Topic Not Found</h1>
                    <Link href="/technology" className="text-brand-accent hover:underline">
                        Back to Technology Portfolio
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <div className="min-h-screen bg-brand-black relative z-0 flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0 z-[-1] bg-tech-detail" />

            {/* Navbar */}
            <Navbar />

            {/* Main Content Wrapper (Grows to push footer down) */}
            <div className="flex-grow flex flex-col">
                {/* Header / Navigation Row */}
                <div className="max-w-4xl mx-auto px-6 pt-32 pb-6 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-400 hover:text-brand-accent transition-colors">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-gray-600" />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/technology" className="text-gray-400 hover:text-brand-accent transition-colors">Technology</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-gray-600" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-white font-medium">{topic.title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <Link href="/technology" className="group inline-flex items-center text-brand-accent hover:bg-white/10 transition-all px-3 py-2 rounded-md self-start sm:self-auto">
                            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Portfolio
                        </Link>
                    </div>

                    {/* Title Section */}
                    <div className="flex flex-col items-center sm:items-start gap-6 mb-12 text-center sm:text-left text-brand-accent">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight uppercase tracking-tight">
                                {topic.title}
                            </h1>
                            <p className="text-brand-accent text-lg sm:text-xl mt-4 font-medium italic opacity-80">
                                {topic.description}
                            </p>
                        </div>
                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20 mb-12 relative flex items-center justify-center text-9xl">
                            {topic.image ? (
                                <img src={topic.image} alt={topic.title} className="w-full h-full object-cover" />
                            ) : (
                                topic.icon
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <section className="max-w-4xl mx-auto px-6 pb-24 w-full flex-grow">
                    <div className="glass-card p-10 border-brand-black/30 bg-brand-black/5">
                        <div
                            className="max-w-none text-brand-accent"
                            dangerouslySetInnerHTML={{ __html: topic.content }}
                        />
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 pt-8 border-t border-white/10 text-center">
                        <p className="text-gray-400 mb-8">
                            Interested in our technology or have specific requirements?
                        </p>
                        <Link href="/#contact">
                            <button className="btn-brand h-auto px-4 md:px-8 py-3 md:py-4 text-xs md:text-sm">
                                Contact Our Engineering Team
                            </button>
                        </Link>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
