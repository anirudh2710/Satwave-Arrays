import '@testing-library/jest-dom'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}
window.ResizeObserver = ResizeObserver;

class IntersectionObserver {
    root = null;
    rootMargin = '';
    thresholds = [];
    observe() { }
    unobserve() { }
    disconnect() { }
    takeRecords() { return []; }
}
window.IntersectionObserver = IntersectionObserver as unknown as typeof window.IntersectionObserver;
