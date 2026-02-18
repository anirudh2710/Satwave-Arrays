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
        description: "Advanced 32×32 AESA systems for Ku and Ka-band",
        content: `
            <p>Satwave incorporated two 32×32 arrays – one each for transmit and receive - into our basic design for the antenna as it would demonstrate the optimal performance (G/T and EiRP), especially for use with Geo-stationary satellites. However, the antennas are configurable to the customer’s requirements and application environment.</p>

            <h3>Our current Design and realization of large-scale phased array systems include:</h3>
            <ul>
                <li>Two 32×32 Full Duplex Ku-band AESA</li>
                <li>Two 32×32 Full Duplex Ka-band AESA</li>
            </ul>

            <h3>The architectures Satwave implemented include:</h3>
            <ul>
                <li>Stacked patch radiating elements for wideband performance</li>
                <li>Sequentially rotated elements to improve polarization purity</li>
                <li>Proprietary inner-layer PCB solutions to enhance cross-polarization and efficiency at wide scan angles (not validated yet)</li>
            </ul>

            <h3>Full RF backend designed in-house, including:</h3>
            <ul>
                <li>Custom Wilkinson power dividers (Ku and Ka)</li>
                <li>RF distribution networks and coaxial via transitions</li>
                <li>Integration with analog beamformer ICs, aiming future compatibility for digital beamformers</li>
            </ul>

            <p>Systems designed for scalability, modularity, and manufacturability.</p>
        `
    },
    {
        id: "em-simulation",
        title: "Electromagnetic Simulation & Modeling",
        icon: "🔬",
        description: "Data-driven EM design validation and analysis",
        content: `
            <ul>
                <li>We rely on data-driven electromagnetic (EM) design validation and use both commercial EM solvers and internally developed (in-progress) FDTD tools for:
                    <ul>
                        <li>Large-scale array analysis.</li>
                        <li>Element-to-element coupling studies.</li>
                        <li>Wide-scan and broadband performance prediction.</li>
                        <li>Continuous correlation between simulation.</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: "acu",
        title: "Proprietary Antenna Control Unit & System Integration",
        icon: "⚙️",
        description: "In-house ACU with OPENAMIP/OPENBMIP support",
        content: `
            <ul>
                <li>Satwave Arrays has fully designed, developed, and tested its own Antenna Control Unit (ACU) in-house.</li>
                <li>Native support for OPENAMIP and OPENBMIP, enabling direct interoperability with commercial and defense SATCOM modems.</li>
                <li>The Satwave ACU manages:
                    <ul>
                        <li>Satellite acquisition and tracking</li>
                        <li>Beam steering and pointing control</li>
                        <li>Interface coordination between antenna, beamforming layer, and modem</li>
                    </ul>
                </li>
                <li>Enables a plug-and-play system architecture:
                    <ul>
                        <li>Connect a modem</li>
                        <li>Load configuration</li>
                        <li>Operate — no external controllers or custom integration layers required</li>
                    </ul>
                </li>
                <li>Designed for seamless deployment across mobile, maritime, airborne, and fixed platforms.</li>
            </ul>
        `
    },
    {
        id: "tracking",
        title: "Tracking & Control Algorithms",
        icon: "🎯",
        description: "Conical scan techniques for LEO and GEO satellites",
        content: `
            <ul>
                <li>Our antennas use Satwave-developed satellite tracking algorithms based on conical scan techniques.</li>
                <li>We validate our algorithms using:
                    <ul>
                        <li>Motion platforms with roll and pitch dynamics.</li>
                        <li>Live tracking of LEO and GEO satellites.</li>
                    </ul>
                </li>
                <li>Designed for direct integration with:
                    <ul>
                        <li>The Satwave ACU.</li>
                        <li>Ground segment and system-level controllers.</li>
                    </ul>
                </li>
                <li>Results and measured hardware to ensure model fidelity</li>
            </ul>
        `
    },
    {
        id: "validation",
        title: "Measurement & Validation",
        icon: "📊",
        description: "Extensive testing in near-field and compact ranges",
        content: `
            <ul>
                <li>Extensive antenna testing in:
                    <ul>
                        <li>Planar near-field measurement chambers</li>
                        <li>Compact range antenna measurement facilities</li>
                    </ul>
                </li>
                <li>Validation across:
                    <ul>
                        <li>Multiple frequencies</li>
                        <li>Wide scan angles</li>
                        <li>Large beam sets</li>
                        <li>Specific polarization states</li>
                    </ul>
                </li>
                <li>Demonstrated close alignment between simulation and measured results, reinforcing model accuracy and design credibility.</li>
            </ul>
        `
    },
    {
        id: "next-gen",
        title: "Next-Generation Systems for New Applications",
        icon: "🚀",
        description: "R&D into multi-band, digital beamforming, and AI-driven designs",
        content: `
            <ul>
                <li>We continue to perform R&D into simultaneous Ku and Ka operation by antenna, including:
                    <ul>
                        <li>Ku TX + Ka TX</li>
                        <li>Ku RX + Ka RX</li>
                    </ul>
                </li>
                <li>Exploration of next gen capabilities:
                    <ul>
                        <li>Higher-frequency arrays</li>
                        <li>Multi-band and Multi-Beam architectures</li>
                        <li>True-Time Delay architectures</li>
                        <li>Digital beamforming Arrays</li>
                        <li>AI-driven geometries.</li>
                    </ul>
                </li>
                <li>Architectures being prepared for future digital beamforming integration.</li>
            </ul>
        `
    },
    {
        id: "philosophy",
        title: "Satwave Engineering Philosophy",
        icon: "💡",
        description: "Data-driven, transparent, and iterative development",
        content: `
            <ul>
                <li>Data-Driven Design: Simulation is always paired with real-world measurements.</li>
                <li>Open-Book Engineering: Customers receive detailed performance data and validation reports.</li>
                <li>Iterative Development: Design → test → refine → re-test</li>
                <li>Transparency & Reliability: No performance claims without measured proof.</li>
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
            <main className="min-h-screen bg-[#0A0C1F] flex items-center justify-center">
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
        <div className="min-h-screen bg-[#0A0C1F]">
            {/* Navbar */}
            <Navbar />

            {/* Header / Navigation Row */}
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-6">
                <div className="flex items-center justify-between mb-8">
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

                    <Link href="/technology" className="group inline-flex items-center text-brand-accent hover:bg-white/10 transition-all px-3 py-2 rounded-md">
                        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Portfolio
                    </Link>
                </div>

                {/* Title Section */}
                <div className="flex items-start gap-6 mb-12">
                    <div className="text-7xl bg-brand-blue/20 p-6 rounded-2xl border border-brand-blue/30">
                        {topic.icon}
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-white leading-tight uppercase tracking-tight">
                            {topic.title}
                        </h1>
                        <p className="text-brand-accent text-xl mt-4 font-medium italic opacity-80">
                            {topic.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <section className="max-w-4xl mx-auto px-6 pb-24">
                <div className="glass-card p-10 border-brand-blue/30 bg-brand-blue/5">
                    <div
                        className="prose prose-invert prose-lg max-w-none
                            prose-headings:text-white prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                            prose-h2:text-3xl prose-h3:text-2xl prose-h3:text-brand-accent/90
                            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                            prose-ul:text-gray-300 prose-ul:my-6
                            prose-li:mb-3 prose-li:leading-relaxed
                            prose-strong:text-brand-accent"
                        dangerouslySetInnerHTML={{ __html: topic.content }}
                    />
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400 mb-8">
                        Interested in our technology or have specific requirements?
                    </p>
                    <Link href="/#contact">
                        <button className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/80 text-white font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,37,122,0.3)] hover:shadow-[0_0_30px_rgba(34,37,122,0.5)]">
                            Contact Our Engineering Team
                        </button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
