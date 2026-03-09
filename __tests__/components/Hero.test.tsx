import { render, screen } from '@testing-library/react'
import Hero from '@/app/components/Hero'

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
    useRouter: () => ({ push: jest.fn() }),
}))

describe('Hero Component', () => {
    const mockScrollTo = jest.fn()
    const mockNews = [
        { title: 'Test News 1', slug: 'test-1', publishedAt: '2026-01-01', category: 'News' }
    ]

    it('renders the main headline', () => {
        render(<Hero scrollTo={mockScrollTo} news={mockNews} />)
        expect(screen.getByText(/Enabling/i)).toBeInTheDocument()
        expect(screen.getByText(/Mobility/i)).toBeInTheDocument()
    })

    it('renders the CTA buttons', () => {
        render(<Hero scrollTo={mockScrollTo} news={mockNews} />)
        expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
    })
})
