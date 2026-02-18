'use client';

import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import ProductsAndApplications from '../components/ProductsAndApplications';
import Footer from '../components/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'products';

    return (
        <ProductsAndApplications activeTab={tab} onTabChange={(newTab) => {
            // Update URL when tab changes
            const url = new URL(window.location.href);
            url.searchParams.set('tab', newTab);
            window.history.pushState({}, '', url);
        }} />
    );
}

function ProductsLoadingSkeleton() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            {/* Tab skeleton */}
            <div className="flex gap-4 justify-center mb-8">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
            </div>

            {/* Products grid skeleton */}
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Ku-Band skeleton */}
                <div className="space-y-4">
                    <Skeleton className="h-8 w-48 mx-auto" />
                    <Skeleton className="aspect-video w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>

                {/* Ka-Band skeleton */}
                <div className="space-y-4">
                    <Skeleton className="h-8 w-48 mx-auto" />
                    <Skeleton className="aspect-video w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <main className="relative min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Products & Applications Content */}
            <div className="relative z-10 pt-20">
                <Suspense fallback={<ProductsLoadingSkeleton />}>
                    <ProductsContent />
                </Suspense>
                <Footer />
            </div>
        </main>
    );
}
