import { render, screen } from '@testing-library/react'
import Technology from '@/app/components/Technology'

describe('Technology Component', () => {
    it('renders the core focus heading', () => {
        render(<Technology />)
        expect(screen.getByText(/Our Core Focus/i)).toBeInTheDocument()
    })

    it('renders the explore button', () => {
        render(<Technology />)
        expect(screen.getByRole('button', { name: /Explore Our Technology/i })).toBeInTheDocument()
    })
})
