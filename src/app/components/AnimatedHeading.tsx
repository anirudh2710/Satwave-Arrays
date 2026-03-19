'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * AnimatedHeading — drop-in replacement for a page-level <h1>.
 * Matches the Framer Motion entrance used on the Why Satwave page.
 */
export default function AnimatedHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.h1>
    );
}
