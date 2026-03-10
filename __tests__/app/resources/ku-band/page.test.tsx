import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KuBandPage from '@/app/resources/ku-band/page';

// Mock components that might use browser APIs, hooks, or complex setups
jest.mock('@/app/components/Navbar', () => {
    return function MockNavbar() {
        return <div data-testid="mock-navbar">Navbar</div>;
    };
});

jest.mock('@/app/components/Footer', () => {
    return function MockFooter() {
        return <div data-testid="mock-footer">Footer</div>;
    };
});

// Mock Next.js Link
jest.mock('next/link', () => {
    return ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    );
});

// Mocking Shadcn components if necessary (sometimes they require special context, but usually standard DOM is fine)
// We'll let them render natively first, and only mock if they fail.

describe('KuBandPage Component', () => {
    it('renders the header and expected title', () => {
        render(<KuBandPage />);

        expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('mock-footer')).toBeInTheDocument();

        // Check for the main hero heading
        const heading = screen.getByRole('heading', { level: 1, name: /Full Duplex Ku-Band AESA/i });
        expect(heading).toBeInTheDocument();
    });

    it('renders the breadcrumb navigation', () => {
        render(<KuBandPage />);
        expect(screen.getByText('Resources')).toBeInTheDocument();
        expect(screen.getByText('Ku-band')).toBeInTheDocument();
    });

    it('renders the key features section', () => {
        render(<KuBandPage />);
        expect(screen.getByText(/Key features include:/i)).toBeInTheDocument();
        // Check for at least one feature item
        expect(screen.getByText(/Engineered in-house to retain design control/i)).toBeInTheDocument();
    });

    it('renders the engineering philosophy cards', () => {
        render(<KuBandPage />);
        expect(screen.getByText(/Satwave’s Engineering Philosophy/i)).toBeInTheDocument();
        expect(screen.getByText('Data-Driven Design')).toBeInTheDocument();
        expect(screen.getByText('Open-Book Engineering')).toBeInTheDocument();
        expect(screen.getByText('Transparency & Reliability')).toBeInTheDocument();
    });

    it('renders the performance testing and specifications sections', () => {
        render(<KuBandPage />);
        expect(screen.getByText(/Test Results & Specifications/i)).toBeInTheDocument();

        // General specs
        expect(screen.getByText('Frequencies:')).toBeInTheDocument();
        expect(screen.getByText('425W')).toBeInTheDocument(); // Power

        // Ensure tables exist
        expect(screen.getByText(/EIRP/i)).toBeInTheDocument();
        expect(screen.getByText('46.5 dBW')).toBeInTheDocument(); // One of the EIRP values
    });

    it('renders images correctly', () => {
        render(<KuBandPage />);

        const frontBackImg = screen.getByAltText(/Ku-band Antenna Front and Back/i);
        expect(frontBackImg).toBeInTheDocument();
        expect(frontBackImg).toHaveAttribute('src', '/resources/ku-band/antenna-front-back.jpg');

        const heatmapImg = screen.getByAltText(/Antenna Heatmap Results/i);
        expect(heatmapImg).toBeInTheDocument();
        expect(heatmapImg).toHaveAttribute('src', '/resources/ku-band/heatmap1.png');

        const propagationImg = screen.getByAltText(/Ku Band/i);
        expect(propagationImg).toBeInTheDocument();
        expect(propagationImg).toHaveAttribute('src', '/resources/ku-band/chart.png');
    });
});
