'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    activeTab?: string;
    onTabChange?: (tab: string) => void;
}

export default function ProductsAndApplications({ activeTab = 'products', onTabChange }: ProductsAndApplicationsProps) {
    // Ku-Band product images and content
    const kuBandImages = [
        {
            title: "Ku-Band Antenna - Integrated Unit 1",
            description: "High-performance Ku-band phased array antenna with advanced beamforming capabilities.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-3.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 2",
            description: "Compact flat panel design optimized for broadcast and VSAT communications.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-6.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 3",
            description: "Precision-engineered antenna system for reliable satellite connectivity.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-19.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 4",
            description: "Advanced technology delivering superior performance for mobile communications.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-22.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 5",
            description: "Robust construction with electronic beam steering for optimal signal reception.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-24.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 6",
            description: "State-of-the-art antenna technology for demanding environments.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-27.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 7",
            description: "Versatile deployment options for various platform configurations.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-30.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 8",
            description: "High-throughput satellite communication system with easy installation.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-40.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 9",
            description: "Production-ready antenna delivering exceptional signal quality.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-46.JPG"
        },
        {
            title: "Ku-Band Antenna - Integrated Unit 10",
            description: "Integrated phased array system for broadcast and mobile applications.",
            image: "/Antenna_images/ku_antenna_render/optimized/Ku_Integrated_020726-68.JPG"
        }
    ];

    // Ka-Band product images and content
    const kaBandImages = [
        {
            title: "Ka-Band Antenna - Production Unit 1",
            description: "High-precision Ka-band phased array antenna with advanced beamforming capabilities.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020226-6.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 2",
            description: "Next-generation flat panel design for high-throughput satellite communications.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020226-7.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 3",
            description: "Compact and lightweight design optimized for mobile and fixed installations.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020226-9.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 4",
            description: "Advanced technology delivering superior performance in demanding environments.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-1.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 5",
            description: "Precision-engineered phased array system for reliable satellite connectivity.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-2.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 6",
            description: "State-of-the-art antenna technology for military and commercial applications.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-3.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 7",
            description: "Robust construction with electronic beam steering capabilities.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-4.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 8",
            description: "High-performance antenna system for LEO, MEO, and GEO satellite networks.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-8.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 9",
            description: "Versatile deployment options for various platform configurations.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-9.JPG"
        },
        {
            title: "Ka-Band Antenna - Production Unit 10",
            description: "Production-ready antenna delivering exceptional signal quality and reliability.",
            image: "/Antenna_images/ka_antenna_render/optimized/Ka_Production_020326-11.JPG"
        }
    ];

    // Application images and content
    const applicationImages = [
        {
            title: "Application One",
            description: "Description for Application One",
            image: "/placeholder-geo.jpg",
            orbit: "GEO"
        },
        {
            title: "Application Two",
            description: "Description for Application Two",
            image: "/placeholder-leo.jpg",
            orbit: "LEO"
        }
    ];

    return (
        <section id="products" className="section-bg-container section-container border-b border-white/5">
            <div className="section-bg" />
            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                {/* <h2 className="text-4xl font-bold mb-12 text-white text-center uppercase tracking-wider">
                    Products & Applications
                </h2> */}

                {/* Breadcrumb */}
                <div className="mb-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-gray-400 hover:text-brand-accent transition-colors">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-600" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white font-medium">Products & Applications</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/5 backdrop-blur-sm p-1 rounded-lg">
                        <TabsTrigger value="products" className="data-[state=active]:bg-slate-gray data-[state=active]:text-white hover:bg-gray-800">
                            Products
                        </TabsTrigger>
                        <TabsTrigger value="applications" className="data-[state=active]:bg-slate-gray data-[state=active]:text-white hover:bg-gray-800">
                            Applications
                        </TabsTrigger>
                    </TabsList>

                    {/* Products Tab */}
                    <TabsContent value="products" className="mt-8">
                        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            {/* Ku-Band Antenna */}
                            <Card className="glass-card border-slate-gray/30">
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Ku-Band Antenna</h3>
                                    <Carousel
                                        className="w-full"
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
                                                    <div className="space-y-4">
                                                        {/* Actual Image */}
                                                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900">
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        {/* Content */}
                                                        <div className="space-y-2">
                                                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                                            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                        <CarouselNext className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                    </Carousel>

                                    {/* Specifications */}
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key Specifications</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Frequency: 10.7-14.5 GHz</li>
                                            <li>• Beam steering: Electronic phased array</li>
                                            <li>• Applications: Broadcast, VSAT, mobile communications</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Ka-Band Antenna */}
                            <Card className="glass-card border-brand-black/30">
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Ka-Band Antenna</h3>
                                    <Carousel
                                        className="w-full"
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
                                                    <div className="space-y-4">
                                                        {/* Actual Image */}
                                                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900">
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        {/* Content */}
                                                        <div className="space-y-2">
                                                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                                            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                        <CarouselNext className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                    </Carousel>

                                    {/* Specifications */}
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key Specifications</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>• Frequency: 17.7-31.0 GHz</li>
                                            <li>• Beam steering: Advanced phased array</li>
                                            <li>• Applications: High-throughput satellite, 5G backhaul</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Applications Tab */}
                    <TabsContent value="applications" className="mt-8">
                        {/* Introduction Text */}
                        <div className="text-center mb-8">
                            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                Our phased array antennas support satellite communications across all orbital regimes:
                                <span className="text-brand-accent font-semibold"> Geostationary (GEO)</span>,
                                <span className="text-brand-accent font-semibold"> Medium Earth Orbit (MEO)</span>, and
                                <span className="text-brand-accent font-semibold"> Low Earth Orbit (LEO)</span>.
                            </p>
                        </div>

                        {/* Application Cards in Grid */}
                        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            {applicationImages.map((item, index) => (
                                <Card key={index} className="glass-card border-brand-black/30">
                                    <CardContent className="p-6">
                                        <Carousel
                                            className="w-full mb-4"
                                            plugins={[
                                                Autoplay({
                                                    delay: 10000,
                                                    stopOnInteraction: true,
                                                })
                                            ]}
                                        >
                                            <CarouselContent>
                                                <CarouselItem>
                                                    {/* Orbit Visualization */}
                                                    <div className="aspect-video w-full bg-gradient-to-br from-brand-black/20 to-brand-accent/20 rounded-lg flex items-center justify-center">
                                                        <div className="text-center p-6">
                                                            <div className="text-7xl mb-4">🛰️</div>
                                                            <span className="text-white font-bold text-2xl">{item.orbit}</span>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                                <CarouselItem>
                                                    {/* Diagram Placeholder */}
                                                    <div className="aspect-video w-full bg-gradient-to-br from-brand-accent/20 to-brand-black/20 rounded-lg flex items-center justify-center">
                                                        <div className="text-center p-6">
                                                            <div className="text-7xl mb-4">🌍</div>
                                                            <span className="text-white/60 text-sm">{item.orbit} Orbit Diagram</span>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            </CarouselContent>
                                            <CarouselPrevious className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                            <CarouselNext className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                        </Carousel>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                        </div>

                                        {/* Orbit Details */}
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <div className="text-xs text-gray-400 space-y-1">
                                                {item.orbit === 'GEO' && (
                                                    <>
                                                        <p>• Altitude: ~35,786 km</p>
                                                        <p>• Coverage: Fixed position over Earth</p>
                                                    </>
                                                )}
                                                {item.orbit === 'LEO' && (
                                                    <>
                                                        <p>• Altitude: 160-2,000 km</p>
                                                        <p>• Coverage: Low latency, high speed</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
