'use client';

import { motion, Variants } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Activity,
    ShieldCheck,
    Move,
    ArrowUpRight,
    Zap,
    Layers,
    Lock,
} from 'lucide-react';

export default function WhySatwave() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <main className="min-h-screen why-bg bg-brand-black text-white selection:bg-white/30 selection:text-white flex flex-col font-sans">
            <Navbar />

            {/* Premium Hero Section */}
            <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
                {/* Background ambient lighting */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-white/20 to-transparent blur-[150px]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
                            <span className="text-sm font-semibold tracking-widest uppercase">The Satwave Advantage</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                            WHY SATWAVE <br />AESAs?
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                            Pioneering the next generation of flat panel satellite antennas through unmatched engineering excellence and innovation.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative fade line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </section>

            {/* Advantages Feature Grid */}
            <section className="py-24 relative z-10 w-full flex-grow bg-brand-black/40">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-32"
                    >
                        {/* FEATURE 1 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 rounded-lg border-brand-black/40 bg-white/[0.02] transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform">
                                    <Activity strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                                    Electronic Beam Steering
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Unlike traditional parabolic dishes, phased arrays have no moving parts.
                            </p>
                        </motion.div>

                        {/* FEATURE 2 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 rounded-lg border-brand-black/40 bg-white/[0.02] transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform">
                                    <ShieldCheck strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                                    Reliability
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                No motors or gears means significantly lower maintenance costs and higher "uptime" in harsh environments.
                            </p>
                        </motion.div>

                        {/* FEATURE 3 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 rounded-lg border-brand-black/40 bg-white/[0.02] transition-all duration-300 h-full cursor-default md:col-span-2 lg:col-span-1">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform">
                                    <Move strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                                    Portability
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Flat panel antennas are easier to transport (even man-packable).
                            </p>
                        </motion.div>

                        {/* RESILIENCE */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 rounded-lg border-brand-black/40 bg-white/[0.02] transition-all duration-300 h-full cursor-default md:col-span-2 lg:col-span-3">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform">
                                    <Lock strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                                    Resilience
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg lg:max-w-4xl">
                                Being phased array antennas, Satwave AESAs would be more resistant to jamming than traditional antennas, securing vital communication channels when you need them most.
                            </p>
                        </motion.div>

                        {/* FEATURE 4 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 rounded-lg border-brand-black/40 bg-white/[0.02] transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform">
                                    <ArrowUpRight strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                                    Upgradability
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Using software updates, Satwave AESAs are designed to support higher cybersecurity and anti-jamming countermeasures in a defense environment.
                            </p>
                        </motion.div>

                        {/* FEATURE 5 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 rounded-lg border-brand-black/40 bg-white/[0.02] transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform">
                                    <Zap strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                                    Agility
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Ability to switch "locks" between LEO satellites in microseconds as they zip across the sky in minutes.
                            </p>
                        </motion.div>

                        {/* FEATURE 6 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 rounded-lg border-brand-black/40 bg-white/[0.02] transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform">
                                    <Layers strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                                    Low Profile
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Bulky dishes are prone to wind damage and vibration. Satwave AESAs are "low-impact" and can be integrated directly into the roof or mast.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Benefits — numbered list */}
                    <div className="pt-24 border-t border-white/10">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                            {/* Left: sticky label */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="lg:w-72 shrink-0"
                            >
                                <p className="text-white text-sm font-semibold tracking-widest uppercase mb-4">Why it matters</p>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
                                    Benefits of our Approach
                                </h2>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    We architect every component of our arrays to scale to mission requirements, reduce integration friction, and maximize performance.
                                </p>
                                <div className="mt-8 w-12 h-px bg-white" />
                            </motion.div>

                            {/* Right: numbered list */}
                            <motion.ol
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-60px' }}
                                className="flex-1 divide-y divide-white/[0.07]"
                            >
                                {[
                                    {
                                        title: 'AESA design scalable to custom sizes and multi-panel antennas.',
                                    },
                                    {
                                        title: 'Proprietary, ML optimized, inner layers for wideband performance, enhanced cross-polarization, and improved efficiency at large scan angles.',
                                    },
                                    {
                                        title: 'PCB-based design, manufacturable at lower cost at scale.',
                                    },
                                    {
                                        title: 'Built on commercially available analog BFICs.',
                                    },
                                    {
                                        title: 'Targeted to be IP67 compliant and to operate in MIL-STD-810H environments.',
                                    },
                                    {
                                        title: 'Full system — Antenna Control Unit and Auto tracking algorithm to integrate with external modem available in the market.',
                                    },
                                    {
                                        title: 'Driven by FreeRTOS software (supported by Amazon and used by millions of devices).',
                                    },
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        variants={itemVariants}
                                        className="group flex items-center gap-10 py-8 transition-colors px-2 rounded-sm"
                                    >
                                        {/* Number */}
                                        <span className="text-5xl font-black text-white/60 group-hover:text-white/70 transition-colors leading-none select-none w-10 shrink-0">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        {/* Content */}
                                        <div>
                                            <p className="text-xl text-white/90 font-light leading-relaxed group-hover:text-white transition-colors">
                                                {item.title}
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ol>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
