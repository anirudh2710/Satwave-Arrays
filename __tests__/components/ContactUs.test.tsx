import { render, screen } from '@testing-library/react'
import ContactUs from '@/app/components/ContactUs'

describe('ContactUs Component', () => {
    it('renders the contact heading', () => {
        render(<ContactUs />)
        expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
    })

    it('renders the contact form fields', () => {
        render(<ContactUs />)
        expect(screen.getByPlaceholderText('John')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Doe')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('john@example.com')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('How can we help you?')).toBeInTheDocument()
    })

    it('renders the submit button', () => {
        render(<ContactUs />)
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
    })
})
