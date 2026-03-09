import { render, screen } from '@testing-library/react'
import ProductsAndApplications from '@/app/components/ProductsAndApplications'

describe('ProductsAndApplications Component', () => {
    it('renders the generic products and applications tabs text', () => {
        render(<ProductsAndApplications />)
        expect(screen.getAllByText(/Products/i)[0]).toBeInTheDocument()
        expect(screen.getAllByText(/Applications/i)[0]).toBeInTheDocument()
    })

    it('renders the product tabs', () => {
        render(<ProductsAndApplications />)
        expect(screen.getByRole('tab', { name: /Products/i })).toBeInTheDocument()
        expect(screen.getByRole('tab', { name: /Applications/i })).toBeInTheDocument()
    })
})
