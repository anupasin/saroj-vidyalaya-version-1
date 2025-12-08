import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'quiz',
    title: 'Quiz',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Quiz Title',
            type: 'string',
        }),
        defineField({
            name: 'questions',
            title: 'Questions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'question', type: 'string', title: 'Question' }),
                        defineField({
                            name: 'options',
                            type: 'array',
                            title: 'Options',
                            of: [{ type: 'string' }],
                            validation: Rule => Rule.min(2)
                        }),
                        defineField({
                            name: 'correctAnswer',
                            type: 'number',
                            title: 'Correct Answer Index (0-based)',
                            description: '0 is the first option, 1 is the second, etc.'
                        }),
                        defineField({ name: 'explanation', type: 'text', title: 'Explanation' }),
                    ]
                }
            ]
        })
    ]
})