'use client';

import { motion } from 'framer-motion';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Autoplay from "embla-carousel-autoplay";

interface ProductsAndApplicationsProps {
    // legacy props no longer used after layout update
}

export default function ProductsAndApplications(props: ProductsAndApplicationsProps) {
    // Shared Capabilities
    const sharedCapabilities = [
        "Both antennas are designed for mobility.",
        "They are full duplex, but configurable to a customer’s needs or application.",
        "They utilize a proprietary RF architecture.",
        "To maintain total design control, the RF backend is engineered in-house.",
        "Printed Circuit Board (PCB) based design, manufacturable at lower cost at scale.",
        "Based on commercially available phased array technology – Beam-Forming Integrated Circuits (BFICs).",
        "The hardware is fully integrated with Satwave’s proprietary Antenna Control Unit.",
        "Tracking algorithm to track and hold satellites in various constellations and orbits.",
        "Thermal Management to operate in very cold as well as hot environments.",
        "Driven by FreeRTOS software, which is supported by Amazon and used by millions of devices."
    ];

    // Ku-Band product images and content
    const kuBandImages = [
        { title: "Ku-Band AESA - Back Render", description: "Compact flat panel design optimized for broadcast and VSAT communications.", image: "/Antenna_images/ku_antenna_render/optimized/01-001009-00-030226-9.png" },
        { title: "Ku-Band AESA - Front Render", description: "High-performance Ku-band phased array antenna with advanced beamforming capabilities.", image: "/Antenna_images/ku_antenna_render/optimized/01-001009-00-030226-4.png" },
        { title: "Ku-Band Antenna - Integrated Unit", description: "Precision-engineered antenna system for reliable satellite connectivity.", image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-3.JPG" },
        { title: "Ku-Band Antenna - Integrated Unit", description: "Advanced technology delivering superior performance for mobile communications.", image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-38.JPG" },
        { title: "Ku-Band Antenna - Integrated Unit", description: "State-of-the-art antenna technology for demanding environments.", image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-27.JPG" },
        { title: "Ku-Band Antenna - Integrated Unit", description: "Versatile deployment options for various platform configurations.", image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-30.JPG" },
        { title: "Ku-Band Antenna - Integrated Unit", description: "Integrated phased array system for broadcast and mobile applications.", image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-68.JPG" }
    ];

    // Ka-Band product images and content
    const kaBandImages = [
        { title: "Ka-Band AESA - Front Render", description: "High-precision Ka-band phased array antenna with advanced beamforming capabilities.", image: "/Antenna_images/ka_antenna_render/optimized/01-001005-00-030326-3.png" },
        { title: "Ka-Band AESA - Back Render", description: "Next-generation flat panel design for high-throughput satellite communications.", image: "/Antenna_images/ka_antenna_render/optimized/01-001005-00-030326-4.png" },
        { title: "Ka-Band Antenna - Production Unit", description: "Compact and lightweight design optimized for mobile and fixed installations.", image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020226-7.JPG" },
        { title: "Ka-Band Antenna - Production Unit", description: "Advanced technology delivering superior performance in demanding environments.", image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-3.JPG" },
        { title: "Ka-Band Antenna - Production Unit", description: "State-of-the-art antenna technology for military and commercial applications.", image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-4.JPG" },
        { title: "Ka-Band Antenna - Production Unit", description: "Robust construction with electronic beam steering capabilities.", image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-11.JPG" },
        // { title: "Ka-Band Antenna - Production Unit", description: "High-performance antenna system for LEO, MEO, and GEO satellite networks.", image: "/Antenna_images/ka_antenna_render/optimized/Ku_Integrated_020726-40.JPG" },
        { title: "Ka-Band Antenna - Production Unit", description: "Production-ready antenna delivering exceptional signal quality and reliability.", image: "/Antenna_images/ka_antenna_render/optimized/Ku_Integrated_020726-46.JPG" }
    ];


    return (
        <section id="products" className="section-bg-container section-container border-b border-white/5">
            <div className="section-bg products-bg" />
            <div className="w-full py-24 relative z-10">
                {/* <h2 className="text-4xl font-bold mb-12 text-white text-center uppercase tracking-wider">
                    Products & Applications
                </h2> */}

                {/* Breadcrumb */}
                <div className="mb-8 max-w-7xl mx-auto px-6">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-gray-400 hover:text-brand-accent transition-colors">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-600" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white font-medium">Products</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                {/* Introduction Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight"
                    >
                        Mission-Critical AESA Technology
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        className="text-lg text-gray-300 leading-relaxed"
                    >
                        Satwave builds Active Electronically Steered Arrays (AESA) for <span className="text-brand-accent font-semibold">Ku-band and Ka-Band</span> frequencies to connect with satellites on any constellation on any orbit. As developed and tested by us, there are several commonalities between Satwave's Ku-Band and Ka-Band antennas – their capabilities are centered on high-performance AESAs designed for mission-specific applications in defense and aerospace.
                    </motion.p>
                </div>

                {/* Row 1: Carousels Only */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
                    className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto mb-16 px-6"
                >
                    {/* Ku-Band Carousel */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
                        className="w-full flex justify-center"
                    >
                        <div className="w-full">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center tracking-wide uppercase">Ku-Band Antenna</h3>
                            <Carousel
                                className="w-full px-10"
                                plugins={[
                                    Autoplay({
                                        delay: 8000,
                                        stopOnInteraction: true,
                                    })
                                ]}
                            >
                                <CarouselContent>
                                    {kuBandImages.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 bg-transparent">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:text-white text-white left-0 shadow-lg" />
                                <CarouselNext className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:text-white text-white right-0 shadow-lg" />
                            </Carousel>
                        </div>
                    </motion.div>

                    {/* Ka-Band Carousel */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
                        className="w-full flex justify-center"
                    >
                        <div className="w-full">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center tracking-wide uppercase">Ka-Band Antenna</h3>
                            <Carousel
                                className="w-full px-10"
                                plugins={[
                                    Autoplay({
                                        delay: 8000,
                                        stopOnInteraction: true,
                                    })
                                ]}
                            >
                                <CarouselContent>
                                    {kaBandImages.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-transparent">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:text-white text-white left-0 shadow-lg" />
                                <CarouselNext className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:text-white text-white right-0 shadow-lg" />
                            </Carousel>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Row 2: Shared Capabilities Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="w-full mb-16 px-4 sm:px-8 lg:px-12"
                >
                    <Accordion type="single" collapsible defaultValue="capabilities" className="w-full max-w-none">
                        <AccordionItem value="capabilities" className="border-white/10 glass-card bg-brand-black/20 px-6 md:px-12 lg:px-24 rounded-2xl">
                            <AccordionTrigger className="text-xl font-bold text-white justify-center hover:text-brand-accent transition-colors py-6 hover:no-underline">
                                Our Shared Approach for Ku-Band & Ka-Band Antennas
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
                                    {sharedCapabilities.map((capability, idx) => (
                                        <div key={idx} className="relative overflow-hidden bg-brand-black/40 backdrop-blur-md border border-white/10 p-6 hover:border-brand-accent/50 hover:bg-brand-black/60 transition-all duration-300 group h-full rounded-lg">
                                            {/* Subtle Glowing Accent Line at the top */}
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Accent gradient blob in the background on hover */}
                                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>

                                            <span className="relative z-10 text-base sm:text-lg leading-relaxed font-medium text-gray-300 group-hover:text-white transition-colors">
                                                {capability}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>

                {/* Row 3: Specifications (2 Columns) */}
                <div className="grid md:grid-cols-2 auto-rows-fr gap-16 max-w-6xl mx-auto w-full px-6">
                    {/* Ku-Band Specifications */}
                    <Card className="glass-card border-slate-gray/30 h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center uppercase tracking-wider">Ku-Band Specifications</h3>
                            <div className="pt-6 border-t border-white/10">
                                <div className="grid grid-cols-1 gap-y-3 text-sm">
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Frequencies:</span>
                                        <span className="text-white text-right font-semibold">10.7 – 12.75 GHz, 13.75 – 14.5 GHz</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Size:</span>
                                        <span className="text-white text-right font-semibold">40” × 18.5” × 6” (100 × 47 × 16 cm.)</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Weight:</span>
                                        <span className="text-white text-right font-semibold">&lt;50 lbs (&lt;23 kg)</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Power:</span>
                                        <span className="text-white text-right font-semibold">425W</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Scan Range:</span>
                                        <span className="text-white text-right font-semibold">90°</span>
                                    </div>
                                </div>

                                {/* EIRP Table */}
                                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 gap-y-2 text-sm">
                                    <div className="grid grid-cols-3 items-center border-b border-white/10 pb-2 mb-1">
                                        <span className="text-white font-bold">EIRP</span>
                                        <span className="text-white font-bold text-center">LP</span>
                                        <span className="text-white font-bold text-center">CP</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">0° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">46.5 dBW</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">49.5 dBW</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">45° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">44.5 dBW</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">47.5 dBW</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">60° (extrapolated)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">42.4 dBW</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">45.4 dBW</span>
                                    </div>
                                </div>

                                {/* G/T Table */}
                                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 gap-y-2 text-sm">
                                    <div className="grid grid-cols-3 items-center border-b border-white/10 pb-2 mb-1">
                                        <span className="text-white font-bold">G/T</span>
                                        <span className="text-white font-bold text-center">25° C</span>
                                        <span className="text-white font-bold text-center">Hottest*</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">0° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">10 dB/K</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">8 dB/K</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">45° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">8 dB/K</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">6 dB/K</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2 text-xs sm:text-sm">60° (extrapolated)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">6 dB/K</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">4 dB/K</span>
                                    </div>
                                </div>
                                <div className="mt-2 text-xs text-gray-400/80">
                                    *Hottest BFIC operating temperature - 85 °C
                                </div>

                                {/* Download Button */}
                                <div className="mt-8 pt-4 flex justify-center border-t border-white/5">
                                    <Button
                                        asChild
                                        className="btn-brand h-auto px-6 py-3 w-full sm:w-auto flex items-center justify-center gap-2 group"
                                    >
                                        <a
                                            href="/docs/ku-band-spec-sheet.pdf"
                                            download="Satwave_Ku-Band_Spec_Sheet.pdf"
                                        >
                                            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            <span className="font-semibold uppercase tracking-wide">Download Spec Sheet (PDF)</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Ka-Band Specifications */}
                    <Card className="glass-card border-brand-black/30 h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center uppercase tracking-wider">Ka-Band Specifications</h3>
                            <div className=" pt-6 border-t border-white/10">
                                <div className="grid grid-cols-1 gap-y-3 text-sm">
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Frequencies:</span>
                                        <span className="text-white text-right font-semibold">17.7 – 21.2 GHz, 27.5 – 31.0 GHz</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Size:</span>
                                        <span className="text-white text-right font-semibold">19.7” x 19.7” x 3” (50 × 50 × 7.8 cm.)</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Weight:</span>
                                        <span className="text-white text-right font-semibold">&lt;35 lbs (&lt;16 kg)</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center border-b border-white/5 pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Power:</span>
                                        <span className="text-white text-right font-semibold">375W</span>
                                    </div>
                                    <div className="grid grid-cols-2 items-center pb-2 min-h-[3.25rem]">
                                        <span className="text-gray-400 font-medium pr-4">Scan Range:</span>
                                        <span className="text-white text-right font-semibold">60° without grating lobes</span>
                                    </div>
                                </div>

                                {/* EIRP Table */}
                                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 gap-y-2 text-sm">
                                    <div className="grid grid-cols-3 items-center border-b border-white/10 pb-2 mb-1">
                                        <span className="text-white font-bold">EIRP</span>
                                        <span className="text-white font-bold text-center">LP</span>
                                        <span className="text-white font-bold text-center">CP</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">0° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">46 dBW</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">49 dBW</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">45° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">44 dBW</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">47 dBW</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">60° (extrapolated)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">41.8 dBW</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">44.8 dBW</span>
                                    </div>
                                </div>

                                {/* G/T Table */}
                                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 gap-y-2 text-sm">
                                    <div className="grid grid-cols-3 items-center border-b border-white/10 pb-2 mb-1">
                                        <span className="text-white font-bold">G/T</span>
                                        <span className="text-white font-bold text-center">25° C</span>
                                        <span className="text-white font-bold text-center">Hottest*</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">0° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">10 dB/K</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">7.1 dB/K</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center border-b border-white/5 pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2">45° (measured)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">8 dB/K</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">5.2 dB/K</span>
                                    </div>
                                    <div className="grid grid-cols-3 items-center pb-2 min-h-[2.5rem]">
                                        <span className="text-gray-400 pr-2 text-xs sm:text-sm">60° (extrapolated)</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">6 dB/K</span>
                                        <span className="text-white text-center font-semibold text-xs sm:text-sm">3.2 dB/K</span>
                                    </div>
                                </div>
                                <div className="mt-2 text-xs text-gray-400/80">
                                    *Hottest BFIC operating temperature - 85 °C
                                </div>

                                {/* Download Button */}
                                <div className="mt-8 pt-4 flex justify-center border-t border-white/5">
                                    <Button
                                        asChild
                                        className="btn-brand h-auto px-6 py-3 w-full sm:w-auto flex items-center justify-center gap-2 group"
                                    >
                                        <a
                                            href="/docs/ka-band-spec-sheet.pdf"
                                            download="Satwave_Ka-Band_Spec_Sheet.pdf"
                                        >
                                            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            <span className="font-semibold uppercase tracking-wide">Download Spec Sheet (PDF)</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center text-sm mx-auto max-w-4xl px-6">
                    <p>
                        Satwave Arrays Inc. proprietary - Data Sheet represents Satwave Arrays Ka-Band AESA as configured for optimal market parameters. Actual configuration for customers and results may vary. For more information, email <a href="mailto:info@satwave.ai" className="text-brand-accent hover:underline transition-colors">info@satwave.ai</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
