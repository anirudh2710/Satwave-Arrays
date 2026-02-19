import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'News Article',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Headline',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Technology', value: 'Technology' },
                    { title: 'Company', value: 'Company' },
                    { title: 'Product', value: 'Product' },
                    { title: 'Event', value: 'Event' },
                    { title: 'Case Study', value: 'Case Study' },
                    { title: 'Awards', value: 'Awards' },
                ],
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        }),
    ],
})
