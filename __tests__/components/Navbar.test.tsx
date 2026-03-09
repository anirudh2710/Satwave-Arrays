import { render, screen } from '@testing-library/react'
import Navbar from '@/app/components/Navbar'

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
    useRouter: () => ({ push: jest.fn() }),
}))

describe('Navbar Component', () => {
    it('renders the Satwave logo', () => {
        render(<Navbar />)
        expect(screen.getByAltText('Satwave Logo')).toBeInTheDocument()
    })

    it('contains primary navigation links', () => {
        render(<Navbar />)
        expect(screen.getAllByText(/About/i)[0]).toBeInTheDocument()
        expect(screen.getAllByText(/Technology/i)[0]).toBeInTheDocument()
    })
})
