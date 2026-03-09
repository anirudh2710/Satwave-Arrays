import { render, screen } from '@testing-library/react'
import AntennaShowcase from '@/app/components/AntennaShowcase'

describe('AntennaShowcase Component', () => {
    it('renders the main heading', () => {
        render(<AntennaShowcase />)
        expect(screen.getByText(/Explore Our Antennas/i)).toBeInTheDocument()
    })

    it('renders the product categories', () => {
        render(<AntennaShowcase />)
        expect(screen.getAllByText(/Ku-Band/i).length).toBeGreaterThan(0)
        expect(screen.getAllByText(/Ka-Band/i).length).toBeGreaterThan(0)
    })
})
