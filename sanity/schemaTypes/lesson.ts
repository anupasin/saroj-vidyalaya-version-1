import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'lesson',
    title: 'Lesson',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
            name: 'content',
            type: 'text',
            title: 'Content',
            rows: 4
        }),
        defineField({ name: 'analogy', type: 'text', title: 'Analogy' }),
        defineField({ name: 'example', type: 'text', title: 'Example' }),
        defineField({ name: 'order', type: 'number', title: 'Order' }),
    ]
})