import { render, screen } from '@testing-library/react'
import NewsTicker from '@/app/components/NewsTicker'

describe('NewsTicker Component', () => {
    const mockNews = [
        { title: 'Test News 1', slug: 'test-1', publishedAt: '2026-01-01', category: 'News', excerpt: 'Test excerpt' }
    ]

    it('renders nothing if news array is empty', () => {
        const { container } = render(<NewsTicker news={[]} />)
        expect(container).toBeEmptyDOMElement()
    })

    it('renders the Latest News header', () => {
        render(<NewsTicker news={mockNews} />)
        expect(screen.getByText(/Latest News/i)).toBeInTheDocument()
    })

    it('renders the news items', () => {
        render(<NewsTicker news={mockNews} />)
        expect(screen.getByText(/Test News 1/i)).toBeInTheDocument()
        expect(screen.getByText(/Test excerpt/i)).toBeInTheDocument()
    })
})
