import { defineField, defineType } from 'sanity'

export const quiz = defineType({
    name: 'quiz',
    title: 'Quiz',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
                        { name: 'question', type: 'string', title: 'Question' },
                        {
                            name: 'options',
                            type: 'array',
                            of: [{ type: 'string' }],
                            title: 'Options',
                        },
                        { name: 'correctAnswer', type: 'number', title: 'Correct Answer Index' },
                        { name: 'explanation', type: 'text', title: 'Explanation' },
                    ],
                },
            ],
        }),
    ],
})
