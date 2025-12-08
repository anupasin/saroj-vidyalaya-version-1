import { defineType, defineArrayMember } from 'sanity'

export default defineType({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        defineArrayMember({
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],
            },
        }),
        // Custom Block: Illustration Placeholder
        defineArrayMember({
            type: 'object',
            name: 'illustration',
            title: 'Illustration / Image',
            fields: [
                { name: 'image', type: 'image', title: 'Image Upload', options: { hotspot: true } },
                { name: 'title', type: 'string', title: 'Title (Alt Text)' },
                { name: 'prompt', type: 'text', title: 'Prompt / Caption' },
            ],
            preview: {
                select: { title: 'title', media: 'image' }
            }
        }),
        // Custom Block: Embedded Quiz
        defineArrayMember({
            type: 'quiz',
            name: 'embeddedQuiz',
            title: 'Embedded Quiz'
        })
    ],
})