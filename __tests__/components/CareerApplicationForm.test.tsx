import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CareerApplicationForm from '@/app/careers/CareerApplicationForm';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('CareerApplicationForm Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.fetch = jest.fn();
    });

    it('renders all mandatory fields and the submit button', () => {
        render(<CareerApplicationForm positionTitle="Antenna Engineer" />);

        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email ID/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
        expect(screen.getByText(/Click or drag & drop to upload your resume/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Submit Application/i })).toBeInTheDocument();
    });

    it('displays validation errors for all empty fields when submit is clicked', async () => {
        render(<CareerApplicationForm positionTitle="Antenna Engineer" />);

        const submitButton = screen.getByRole('button', { name: /Submit Application/i });
        fireEvent.click(submitButton);

        expect(screen.getByText(/First name is required\./i)).toBeInTheDocument();
        expect(screen.getByText(/Last name is required\./i)).toBeInTheDocument();
        expect(screen.getByText(/Email ID is required\./i)).toBeInTheDocument();
        expect(screen.getByText(/Phone number is required\./i)).toBeInTheDocument();
        expect(screen.getByText(/Please select your gender\./i)).toBeInTheDocument();
        expect(screen.getByText(/Address is required\./i)).toBeInTheDocument();
        expect(screen.getByText(/Resume is required\. Please upload your resume\./i)).toBeInTheDocument();

        // Alert message should appear
        expect(
            screen.getByText(/Please fill in all mandatory fields correctly before submitting\./i)
        ).toBeInTheDocument();

        // fetch should NOT have been called
        expect(global.fetch).not.toHaveBeenCalled();
    });

    it('displays validation error when an invalid email is entered', async () => {
        render(<CareerApplicationForm positionTitle="Antenna Engineer" />);

        const emailInput = screen.getByLabelText(/Email ID/i);
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        const submitButton = screen.getByRole('button', { name: /Submit Application/i });
        fireEvent.click(submitButton);

        expect(screen.getByText(/Please enter a valid email address\./i)).toBeInTheDocument();
    });

    it('displays validation error when an invalid phone number is entered', async () => {
        render(<CareerApplicationForm positionTitle="Antenna Engineer" />);

        const phoneInput = screen.getByLabelText(/Phone Number/i);
        fireEvent.change(phoneInput, { target: { value: '12' } });

        const submitButton = screen.getByRole('button', { name: /Submit Application/i });
        fireEvent.click(submitButton);

        expect(screen.getByText(/Please enter a valid phone number\./i)).toBeInTheDocument();
    });

    it('successfully submits when all fields are valid', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'Thank you! Your application has been submitted successfully.' }),
        });

        render(<CareerApplicationForm positionTitle="Antenna Engineer" />);

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Jane' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/Email ID/i), { target: { value: 'jane.doe@example.com' } });
        fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '+1 (555) 123-4567' } });
        fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: 'Female' } });
        fireEvent.change(screen.getByLabelText(/Address/i), { target: { value: '123 Tech Lane, San Jose, CA' } });

        // Simulate resume file upload
        const file = new File(['dummy resume content'], 'jane_doe_resume.pdf', { type: 'application/pdf' });
        const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
        fireEvent.change(fileInput, { target: { files: [file] } });

        expect(screen.getByText('jane_doe_resume.pdf')).toBeInTheDocument();

        const submitButton = screen.getByRole('button', { name: /Submit Application/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith('/api/careers', expect.objectContaining({
                method: 'POST',
            }));
        });

        await waitFor(() => {
            expect(
                screen.getByText(/Thank you! Your application has been submitted successfully\./i)
            ).toBeInTheDocument();
        });
    });
});
