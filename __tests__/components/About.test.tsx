import { render, screen } from '@testing-library/react'
import About from '@/app/components/About'

describe('About Component', () => {
    it('renders the overview text by default', () => {
        render(<About />)
        expect(screen.getByText(/Satwave Arrays is a flat panel antenna company/i)).toBeInTheDocument()
    })

    it('renders the tabs', () => {
        render(<About />)
        expect(screen.getByRole('tab', { name: /Overview/i })).toBeInTheDocument()
        expect(screen.getByRole('tab', { name: /Team/i })).toBeInTheDocument()
        expect(screen.getByRole('tab', { name: /Values/i })).toBeInTheDocument()
    })
})
