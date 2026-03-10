import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function KuBandPage() {
    return (
        <div className="min-h-screen bg-brand-black relative z-0 flex flex-col overflow-x-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-[-1] topo-pattern opacity-50 bg-fixed bg-contain bg-center bg-no-repeat" />

            {/* Navbar */}
            <Navbar />

            {/* Main Content Wrapper (Grows to push footer down) */}
            <div className="flex-grow flex flex-col">
                {/* Header / Navigation Row */}
                <div className="max-w-7xl mx-auto px-6 pt-32 pb-6 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-gray-400 hover:text-brand-accent transition-colors">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-gray-600" />
                                <BreadcrumbItem>
                                    <span className="text-gray-400">Resources</span>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-gray-600" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-white font-medium">Ku-band</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    {/* Title Section */}
                    <div className="flex flex-col items-center sm:items-start gap-6 mb-12 text-center sm:text-left text-brand-accent">
                        <div>
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight uppercase tracking-tight font-bebas-neue flex justify-center text-center">
                                Full Duplex Ku-Band AESA
                            </h1>
                            <p className="text-gray-300 text-xl sm:text-2xl mt-6 font-light opacity-90 leading-relaxed">
                                Satwave Arrays builds Ku-band and Ka-Band AESAs to connect with satellites on any constellation and orbit. Their capabilities are centered on high-performance designs for mission-specific applications in industry and defense.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <section className="max-w-7xl mx-auto px-6 pb-24 w-full flex-grow">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 lg:gap-20 items-stretch">
                        {/* Left Column: Key Features */}
                        <Card className="md:col-span-3 glass-card border-brand-black/30 bg-brand-black/5 text-brand-accent h-full flex flex-col justify-center">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white uppercase tracking-wider font-bebas-neue">Key features include:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-gray-300 space-y-4 list-disc list-outside pl-5 marker:text-brand-accent">
                                    {[
                                        "AESA design scalable to custom sizes and multi-panel antennas",
                                        "Stacked patch radiating elements with proprietary, ML optimized, inner layers for wideband performance, enhanced cross-polarization, and improved efficiency at large scan angles",
                                        "Engineered in-house to retain design control",
                                        "PCB-based design, manufacturable at lower cost at scale",
                                        "Built on commercially available Analog Beam-Forming Integrated Circuits (BFICs)",
                                        "Targeted to be IP67 compliant and to operate in MIL-STD-810H environments",
                                        "Full system - Antenna Control Unit and Auto tracking algorithm to integrate with external modem",
                                        "Driven by FreeRTOS software, which is supported by Amazon and used by millions of devices"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <div className="md:col-span-2 w-full h-full">
                            <Card className="glass-card border-brand-black/30 bg-white/5 backdrop-blur-sm w-full h-full flex items-center justify-center p-4">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src="/resources/ku-band/antenna-front-back.jpg" alt="Ku-band Antenna Front and Back" className="w-full h-full object-contain" />
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* Engineering Philosophy Section (Section Breaker) */}
                    <div className="mt-20 max-w-6xl mx-auto px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider font-bebas-neue">
                                Satwave’s Engineering Philosophy
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="glass-card border-brand-black/30 bg-brand-black/5 hover:bg-white/5 hover:border-brand-accent/30 transition-all duration-300 group cursor-default">
                                <CardContent className="p-8 text-center flex flex-col items-center pt-8">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧮</div>
                                    <h4 className="text-white font-semibold text-lg mb-2">Data-Driven Design</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Simulation is always paired with real-world measurements</p>
                                </CardContent>
                            </Card>
                            <Card className="glass-card border-brand-black/30 bg-brand-black/5 hover:bg-white/5 hover:border-brand-accent/30 transition-all duration-300 group cursor-default">
                                <CardContent className="p-8 text-center flex flex-col items-center pt-8">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
                                    <h4 className="text-white font-semibold text-lg mb-2">Open-Book Engineering</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Customers receive detailed performance data and validation reports</p>
                                </CardContent>
                            </Card>
                            <Card className="glass-card border-brand-black/30 bg-brand-black/5 hover:bg-white/5 hover:border-brand-accent/30 transition-all duration-300 group cursor-default">
                                <CardContent className="p-8 text-center flex flex-col items-center pt-8">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                                    <h4 className="text-white font-semibold text-lg mb-2">Transparency & Reliability</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">No performance claims without measured proof</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Performance Testing Intro */}
                    <div className="mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left Column: Image Area */}
                            <Card className="glass-card border-brand-black/30 overflow-hidden bg-white/5 backdrop-blur-sm flex items-center justify-center p-4">
                                <img src="/resources/ku-band/heatmap1.png" alt="Antenna Heatmap Results" className="w-full h-auto object-contain rounded-lg" />
                            </Card>

                            {/* Right Column: Text Card */}
                            <Card className="glass-card border-brand-black/30 bg-brand-black/5 text-gray-300 flex flex-col justify-center">
                                <CardContent className="p-4 md:p-8 space-y-6 text-lg font-light leading-relaxed">
                                    <p>
                                        The Ku-Band AESA PCB design was tested in a Planar Near Field Range and Compact Antenna Test Range to generate comprehensive view of antenna performance.
                                    </p>
                                    <p>
                                        To avoid known AESA risks such as areas of poor performance across pointing range or working only in a small region near broadside, Satwave measured hundreds of beams across steer, frequency and polarizations. Below are selected key test results.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Technical Specifications & Data */}
                        <div className="mt-12 md:mt-24">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                                {/* Left Column: Data Tables & Specs */}
                                <Card className="glass-card border-brand-black/30 bg-brand-black/5 text-gray-300">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold text-white uppercase tracking-wider font-bebas-neue">
                                            Test Results & Specifications
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-8">
                                        {/* General Specs */}
                                        <div className="flex flex-col font-mono text-sm lg:text-base border-b border-brand-black/20 pb-6 divide-y divide-white/10">
                                            <div className="flex flex-col sm:flex-row sm:justify-between py-3 gap-2">
                                                <span className="text-brand-accent font-semibold">Frequencies:</span>
                                                <span className="text-left sm:text-right">10.7 – 12.75 GHz, 13.75 – 14.5 GHz</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between py-3 gap-2">
                                                <span className="text-brand-accent font-semibold">Size:</span>
                                                <span className="text-left sm:text-right">40” x 18.5” x 6” (100 X 47 X 16 cm.)</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between py-3 gap-2">
                                                <span className="text-brand-accent font-semibold">Weight:</span>
                                                <span className="text-left sm:text-right">&lt;50 lbs (&lt;23 kg)</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between py-3 gap-2">
                                                <span className="text-brand-accent font-semibold">Power:</span>
                                                <span className="text-left sm:text-right">425W</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between py-3 gap-2">
                                                <span className="text-brand-accent font-semibold">Scan Range:</span>
                                                <span className="text-left sm:text-right">90&deg;</span>
                                            </div>
                                        </div>

                                        {/* EIRP Table */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">EIRP</h4>
                                            <div className="overflow-x-auto text-sm lg:text-base font-mono">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="border-b border-white/10 text-brand-accent/80">
                                                            <th className="py-2 px-4 font-normal">Steer</th>
                                                            <th className="py-2 px-4 font-normal">LP</th>
                                                            <th className="py-2 px-4 font-normal">CP</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-white/5">
                                                        <tr>
                                                            <td className="py-3 px-4">0&deg; (measured)</td>
                                                            <td className="py-3 px-4">46.5 dBW</td>
                                                            <td className="py-3 px-4">9.5 dBW</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4">45&deg; (measured)</td>
                                                            <td className="py-3 px-4">44.5 dBW</td>
                                                            <td className="py-3 px-4">47.5 dBW</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 text-brand-accent">60&deg; (extrapolated)</td>
                                                            <td className="py-3 px-4">42.4 dBW</td>
                                                            <td className="py-3 px-4">45.4 dBW</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* G/T Table */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">G/T <span className="text-brand-accent/70 font-normal text-sm">| 25&deg; C</span></h4>
                                            <div className="overflow-x-auto text-sm lg:text-base font-mono">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="border-b border-white/10 text-brand-accent/80">
                                                            <th className="py-2 px-4 font-normal">Steer</th>
                                                            <th className="py-2 px-4 font-normal">Hottest*</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-white/5">
                                                        <tr>
                                                            <td className="py-3 px-4">0&deg; (measured)</td>
                                                            <td className="py-3 px-4">10 dB/K <span className="text-gray-500">| 8 dB/K</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4">45&deg; (measured)</td>
                                                            <td className="py-3 px-4">8 dB/K <span className="text-gray-500">| 6 dB/K</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 text-brand-accent">60&deg; (extrapolated)</td>
                                                            <td className="py-3 px-4">6 dB/K <span className="text-gray-500">| 4 dB/K</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="text-xs text-brand-accent mt-4 italic opacity-80">*Hottest BFIC operating temperature - 85&deg; C</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                {/* Right Column: Image Slot */}
                                <div className="w-full">
                                    <Card className="glass-card border-brand-black/30 bg-white/5 backdrop-blur-sm w-full aspect-square flex items-center justify-center p-4">
                                        <div className="w-full h-full">
                                            <img src="/resources/ku-band/chart.png" alt="Ku Band" className="w-full h-full object-contain" />
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Disclaimer */}
            <div className="max-w-7xl mx-auto px-6 pb-12 w-full text-center">
                <p className="text-gray-500 text-sm opacity-80 leading-relaxed max-w-4xl mx-auto">
                    Satwave Arrays Inc. proprietary - Data Sheet represents Satwave Arrays Ku-Band AESA as configured for optimal market parameters. Actual configuration for customers and results may vary. For more information, email <a href="mailto:info@satwave.ai" className="text-brand-accent hover:text-brand-accent/80 transition-colors">info@satwave.ai</a>.
                </p>
            </div>

            <Footer />
        </div>
    );
}
