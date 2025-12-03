import { defineField, defineType } from 'sanity'

export const topic = defineType({
    name: 'topic',
    title: 'Topic',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Short description for the card view',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }
                    ]
                },
                {
                    name: 'illustrationPlaceholder',
                    title: 'Illustration Placeholder',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'prompt', type: 'text', title: 'Prompt' },
                        { name: 'imageSrc', type: 'string', title: 'Image Source (Local)' },
                        { name: 'image', type: 'image', title: 'Image (Sanity)' }
                    ]
                }
            ],
        }),
        defineField({
            name: 'quiz',
            title: 'Quiz',
            type: 'reference',
            to: { type: 'quiz' },
        }),
    ],
})
