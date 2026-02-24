import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import image from 'next/image';

interface AboutProps {
    activeTab?: string;
    onTabChange?: (tab: string) => void;
}

export default function About({ activeTab = 'overview', onTabChange }: AboutProps) {
    // Values data (moved from Values component)
    const values = [
        { title: "Curiosity", desc: "We are dedicated to pioneering advanced technologies that redefine satellite communication" },
        { title: "Innovation", desc: "We're unafraid to question old principles and embrace new ideas, materials, and processes." },
        { title: "Reliability", desc: "We design high-efficiency flat panel satellite antennas to work where and when they're needed, without compromise." },
        { title: "Collaboration", desc: "We see our customers as partners, not just buyers. We believe co-creation leads to better solutions." },
        { title: "Integrity", desc: "We do business with a commitment to truthfulness, respect, and accountability." },
    ];

    // Overview carousel items with actual photos
    const overviewItems = [
        {
            title: "Our Team",
            description: "Team photo",
            image: "/overview/team.jpg"
        },
        {
            title: "Testing & Validation",
            description: "Testing facility",
            image: "/overview/testing.jpg"
        },
        {
            title: "Development",
            description: "Development process",
            image: "/overview/testing1.jpg"
        },
        {
            title: "Sunset Man Install",
            description: "Sunset Man Install",
            image: "/overview/sunset_man_install.png"
        },
        {
            title: "Office work",
            description: "Office work",
            image: "/overview/office_work.jpg"
        },
        {
            title: "Contact",
            description: "Contact",
            image: "/overview/contact.jpg"
        },
        {
            title: "Antenna",
            description: "Antenna",
            image: "/overview/antenna_front.jpg"
        }
    ];

    // Governance board members (placeholder)
    const boardMembers = [
        { name: "Board Member 1", role: "Chairman", image: "/placeholder-board-1.jpg" },
        { name: "Board Member 2", role: "Vice Chairman", image: "/placeholder-board-2.jpg" },
        { name: "Board Member 3", role: "Secretary", image: "/placeholder-board-3.jpg" },
        { name: "Board Member 4", role: "Treasurer", image: "/placeholder-board-4.jpg" },
        { name: "Board Member 5", role: "Member", image: "/placeholder-board-5.jpg" },
    ];

    // Team members with actual photos from /public/team/optimized
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    // Leadership team - displayed in first row
    const leadershipTeam = [
        { name: "Sridhar Ganesan", role: "Position", image: "/team/optimized/sridhar.jpg", bio: "I am a satellite industry veteran with global experience in strategy, business development, raising capital, M&A and running operations.  I am at Satwave because we have a talented group of people that love building antennas.  I lead all operations, financial and legal needs of Satwave, and with Scott, drive strategy, business development and supporting our customers.  When I am not working on Satwave stuff, I am a foodie who loves to hack at golf, meet people, travel and watch tennis.", linkedin: "https://linkedin.com/in/sridharganesan" },
        { name: "Jimmy Strates", role: "Position", image: "/team/optimized/jimmy.jpg", bio: "Placeholder bio for Jimmy Strates. Focused on product development and innovation.", linkedin: "https://linkedin.com/in/placeholder" },
        { name: "Scott Zimmer", role: "Position", image: "/team/optimized/scott.jpg", bio: "I have been in the satellite industry since 1981.  Much of my career was spent managing Dish Network and EchoStar's international business.  I became involved with Satwave because of my interest in developing a flat electronically scanned antenna which enables mobility and connectivity with MEO and LEO satellites.  At this stage of my career I choose to work with creative, curious, and industrious young people.  In my spare time I enjoy photography and hiking.", linkedin: "https://linkedin.com/in/robert-scott-zimmer-b0857012" },
    ];

    // Rest of the team - displayed in subsequent rows
    const teamMembers = [
        { name: "Anay Badlani", role: "Position", image: "/team/optimized/anay.jpg", bio: "I am a current computer science student at Georgia Tech. I am a software engineering intern at Satwave, where I love tackling interesting problems and building performance-critical software . Outside of work, I like playing soccer and going on hikes.", linkedin: "https://linkedin.com/in/anaybadlani" },
        { name: "Alvaro Garcia", role: "Position", image: "/team/optimized/alvaro.jpg", bio: "I'm a telecommunications enthusiast focused on the development of phased array antennas for satellite communications. At Satwave, I work across the antenna and RF design, enjoying the engineering culture and the team's passion for building antennas that empower global connectivity. When I am away from the office, I enjoy traveling and exploring new cities and food spots… and playing padel!", linkedin: "https://linkedin.com/in/alvaro-garciac" },
        { name: "Shivam Kundan", role: "Position", image: "/team/optimized/shivam.jpg", bio: "I'm a recent PhD grad focused on building reliable, high-performance, and power-efficient hardware-software systems. At Satwave, I bring antenna and platform concepts to life by integrating firmware, custom hardware (sensors, IMUs, PCBs), and system-level design. I enjoy working here because of the team's deep technical curiosity and shared passion for aerospace technologies. Outside the office, you'll usually find me tinkering with hobby electronics or getting out into nature hiking and kayaking, sometimes combining the two by building and testing gadgets along the way.", linkedin: "https://linkedin.com/in/shivamkundan" },
        { name: "Manuel Jimenez Martinez", role: "Position", image: "/team/optimized/manuel.jpg", bio: "Placeholder bio for Manuel Jimenez Martinez. Driving innovation in phased array technology.", linkedin: "https://linkedin.com/in/manueljmg" },
        { name: "Shanelle Metellus", role: "Position", image: "/team/optimized/shanelle.jpg", bio: "I keep the moving parts of the company running smoothly so our team can focus on building something great! And I am always on the hunt for the best iced latte in town. ", linkedin: "https://linkedin.com/in/shanelle-metellus-17904b16b" },
        { name: "Bhavadharini Narayanan", role: "Position", image: "/team/optimized/bhava.jpg", bio: "I work in IT Systems and Security Administration at Satwave. I recently finished my master's and joined the team to help build our cloud and network security. I enjoy working here because I get to learn and contribute to a great team. Outside of work, I love traveling and cooking.", linkedin: "https://linkedin.com/in/bhavadharininarayanan" },
        { name: "Sergio Navarrete", role: "Position", image: "/team/optimized/sergio.jpg", bio: "I am one of the lead Mechanical Engineers at Satwave with about half a decade experience in the SATCOM industry. With a primary focus on design optimization, I help drive the team in the areas of Quality Assurance, MRP, and some Program Management to ensure the best possible products have the potential to get delivered onto the market in a timely and efficient manner. I enjoy working here because it almost feels like everyday is a new challenge and can always keep learning something new! When I am away from the office, I enjoy going the gym, going for walks and also love cleaning my car.", linkedin: "https://linkedin.com/in/placeholder" },
        { name: "Hunter Rabun", role: "Position", image: "/team/optimized/hunter.jpg", bio: "I am a digital engineer experienced in Hardware, Software, and RF systems. I am at Satwave because I get to work on everything from application software, to bare-metal firmware, and PCBs while working with a diverse, open-minded, and gifted team. In my free time I like to play video games, tinker with electronics, and go on spirited drives.", linkedin: "https://linkedin.com/in/hunter-rabun-8626b0231" },
        { name: "Gabriel Richmond", role: "Position", image: "/team/optimized/123.jpg", bio: "I am a soon-to-be graduate in computer engineering from Kennesaw State University with a passion for embedded systems development and design. I am at Satwave because of my desire to not only apply my learned skills but gain new ones within the RF and satellite industry. As an intern I aid with an array of projects from firmware, hardware, software, and testing. When I am not working, I am usually playing boardgames, watching movies, working on side projects, or playing video games with friends.", linkedin: "https://linkedin.com/in/placeholder" },
        { name: "Nikolay Tranakiev", role: "Position", image: "/team/optimized/n.jpg", bio: "As an embedded engineer at Satwave AI, I work with our software team on implementing our antenna control stack as well as building an extensive software test suite. I come from a background in the satellite and space industry and enjoy being at Satwave for the opportunity to solve complex technical challenges with a great team. Outside of work, I enjoy tinkering with various hands-on projects and trying out every coffee shop in Atlanta. ", linkedin: "https://linkedin.com/in/nikolay-tranakiev" },
    ];

    // Combined for dialog selection
    const allTeamMembers = [...leadershipTeam, ...teamMembers];

    return (
        <section id="about" className="section-bg-container section-container border-b border-white/5">
            <div className="section-bg topo-pattern about-bg" />
            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
                        <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/5 backdrop-blur-sm p-1 rounded-lg">
                            <TabsTrigger value="overview" className="data-[state=active]:bg-slate-gray data-[state=active]:text-white hover:bg-gray-800 uppercase">
                                Overview
                            </TabsTrigger>
                            <TabsTrigger value="mission" className="data-[state=active]:bg-slate-gray data-[state=active]:text-white hover:bg-gray-800 uppercase">
                                Mission
                            </TabsTrigger>
                            <TabsTrigger value="values" className="data-[state=active]:bg-slate-gray data-[state=active]:text-white hover:bg-gray-800 uppercase">
                                Values
                            </TabsTrigger>
                            <TabsTrigger value="governance" className="data-[state=active]:bg-slate-gray data-[state=active]:text-white hover:bg-gray-800 uppercase">
                                Governance
                            </TabsTrigger>
                            <TabsTrigger value="team" className="data-[state=active]:bg-slate-gray data-[state=active]:text-white hover:bg-gray-800 uppercase">
                                Team
                            </TabsTrigger>
                        </TabsList>

                        {/* Overview Tab - Image Carousel Left + Text Right */}
                        <TabsContent value="overview" className="mt-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-7xl mx-auto"
                            >
                                <Card className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch glass-card border-brand-black/30 p-6 overflow-hidden">
                                    {/* Left: Image Carousel (3/5 = 60% width) */}
                                    <div className="lg:col-span-3">
                                        <div className="px-8 h-full flex items-center">
                                            <Carousel
                                                className="w-full"
                                                plugins={[
                                                    Autoplay({
                                                        delay: 3500,
                                                        stopOnInteraction: true,
                                                    })
                                                ]}
                                            >
                                                <CarouselContent>
                                                    {overviewItems.map((item, index) => (
                                                        <CarouselItem key={index}>
                                                            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        </CarouselItem>
                                                    ))}
                                                </CarouselContent>
                                                <CarouselPrevious className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                                <CarouselNext className="bg-brand-black/80 text-white border-brand-black hover:bg-brand-black" />
                                            </Carousel>
                                        </div>
                                    </div>

                                    {/* Right: Text Content (2/5 = 40% width) */}
                                    <div className="lg:col-span-2 flex">
                                        {/* <Card className="glass-card border-brand-black/30 w-full flex flex-col">
                                            <CardContent className="p-8 flex flex-col justify-center flex-grow"> */}
                                        <div className="space-y-3 leading-relaxed text-lg">
                                            <p>
                                                Satwave Arrays is a flat panel antenna company based in the city of Atlanta. We design, develop, and deliver active electronically steered phased array antennas for satellite communications. We are building reliable, robust, and high-quality phased-array systems that support mobility and fixed connectivity across LEO, MEO, and GEO.
                                            </p>
                                            <p>
                                                We have built and validated multiple prototype antennas and performed extensive measurements, tests and analysis yielding results that demonstrate strong performance. Currently, we are designing them primarily for Ku and Ka bands but will expand to other bands as markets evolve.
                                            </p>
                                            <p>
                                                Satwave's focus is on military and government applications as well as commercial markets. We started operations in mid-2023 and have a talented team of engineers and experienced satellite industry veterans.
                                            </p>
                                        </div>
                                        {/* </CardContent>
                                        </Card> */}
                                    </div>
                                </Card>
                            </motion.div>
                        </TabsContent>

                        {/* Mission Tab - Text Content */}
                        <TabsContent value="mission" className="mt-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Card className="glass-card border-brand-black/30 max-w-4xl mx-auto">
                                    <CardHeader>
                                        <CardTitle className="text-3xl font-bold text-white text-center">Our Mission</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xl text-gray-300 leading-relaxed text-center mb-6">
                                            To revolutionize satellite communication through innovative flat panel phased array antenna technology,
                                            delivering reliable, high-performance solutions for military, government, and commercial applications.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </TabsContent>

                        {/* Values Tab - Grid of Cards */}
                        <TabsContent value="values" className="mt-8">
                            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {values.map((value, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Card
                                            className="glass-card border-brand-black/30 hover:transform hover:-translate-y-2 transition-all duration-300 group h-full"
                                        >
                                            <CardHeader>
                                                <CardTitle className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                                    {value.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-gray-400">{value.desc}</p>
                                                <div className="mt-6 w-12 h-1 bg-brand-black group-hover:w-full transition-all duration-500" />
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Governance Tab - Board Members */}
                        <TabsContent value="governance" className="mt-8">
                            <div className="max-w-6xl mx-auto">
                                <div className="grid md:grid-cols-5 gap-6">
                                    {boardMembers.map((member, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Card key={i} className="glass-card border-brand-black/30 hover:transform hover:-translate-y-2 transition-all duration-300 h-full">
                                                <CardContent className="p-4">
                                                    <div className="aspect-square w-full bg-gradient-to-br from-brand-black/20 to-brand-accent/20 rounded-lg mb-4 flex items-center justify-center">
                                                        <span className="text-white/40 text-xs">Photo</span>
                                                    </div>
                                                    <h3 className="text-white font-bold text-center mb-1">{member.name}</h3>
                                                    <p className="text-gray-400 text-sm text-center">{member.role}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* Team Tab - Team Members Grid */}
                        <TabsContent value="team" className="mt-8">
                            <div className="max-w-6xl mx-auto space-y-8">
                                {/* Leadership Row */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <h3 className="text-white text-xl font-semibold mb-4 text-center uppercase">Leadership</h3>
                                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                        {leadershipTeam.map((member, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <Card
                                                    className="group glass-card border-brand-black/30 hover:border-brand-accent/50 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer relative"
                                                    onClick={() => setSelectedMember(member)}
                                                >
                                                    <CardContent className="p-4">
                                                        <div className="aspect-square w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20 relative">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                    <span className="text-white text-xs font-medium">Click for bio</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="text-white uppercase text-center mb-1">{member.name}</h3>
                                                        <p className="text-gray-400 uppercase text-sm text-center">{member.role}</p>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Rest of Team */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                >
                                    <h3 className="text-white text-xl font-semibold mb-4 text-center uppercase">Team</h3>
                                    <div className="grid md:grid-cols-4 gap-6">
                                        {teamMembers.map((member, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                            >
                                                <Card
                                                    className="group glass-card border-brand-black/30 hover:border-brand-accent/50 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer relative"
                                                    onClick={() => setSelectedMember(member)}
                                                >
                                                    <CardContent className="p-4">
                                                        <div className="aspect-square w-full rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-brand-black/20 to-brand-accent/20 relative">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                    <span className="text-white text-xs font-medium">Click for bio</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="text-white uppercase text-center mb-1">{member.name}</h3>
                                                        <p className="text-gray-400 uppercase text-sm text-center">{member.role}</p>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>

                {/* Team Member Bio Modal */}
                <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
                    <DialogContent className="gradient-deep-ocean border-0 backdrop-blur-3xl max-w-6xl shadow-purple-glow rounded-2xl animate-in fade-in-0 zoom-in-95 duration-300">
                        {selectedMember && (
                            <>
                                <DialogHeader>
                                    <div className="flex items-start gap-6">
                                        <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-brand-accent shadow-xl shadow-brand-accent/20">
                                            <img
                                                src={selectedMember.image}
                                                alt={selectedMember.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <DialogTitle asChild className="text-white text-4xl md:text-4xl font-bold mb-3 leading-tight uppercase">
                                                <h3>{selectedMember.name}</h3>
                                            </DialogTitle>
                                            <p className="text-brand-accent text-xl md:text-2xl uppercase tracking-wider font-semibold">
                                                {selectedMember.role}
                                            </p>
                                        </div>
                                    </div>
                                </DialogHeader>

                                {/* Separator 1: Header to Content */}
                                {/* <Separator className="bg-gray-700" orientation="horizontal" /> */}

                                <DialogDescription className="text-gray-300 text-lg md:text-xl leading-relaxed py-4">
                                    {selectedMember.bio}
                                </DialogDescription>

                                {/* Separator 2: Content to Actions */}
                                <Separator className="bg-gray-700" orientation="horizontal" />

                                <div className="flex justify-end pt-4">
                                    <a
                                        href={selectedMember.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-black to-brand-accent hover:from-brand-accent hover:to-brand-black text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/50"
                                    >
                                        <svg className="w-6 h-6 transition-transform group-hover:fill-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <span>LinkedIn</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}