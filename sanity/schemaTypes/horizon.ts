// sanity/schemaTypes/horizon.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'horizon',
    title: 'New Horizons',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            rows: 3,
            description: 'Shown on the listing card. Keep it to 2–3 sentences.',
            validation: Rule => Rule.required().max(300)
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            description: 'The full insight — prose, images, analogies, whatever it needs.'
        }),
        defineField({
            name: 'branch',
            title: 'Branch of Knowledge',
            type: 'string',
            options: {
                list: [
                    { title: 'Science', value: 'science' },
                    { title: 'Mathematics', value: 'mathematics' },
                    { title: 'Technology', value: 'technology' },
                    { title: 'Geography & Earth', value: 'geography' },
                    { title: 'Language & Literature', value: 'language' },
                    { title: 'Philosophy', value: 'philosophy' },
                    { title: 'History', value: 'history' },
                    { title: 'General Knowledge', value: 'general-knowledge' },
                ],
                layout: 'dropdown'
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'icon',
            title: 'Icon Emoji',
            type: 'string',
            description: 'Single emoji for the card (e.g. 🧬, 🌌, 🔭)',

        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'featured',
            title: 'Feature this card?',
            type: 'boolean',
            initialValue: false,
            description: 'Pin to the top of the New Horizons listing, or a future homepage widget.'
        }),
    ],
    orderings: [
        {
            title: 'Newest First',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }]
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'branch',
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: subtitle ? `Branch: ${subtitle}` : 'No branch set'
            }
        }
    }
})