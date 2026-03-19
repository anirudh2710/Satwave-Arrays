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
    CheckCircle2
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
        <main className="min-h-screen bg-brand-black text-white selection:bg-brand-accent/30 selection:text-white flex flex-col font-sans">
            <Navbar />

            {/* Premium Hero Section */}
            <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
                {/* Background ambient lighting */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/10 to-transparent blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-brand-accent/20 to-transparent blur-[150px]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/5 backdrop-blur-sm">
                            <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">The Satwave Advantage</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                            WHY SATWAVE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">AESAS?</span>
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
                        <motion.div variants={itemVariants} className="group glass-card p-8 border-brand-black/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-transform">
                                    <Activity strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent transition-colors">
                                    Electronic Beam Steering
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Unlike traditional parabolic dishes, phased arrays have no moving parts.
                            </p>
                        </motion.div>

                        {/* FEATURE 2 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 border-brand-black/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-transform">
                                    <ShieldCheck strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent transition-colors">
                                    Reliability
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                No motors or gears means significantly lower maintenance costs and higher "uptime" in harsh environments.
                            </p>
                        </motion.div>

                        {/* FEATURE 3 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 border-brand-black/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-300 h-full cursor-default md:col-span-2 lg:col-span-1">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-transform">
                                    <Move strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent transition-colors">
                                    Portability
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Flat panel antennas are easier to transport (even man-packable).
                            </p>
                        </motion.div>

                        {/* RESILIENCE */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 border-brand-black/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-300 h-full cursor-default md:col-span-2 lg:col-span-3">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-transform">
                                    <Lock strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent transition-colors">
                                    Resilience
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg lg:max-w-4xl">
                                Being phased array antennas, Satwave AESAs would be more resistant to jamming than traditional antennas, securing vital communication channels when you need them most.
                            </p>
                        </motion.div>

                        {/* FEATURE 4 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 border-brand-black/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-transform">
                                    <ArrowUpRight strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent transition-colors">
                                    Upgradability
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Designed to be upgraded to support higher security levels and other features based on customer requirements.
                            </p>
                        </motion.div>

                        {/* FEATURE 5 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 border-brand-black/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-transform">
                                    <Zap strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent transition-colors">
                                    Agility
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Ability to switch "locks" between LEO satellites in microseconds as they zip across the sky in minutes.
                            </p>
                        </motion.div>

                        {/* FEATURE 6 */}
                        <motion.div variants={itemVariants} className="group glass-card p-8 border-brand-black/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/40 hover:-translate-y-2 transition-all duration-300 h-full cursor-default">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent/20 transition-transform">
                                    <Layers strokeWidth={1.5} size={28} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-brand-accent transition-colors">
                                    Low Profile
                                </h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                Bulky dishes are prone to wind damage and vibration. Satwave AESAs are "low-impact" and can be integrated directly into the roof or mast.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Bento Box Benefits Section */}
                    <div className="pt-24 border-t border-white/10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
                                Benefits of our <span className="text-brand-accent bg-brand-accent/10 px-4 py-1 rounded-lg">Approach</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                                We architect every component of our arrays to scale beautifully, reduce integration friction, and maximize on-mission performance.
                            </p>
                        </motion.div>

                        {/* Bento Grid layout */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
                        >
                            {/* Bento Item 1 - Large span */}
                            <motion.div variants={itemVariants} className="glass-card p-8 border-l-4 border-l-brand-accent border-brand-black/30 bg-gradient-to-br from-brand-accent/5 to-transparent hover:bg-white/[0.03] transition-colors md:col-span-2 flex items-start gap-4">
                                <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={28} strokeWidth={2} />
                                <span className="text-xl lg:text-2xl text-white font-light leading-snug">
                                    <strong className="font-semibold">Full system capabilities</strong> — Antenna Control Unit and Auto Tracking algorithm engineered natively to integrate with any external modem available in the market.
                                </span>
                            </motion.div>

                            {/* Bento Item 2 */}
                            <motion.div variants={itemVariants} className="glass-card p-8 border-brand-black/30 hover:border-white/10 hover:bg-white/[0.03] transition-colors flex items-start gap-4">
                                <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} strokeWidth={2} />
                                <span className="text-lg text-gray-300 font-light leading-relaxed">
                                    AESA design perfectly scalable to custom sizes and multi-panel antennas.
                                </span>
                            </motion.div>

                            {/* Bento Item 3 */}
                            <motion.div variants={itemVariants} className="glass-card p-8 border-brand-black/30 hover:border-white/10 hover:bg-white/[0.03] transition-colors flex items-start gap-4">
                                <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} strokeWidth={2} />
                                <span className="text-lg text-gray-300 font-light leading-relaxed">
                                    PCB-based design, making it highly manufacturable at extremely lower cost at scale.
                                </span>
                            </motion.div>

                            {/* Bento Item 4 - Highlighting technical performance */}
                            <motion.div variants={itemVariants} className="glass-card p-8 border-brand-black/30 bg-gradient-to-tr from-brand-accent/10 to-transparent hover:border-brand-accent/30 transition-colors md:col-span-2 flex items-start gap-4 relative overflow-hidden">
                                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[50px]"></div>
                                <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} strokeWidth={2} />
                                <span className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed relative z-10">
                                    <strong className="text-white font-semibold">Proprietary & ML optimized inner layers.</strong> Built for unmatched wideband performance, enhanced cross-polarization, and vastly improved efficiency at phenomenally large scan angles.
                                </span>
                            </motion.div>

                            {/* Bento Item 5 */}
                            <motion.div variants={itemVariants} className="glass-card p-8 border-brand-black/30 hover:border-white/10 hover:bg-white/[0.03] transition-colors flex items-start gap-4">
                                <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} strokeWidth={2} />
                                <span className="text-lg text-gray-300 font-light leading-relaxed">
                                    Built confidently on reliable, commercially available analog BFICs.
                                </span>
                            </motion.div>

                            {/* Bento Item 6 */}
                            <motion.div variants={itemVariants} className="glass-card p-8 border-brand-black/30 hover:border-white/10 hover:bg-white/[0.03] transition-colors flex items-start gap-4 md:col-span-1 lg:col-span-2">
                                <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} strokeWidth={2} />
                                <span className="text-lg text-gray-300 font-light leading-relaxed">
                                    Targeted to be highly resilient: <strong className="text-white">IP67 compliant</strong> and fully engineered to operate in harsh <strong className="text-white">MIL-STD-810H</strong> class environments seamlessly.
                                </span>
                            </motion.div>

                            {/* Bento Item 7 */}
                            <motion.div variants={itemVariants} className="glass-card p-8 border-brand-black/30 hover:border-white/10 hover:bg-white/[0.03] transition-colors flex items-start gap-4">
                                <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} strokeWidth={2} />
                                <span className="text-lg text-gray-300 font-light leading-relaxed">
                                    Driven robustly by <strong className="text-white">FreeRTOS software</strong> (supported actively by Amazon and trusted by millions of devices globally).
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
