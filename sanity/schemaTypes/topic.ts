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
            name: 'body',
            title: 'Body Content',
            type: 'blockContent',
        }),
    ]
})