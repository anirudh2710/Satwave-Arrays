'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 264;

/**
 * Populates an array with image objects for the sequence.
 * Only triggers the callback when the first frame is loaded, allowing lazy loading for the rest.
 */
function setupImageSequence(
    basePath: string,
    count: number,
    imageRefArray: HTMLImageElement[],
    onFirstFrameLoaded: () => void
) {
    for (let i = 1; i <= count; i++) {
        const img = new Image();
        if (i === 1) {
            img.onload = img.onerror = onFirstFrameLoaded;
        }
        const frameNum = String(i).padStart(4, '0');
        img.src = `${basePath}/frame_${frameNum}.jpg`;

        imageRefArray[i - 1] = img;
    }
}

/**
 * Draws an image to a canvas, fitting it centered within the canvas dimensions.
 */
function drawImageToCanvas(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvas: HTMLCanvasElement
) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate "contain" fit
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.drawImage(img, x, y, w, h);
}

export default function AntennaShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const kuCanvasRef = useRef<HTMLCanvasElement>(null);
    const kaCanvasRef = useRef<HTMLCanvasElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const kuImagesRef = useRef<HTMLImageElement[]>([]);
    const kaImagesRef = useRef<HTMLImageElement[]>([]);

    const [loading, setLoading] = useState(true);

    // Setup images and wait only for the first frame before rendering
    useEffect(() => {
        let firstFramesReady = 0;

        const handleFirstFrame = () => {
            firstFramesReady++;
            if (firstFramesReady === 2) {
                setLoading(false);

                // Draw the first frame immediately
                const kuCanvas = kuCanvasRef.current;
                const kaCanvas = kaCanvasRef.current;
                if (kuCanvas && kuImagesRef.current[0]) {
                    const ctx = kuCanvas.getContext('2d');
                    if (ctx) drawImageToCanvas(ctx, kuImagesRef.current[0], kuCanvas);
                }
                if (kaCanvas && kaImagesRef.current[0]) {
                    const ctx = kaCanvas.getContext('2d');
                    if (ctx) drawImageToCanvas(ctx, kaImagesRef.current[0], kaCanvas);
                }
            }
        };

        setupImageSequence('/frames/ku', FRAME_COUNT, kuImagesRef.current, handleFirstFrame);
        setupImageSequence('/frames/ka', FRAME_COUNT, kaImagesRef.current, handleFirstFrame);
    }, []);

    // Set up GSAP ScrollTrigger once images are loaded
    useEffect(() => {
        if (loading) return;

        const section = sectionRef.current;
        const kuCanvas = kuCanvasRef.current;
        const kaCanvas = kaCanvasRef.current;
        const progressBar = progressRef.current;

        if (!section || !kuCanvas || !kaCanvas) return;

        const kuCtx = kuCanvas.getContext('2d');
        const kaCtx = kaCanvas.getContext('2d');

        if (!kuCtx || !kaCtx) return;

        const kuImages = kuImagesRef.current;
        const kaImages = kaImagesRef.current;

        // Create ScrollTrigger
        const trigger = ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5, // 0.5s smoothing for snappy but smooth response
            onUpdate: (self) => {
                const frameIndex = Math.min(
                    FRAME_COUNT - 1,
                    Math.floor(self.progress * FRAME_COUNT)
                );

                // Draw nearest loaded frame for Ku-Band
                let kuLoadedIndex = frameIndex;
                while (kuLoadedIndex >= 0) {
                    const img = kuImages[kuLoadedIndex];
                    if (img && img.complete && img.naturalHeight > 0) {
                        drawImageToCanvas(kuCtx, img, kuCanvas);
                        break;
                    }
                    kuLoadedIndex--;
                }

                // Draw nearest loaded frame for Ka-Band
                let kaLoadedIndex = frameIndex;
                while (kaLoadedIndex >= 0) {
                    const img = kaImages[kaLoadedIndex];
                    if (img && img.complete && img.naturalHeight > 0) {
                        drawImageToCanvas(kaCtx, img, kaCanvas);
                        break;
                    }
                    kaLoadedIndex--;
                }

                if (progressBar) {
                    progressBar.style.height = `${self.progress * 100}%`;
                }
            },
        });

        return () => {
            trigger.kill();
        };
    }, [loading]);

    // Handle canvas resize
    useEffect(() => {
        const resizeCanvases = () => {
            const kuCanvas = kuCanvasRef.current;
            const kaCanvas = kaCanvasRef.current;

            if (kuCanvas) {
                const rect = kuCanvas.getBoundingClientRect();
                kuCanvas.width = rect.width * window.devicePixelRatio;
                kuCanvas.height = rect.height * window.devicePixelRatio;
            }
            if (kaCanvas) {
                const rect = kaCanvas.getBoundingClientRect();
                kaCanvas.width = rect.width * window.devicePixelRatio;
                kaCanvas.height = rect.height * window.devicePixelRatio;
            }
        };

        resizeCanvases();
        window.addEventListener('resize', resizeCanvases);
        return () => window.removeEventListener('resize', resizeCanvases);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="antenna-showcase"
            className="relative bg-brand-black"
            style={{ height: '500vh' }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-pure-white uppercase tracking-wider mb-4">
                        Explore Our Antennas
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Scroll to explore the layered architecture of our phased array antenna systems
                    </p>
                </motion.div>

                {/* Canvas Grid — Side by Side */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Ku-Band Canvas */}
                    <div className="relative">
                        <div className="relative overflow-hidden bg-black aspect-[800/304]">
                            <canvas
                                ref={kuCanvasRef}
                                className="w-full h-full"
                            />
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                                    <div className="text-center">
                                        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-3" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">
                                Ku-Band
                            </h3>
                            <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-wider">
                                Active Electronically Steered Array
                            </p>
                        </div>
                    </div>

                    {/* Ka-Band Canvas */}
                    <div className="relative">
                        <div className="relative overflow-hidden bg-black aspect-[800/304]">
                            <canvas
                                ref={kaCanvasRef}
                                className="w-full h-full"
                            />
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                                    <div className="text-center">
                                        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-3" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">
                                Ka-Band
                            </h3>
                            <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-wider">
                                Active Electronically Steered Array
                            </p>
                        </div>
                    </div>

                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
                >
                    <span className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-semibold drop-shadow-lg">
                        Scroll to Explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="bg-black/40 p-2 rounded-full border border-white/10 backdrop-blur-sm"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
