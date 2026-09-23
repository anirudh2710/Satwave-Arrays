'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, CheckCircle2, AlertCircle, X, Loader2 } from 'lucide-react';

interface CareerApplicationFormProps {
    positionTitle?: string;
}

export default function CareerApplicationForm({ positionTitle = 'Phased Array Antenna Engineer' }: CareerApplicationFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        address: '',
    });

    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const fileInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'firstName':
                return value.trim() ? '' : 'First name is required.';
            case 'lastName':
                return value.trim() ? '' : 'Last name is required.';
            case 'email':
                if (!value.trim()) return 'Email ID is required.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return 'Please enter a valid email address.';
                }
                return '';
            case 'phone':
                if (!value.trim()) return 'Phone number is required.';
                if (!/^[\d\s+\-()]{7,25}$/.test(value.trim())) {
                    return 'Please enter a valid phone number.';
                }
                return '';
            case 'gender':
                return value ? '' : 'Please select your gender.';
            case 'address':
                return value.trim() ? '' : 'Address is required.';
            default:
                return '';
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error on change if valid
        if (errors[name]) {
            const errorMsg = validateField(name, value);
            setErrors(prev => {
                const next = { ...prev };
                if (!errorMsg) {
                    delete next[name];
                } else {
                    next[name] = errorMsg;
                }
                return next;
            });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedExtensions = ['.pdf', '.doc', '.docx'];
        const fileName = file.name.toLowerCase();
        const hasValidExt = allowedExtensions.some(ext => fileName.endsWith(ext));

        if (!hasValidExt) {
            setErrors(prev => ({
                ...prev,
                resume: 'Invalid file format. Please upload a PDF, DOC, or DOCX.',
            }));
            setResumeFile(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            setErrors(prev => ({
                ...prev,
                resume: 'File size exceeds 10MB limit.',
            }));
            setResumeFile(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }

        setResumeFile(file);
        setErrors(prev => {
            const next = { ...prev };
            delete next.resume;
            return next;
        });
    };

    const handleRemoveFile = () => {
        setResumeFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setErrors(prev => ({
            ...prev,
            resume: 'Resume is required. Please upload your resume.',
        }));
    };

    const validateAllFields = () => {
        const newErrors: Record<string, string> = {};

        // Validate text and select fields
        Object.entries(formData).forEach(([key, value]) => {
            const error = validateField(key, value);
            if (error) {
                newErrors[key] = error;
            }
        });

        // Validate resume file
        if (!resumeFile) {
            newErrors.resume = 'Resume is required. Please upload your resume.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus({ type: null, message: '' });

        const isValid = validateAllFields();

        if (!isValid) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in all mandatory fields correctly before submitting.',
            });
            // Scroll to the first error
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        setIsSubmitting(true);

        try {
            const submission = new FormData();
            submission.append('firstName', formData.firstName);
            submission.append('lastName', formData.lastName);
            submission.append('email', formData.email);
            submission.append('phone', formData.phone);
            submission.append('gender', formData.gender);
            submission.append('address', formData.address);
            submission.append('positionTitle', positionTitle);
            if (resumeFile) {
                submission.append('resume', resumeFile);
            }

            const response = await fetch('/api/careers', {
                method: 'POST',
                body: submission,
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: data.message || 'Thank you! Your application has been submitted successfully.',
                });
                // Reset form state
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    gender: '',
                    address: '',
                });
                setResumeFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                setErrors({});
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to submit application. Please check your information and try again.',
                });
                if (data.errors) {
                    setErrors(prev => ({ ...prev, ...data.errors }));
                }
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'A network error occurred. Please check your connection and try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="apply-form" className="w-full max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
                {/* Header inside card */}
                <div className="mb-8 border-b border-white/10 pb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">
                        Application Form
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase">
                        Apply for {positionTitle}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                        All fields marked with <span className="text-red-400 font-bold">*</span> are mandatory.
                    </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Status Alert Message */}
                    <AnimatePresence>
                        {submitStatus.type && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`p-4 rounded-xl flex items-start gap-3 ${submitStatus.type === 'success'
                                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
                                    : 'bg-red-500/15 border border-red-500/40 text-red-300'
                                    }`}
                                role="alert"
                            >
                                {submitStatus.type === 'success' ? (
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-400" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-400" />
                                )}
                                <div className="text-sm leading-relaxed font-medium">
                                    {submitStatus.message}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="firstName" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                                First Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Jane"
                                className={`input-field border ${errors.firstName
                                    ? 'border-red-500/80 bg-red-500/10 focus:border-red-400'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}
                                aria-invalid={!!errors.firstName}
                                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                            />
                            {errors.firstName && (
                                <p id="firstName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    {errors.firstName}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                                Last Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Doe"
                                className={`input-field border ${errors.lastName
                                    ? 'border-red-500/80 bg-red-500/10 focus:border-red-400'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}
                                aria-invalid={!!errors.lastName}
                                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                            />
                            {errors.lastName && (
                                <p id="lastName-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    {errors.lastName}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Row 2: Email ID & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                                Email ID <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="jane.doe@example.com"
                                className={`input-field border ${errors.email
                                    ? 'border-red-500/80 bg-red-500/10 focus:border-red-400'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && (
                                <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                                Phone Number <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+1 (555) 012-3456"
                                className={`input-field border ${errors.phone
                                    ? 'border-red-500/80 bg-red-500/10 focus:border-red-400'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}
                                aria-invalid={!!errors.phone}
                                aria-describedby={errors.phone ? 'phone-error' : undefined}
                            />
                            {errors.phone && (
                                <p id="phone-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Row 3: Gender & Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="gender" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                                Gender <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className={`input-field border appearance-none pr-10 cursor-pointer ${errors.gender
                                        ? 'border-red-500/80 bg-red-500/10 focus:border-red-400'
                                        : 'border-white/10 hover:border-white/20'
                                        }`}
                                    aria-invalid={!!errors.gender}
                                    aria-describedby={errors.gender ? 'gender-error' : undefined}
                                >
                                    <option value="" className="bg-[#141414] text-gray-400">
                                        Select Gender
                                    </option>
                                    <option value="Male" className="bg-[#141414] text-white">
                                        Male
                                    </option>
                                    <option value="Female" className="bg-[#141414] text-white">
                                        Female
                                    </option>
                                    <option value="Non-binary" className="bg-[#141414] text-white">
                                        Non-binary
                                    </option>
                                    <option value="Prefer not to say" className="bg-[#141414] text-white">
                                        Prefer not to say
                                    </option>
                                    <option value="Other" className="bg-[#141414] text-white">
                                        Other
                                    </option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {errors.gender && (
                                <p id="gender-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    {errors.gender}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                                Address <span className="text-red-400">*</span>
                            </label>
                            <input
                                id="address"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="City, State, Country or Street"
                                className={`input-field border ${errors.address
                                    ? 'border-red-500/80 bg-red-500/10 focus:border-red-400'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}
                                aria-invalid={!!errors.address}
                                aria-describedby={errors.address ? 'address-error' : undefined}
                            />
                            {errors.address && (
                                <p id="address-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    {errors.address}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Row 4: Resume Upload */}
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                            Resume / CV <span className="text-red-400">*</span>
                        </label>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            id="resume-upload"
                            aria-invalid={!!errors.resume}
                            aria-describedby={errors.resume ? 'resume-error' : undefined}
                        />

                        {!resumeFile ? (
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${errors.resume
                                    ? 'border-red-500/70 bg-red-500/5 hover:border-red-400'
                                    : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                                    }`}
                            >
                                <Upload className={`w-8 h-8 mx-auto mb-2 ${errors.resume ? 'text-red-400' : 'text-gray-400'}`} />
                                <p className="text-sm font-semibold text-white">
                                    Click or drag & drop to upload your resume
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Accepted formats: PDF, DOC, DOCX (Max 10MB)
                                </p>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10">
                                <div className="flex items-center gap-3 min-w-0">
                                    <FileText className="w-6 h-6 text-emerald-400 shrink-0" />
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-white truncate">
                                            {resumeFile.name}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleRemoveFile}
                                    className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                                    aria-label="Remove uploaded resume"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        )}

                        {errors.resume && (
                            <p id="resume-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                                <AlertCircle className="w-3.5 h-3.5" />
                                {errors.resume}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full btn-brand py-4 rounded-lg uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.01]'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Submitting Application...
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
