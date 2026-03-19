import { render, screen } from '@testing-library/react'
import ProductsAndApplications from '@/app/components/ProductsAndApplications'

describe('Products Component', () => {
    it('renders the main heading', () => {
        render(<ProductsAndApplications />)
        expect(screen.getByText(/Mission-Critical AESA Technology/i)).toBeInTheDocument()
    })

    it('renders carousels for both Ku and Ka bands', () => {
        render(<ProductsAndApplications />)
        expect(screen.getByText('Ku-Band Antenna')).toBeInTheDocument()
        expect(screen.getByText('Ka-Band Antenna')).toBeInTheDocument()
    })

    it('renders the shared capabilities accordion', () => {
        render(<ProductsAndApplications />)
        expect(screen.getByText(/Our Shared Approach for Ku-Band & Ka-Band Antennas/i)).toBeInTheDocument()
    })

    it('renders specifications for both products', () => {
        render(<ProductsAndApplications />)
        expect(screen.getByText('Ku-Band Specifications')).toBeInTheDocument()
        expect(screen.getByText('Ka-Band Specifications')).toBeInTheDocument()
    })
})
