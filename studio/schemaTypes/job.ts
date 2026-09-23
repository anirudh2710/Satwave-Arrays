import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Job Opening',
    type: 'document',
    fields: [
        defineField({
            name: 'positionTitle',
            title: 'Position Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'positionTitle',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
            options: {
                list: [
                    { title: 'Antenna & RF Engineering', value: 'Antenna & RF Engineering' },
                    { title: 'Hardware Engineering', value: 'Hardware Engineering' },
                    { title: 'Software & AI Systems', value: 'Software & AI Systems' },
                    { title: 'Embedded Systems & DSP', value: 'Embedded Systems & DSP' },
                    { title: 'Product & Operations', value: 'Product & Operations' },
                ],
            },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            initialValue: 'San Jose, CA (Hybrid / On-site)',
        }),
        defineField({
            name: 'employmentType',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Part-time', value: 'Part-time' },
                    { title: 'Contract', value: 'Contract' },
                    { title: 'Internship', value: 'Internship' },
                ],
            },
            initialValue: 'Full-time',
        }),
        defineField({
            name: 'aboutSatwave',
            title: 'About Satwave AI',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'aboutRole',
            title: 'About the role',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'skillsAndExperience',
            title: 'Skills and Experience',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
})
