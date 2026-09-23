import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import JobOpeningsClient, { JobPosting } from '@/app/careers/JobOpeningsClient';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

const MOCK_JOBS: JobPosting[] = [
    {
        positionTitle: 'Lead Phased Array Antenna Engineer',
        department: 'Antenna & RF Engineering',
        location: 'San Jose, CA',
        employmentType: 'Full-time',
        aboutSatwave: 'Satwave AI is pioneering phased array antennas.',
        aboutRole: 'Architect and validate our active phased arrays.',
        education: 'Bachelor or Master in Electrical Engineering.',
        responsibilities: ['Design phased array antennas', 'Calibrate phase/amplitude'],
        skillsAndExperience: ['5+ years designing phased arrays', 'Proficiency in HFSS'],
    },
    {
        positionTitle: 'AI & Embedded DSP Software Engineer',
        department: 'Software & AI Systems',
        location: 'San Jose, CA',
        employmentType: 'Full-time',
        aboutSatwave: 'Satwave AI is pioneering phased array antennas.',
        aboutRole: 'Develop real-time beam tracking software.',
        education: 'Degree in Computer Science or Electrical Engineering.',
        responsibilities: ['Implement beamforming algorithms', 'Optimize DSP pipelines'],
        skillsAndExperience: ['C/C++, Python, PyTorch', 'DSP and FPGA'],
    },
];

describe('JobOpeningsClient Component', () => {
    it('shows only the role cards by default and hides job/applicant details', () => {
        render(<JobOpeningsClient jobs={MOCK_JOBS} />);

        // Role titles should be visible
        expect(screen.getByText('Lead Phased Array Antenna Engineer')).toBeInTheDocument();
        expect(screen.getByText('AI & Embedded DSP Software Engineer')).toBeInTheDocument();

        // Job details & applicant form fields should NOT be visible by default
        expect(screen.queryByText(/About the Role/i)).not.toBeInTheDocument();
        expect(screen.queryByLabelText(/First Name/i)).not.toBeInTheDocument();
        expect(screen.queryByLabelText(/Resume \/ CV/i)).not.toBeInTheDocument();
    });

    it('opens modal with job description and application form when a role is clicked', async () => {
        render(<JobOpeningsClient jobs={MOCK_JOBS} />);

        // Click on the first role
        const roleCard = screen.getByText('Lead Phased Array Antenna Engineer');
        fireEvent.click(roleCard);

        // Modal should now be open displaying job description sections
        await waitFor(() => {
            expect(screen.getByText(/About Satwave AI/i)).toBeInTheDocument();
            expect(screen.getByText(/About the Role/i)).toBeInTheDocument();
            expect(screen.getByText(/Education/i)).toBeInTheDocument();
            expect(screen.getByText(/Responsibilities/i)).toBeInTheDocument();
            expect(screen.getByText(/Skills and Experience/i)).toBeInTheDocument();
        });

        // Application form fields should now be accessible in the modal
        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email ID/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Submit Application/i })).toBeInTheDocument();
    });
});
