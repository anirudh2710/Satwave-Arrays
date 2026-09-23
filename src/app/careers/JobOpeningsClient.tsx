'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase,
    MapPin,
    Building2,
    ArrowRight,
    GraduationCap,
    CheckCircle,
    Sparkles,
    X,
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { PortableText } from '@portabletext/react';
import CareerApplicationForm from './CareerApplicationForm';

export interface JobPosting {
    _id?: string;
    positionTitle: string;
    slug?: string;
    department?: string;
    location?: string;
    employmentType?: string;
    aboutSatwave?: any;
    aboutRole?: any;
    education?: any;
    responsibilities?: any;
    skillsAndExperience?: any;
    publishedAt?: string;
}

interface JobOpeningsClientProps {
    jobs: JobPosting[];
}

function renderContent(content: any) {
    if (!content) return null;

    if (Array.isArray(content)) {
        // If it is Sanity PortableText block array
        if (content.length > 0 && typeof content[0] === 'object' && content[0]._type === 'block') {
            return (
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed
                    prose-p:text-gray-300 prose-p:mb-4 prose-p:leading-relaxed
                    prose-ul:my-4 prose-ul:space-y-2
                    prose-li:text-gray-300
                    prose-strong:text-white">
                    <PortableText value={content} />
                </div>
            );
        }

        // If it is an array of strings (e.g. bullets)
        return (
            <ul className="space-y-3">
                {content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-2 shrink-0" />
                        <span>{typeof item === 'string' ? item : JSON.stringify(item)}</span>
                    </li>
                ))}
            </ul>
        );
    }

    if (typeof content === 'string') {
        return <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">{content}</p>;
    }

    return null;
}

export default function JobOpeningsClient({ jobs }: JobOpeningsClientProps) {
    const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

    return (
        <>
            {/* Roles List - Only role cards are shown by default */}
            <div className="space-y-4 max-w-4xl mx-auto">
                {jobs.length > 0 ? (
                    <>
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <p className="text-sm font-semibold uppercase tracking-widest text-white-400">
                                Available Positions ({jobs.length})
                            </p>
                            <span className="text-xs text-white-500">
                                Click any position to view details and apply
                            </span>
                        </div>

                        <div className="grid gap-4">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job._id || job.slug || index}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => setSelectedJob(job)}
                                    className="glass-card group cursor-pointer p-6 sm:p-7 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-lg hover:shadow-2xl"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedJob(job);
                                        }
                                    }}
                                    aria-label={`View details and apply for ${job.positionTitle}`}
                                >
                                    {/* Left: Role Info */}
                                    <div className="space-y-2.5">
                                        <div className="flex flex-wrap items-center gap-2">
                                            {job.department && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10">
                                                    <Building2 className="w-3 h-3" />
                                                    {job.department}
                                                </span>
                                            )}
                                            {job.employmentType && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                                                    <Briefcase className="w-3 h-3" />
                                                    {job.employmentType}
                                                </span>
                                            )}
                                            {job.location && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/5 text-gray-400 border border-white/10">
                                                    <MapPin className="w-3 h-3" />
                                                    {job.location}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                                            {job.positionTitle}
                                        </h3>
                                    </div>

                                    {/* Right: Action Button */}
                                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                                        <span className="btn-brand px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 group-hover:scale-105 transition-all">
                                            View & Apply
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Empty state - no jobs published in Sanity yet */
                    <div className="glass-card rounded-2xl p-16 border border-white/10 text-center">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-7 h-7 text-gray-500" />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-3">
                            No Openings Right Now
                        </h3>
                        <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                            We don&apos;t have any active job postings at the moment. Check back soon or reach out to us directly — we&apos;re always looking for exceptional talent.
                        </p>
                        <a
                            href="/#contact"
                            className="btn-brand inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
                        >
                            Get in Touch
                        </a>
                    </div>
                )}
            </div>

            {/* Modal Dialog for Role Description & Application Form */}
            <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
                <DialogContent
                    className="w-[94vw] max-w-4xl sm:max-w-4xl md:max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a]/95 border-white/20 text-white p-6 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-2xl no-scrollbar"
                >
                    {selectedJob && (
                        <div className="space-y-8">
                            {/* Modal Header */}
                            <DialogHeader className="border-b border-white/10 pb-6 text-left">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    {selectedJob.department && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                                            <Building2 className="w-3.5 h-3.5" />
                                            {selectedJob.department}
                                        </span>
                                    )}
                                    {selectedJob.employmentType && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                                            <Briefcase className="w-3.5 h-3.5" />
                                            {selectedJob.employmentType}
                                        </span>
                                    )}
                                    {selectedJob.location && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {selectedJob.location}
                                        </span>
                                    )}
                                </div>
                                <DialogTitle className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                                    {selectedJob.positionTitle}
                                </DialogTitle>
                                <DialogDescription className="text-gray-400 text-sm mt-1">
                                    Review the job requirements below and complete the application details to apply.
                                </DialogDescription>
                            </DialogHeader>

                            {/* Job Description Details */}
                            <div className="space-y-8 py-2">
                                {/* 1. About Satwave AI */}
                                {selectedJob.aboutSatwave && (
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                            About Satwave AI
                                        </h4>
                                        <div className="glass-card bg-white/[0.02] p-5 rounded-xl border border-white/10">
                                            {renderContent(selectedJob.aboutSatwave)}
                                        </div>
                                    </div>
                                )}

                                {/* 2. About the Role */}
                                {selectedJob.aboutRole && (
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                            About the Role
                                        </h4>
                                        <div className="glass-card bg-white/[0.02] p-5 rounded-xl border border-white/10">
                                            {renderContent(selectedJob.aboutRole)}
                                        </div>
                                    </div>
                                )}

                                {/* 3. Education */}
                                {selectedJob.education && (
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                            <GraduationCap className="w-5 h-5 text-white/80" />
                                            Education
                                        </h4>
                                        <div className="glass-card bg-white/[0.02] p-5 rounded-xl border border-white/10">
                                            {renderContent(selectedJob.education)}
                                        </div>
                                    </div>
                                )}

                                {/* 4. Responsibilities */}
                                {selectedJob.responsibilities && (
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                                            Responsibilities
                                        </h4>
                                        <div className="glass-card bg-white/[0.02] p-6 rounded-xl border border-white/10">
                                            {renderContent(selectedJob.responsibilities)}
                                        </div>
                                    </div>
                                )}

                                {/* 5. Skills and Experience */}
                                {selectedJob.skillsAndExperience && (
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                            <Sparkles className="w-5 h-5 text-white" />
                                            Skills and Experience
                                        </h4>
                                        <div className="glass-card bg-white/[0.02] p-6 rounded-xl border border-white/10">
                                            {renderContent(selectedJob.skillsAndExperience)}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Divider to Application Form */}
                            <div className="border-t border-white/10 pt-6">
                                <CareerApplicationForm positionTitle={selectedJob.positionTitle} />
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
