import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function KaBandPage() {
    return (
        <main className="min-h-screen bg-brand-black flex flex-col relative z-0">
            <Navbar />

            <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto w-full flex-grow flex flex-col justify-start">
                {/* Breadcrumbs */}
                <div className="mb-24 self-start">
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
                                <BreadcrumbPage className="text-white font-medium">Ka-band</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center text-center -mt-20">
                    <h1 className="text-5xl md:text-7xl font-bebas-neue text-white uppercase tracking-wide mb-6 opacity-30">
                        Ka-Band AESA
                    </h1>
                    <p className="text-xl text-brand-accent/60 uppercase tracking-widest">
                        Content Coming Soon
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    )
}
