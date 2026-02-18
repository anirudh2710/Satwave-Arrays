export default function Footer() {
    return (
        <footer className="bg-void-black py-16 border-t border-purple-accent/10 text-center relative z-20">
            <div className="mb-8">
                <img
                    src='/Satwave_logos/Horizontal_logo/SVGs/Satwave_White.svg'
                    alt="Satwave Logo"
                    className="h-8 w-auto mx-auto opacity-50 grayscale hover:grayscale-0 transition-all"
                />
            </div>
            <p className="text-gray-600 text-xs tracking-[0.4em] uppercase font-bold">
                © 2026 Satwave Arrays Inc. All rights reserved.
            </p>
        </footer>
    )
}