import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'topic',
    title: 'Topic (Deep Dive)',
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
            options: { source: 'title' }
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            description: 'Brief description shown on the topics listing page',
            validation: Rule => Rule.max(200)
        }),
        defineField({
            name: 'icon',
            title: 'Icon Emoji',
            type: 'string',
            description: 'Single emoji to represent this topic (e.g., 🧬, 🌱, 🦠)',
            validation: Rule => Rule.max(2)
        }),
        defineField({
            name: 'color',
            title: 'Card Background Color',
            type: 'string',
            description: 'Tailwind color class (e.g., bg-blue-100, bg-green-100)',
            initialValue: 'bg-gray-100'
        }),
        defineField({
            name: 'body',
            title: 'Body Content',
            type: 'blockContent',
        }),
        defineField({
            name: 'relatedTopics',
            title: 'Related Topics',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'topic' }] }],
            description: 'Link to other topics in this series or related explorations'
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which topics appear on the listing page (lower numbers first)',
            initialValue: 100
        })
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ]
})