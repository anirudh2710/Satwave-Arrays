import { render, screen } from '@testing-library/react'
import Footer from '@/app/components/Footer'

describe('Footer Component', () => {
    it('renders the Satwave logo', () => {
        render(<Footer />)
        expect(screen.getByAltText('Satwave Logo')).toBeInTheDocument()
    })

    it('renders copyright text', () => {
        render(<Footer />)
        expect(screen.getByText(/© 2026 Satwave Arrays/i)).toBeInTheDocument()
    })
})
