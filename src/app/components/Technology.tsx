import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Technology() {
    return (
        <section id="technology" className="section-bg-container section-container border-b border-white/5">
            <div className="section-bg topo-pattern" />
            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                {/* Main Card Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Card className="glass-card border-brand-blue/30 p-8 md:p-12">
                        <CardContent className="p-0">
                            {/* Main Heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl font-bold mb-6 text-white uppercase tracking-wider text-center"
                            >
                                Satwave Arrays: Engineering the Future of Connectivity
                            </motion.h2>

                            {/* Introduction */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed"
                            >
                                In an era where global communication demands agility, Satwave Arrays has positioned itself at the vanguard of phased array flat panel satellite antenna technology.
                            </motion.p>

                            {/* Two Column Layout for Core Focus and Approach */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                                {/* Left Column: Our Core Focus */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    className="glass-card p-6 border-brand-blue/20"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Our Core Focus</h3>
                                    <ul className="space-y-3 text-base text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-brand-accent mr-2 mt-1 flex-shrink-0">▸</span>
                                            <span>Design and development of advanced Active Electronically Steered Array (AESA) antennas for satellite communications.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-brand-accent mr-2 mt-1 flex-shrink-0">▸</span>
                                            <span>Specialization in Ku-band and Ka-band systems for multi-orbit operation (LEO, MEO, GEO).</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-brand-accent mr-2 mt-1 flex-shrink-0">▸</span>
                                            <span>Emphasis on custom, mission-specific antenna architectures rather than off-the-shelf solutions.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-brand-accent mr-2 mt-1 flex-shrink-0">▸</span>
                                            <span>Primary markets include defense, aerospace, maritime, and ruggedized mobility platforms.</span>
                                        </li>
                                    </ul>
                                </motion.div>

                                {/* Right Column: Our Approach */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                    className="glass-card p-6 border-brand-blue/20"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Our Approach</h3>
                                    <p className="text-base text-gray-300 leading-relaxed">
                                        Our innovative approach includes an end-to-end structure that starts with array designs using simulations and modeling, developing critical components such as antenna control unit, software and satellite tracking algorithms and finally integrating them into antennas for measurement and validation through multiple rounds of testing planar near field and compact test ranges.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Explore Technology Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex justify-center"
                            >
                                <Link href="/technology">
                                    <button className="px-8 py-4 bg-brand-blue hover:bg-brand-accent text-white font-bold text-lg uppercase tracking-wider rounded-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(75,86,210,0.6)] hover:scale-105">
                                        Explore Our Technology
                                    </button>
                                </Link>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
