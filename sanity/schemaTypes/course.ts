import { defineField, defineType } from 'sanity'

export const course = defineType({
    name: 'course',
    title: 'Course',
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
            name: 'subject',
            title: 'Subject',
            type: 'string',
            options: {
                list: [
                    { title: 'Mathematics', value: 'mathematics' },
                    { title: 'English', value: 'english' },
                    { title: 'Coding', value: 'coding' },
                    { title: 'Geography', value: 'geography' },
                    { title: 'General Knowledge', value: 'general-knowledge' },
                    { title: 'Science', value: 'science' },
                ],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'lessons',
            title: 'Lessons',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'lesson' } }],
        }),
        defineField({
            name: 'quiz',
            title: 'Quiz',
            type: 'reference',
            to: { type: 'quiz' },
        }),
    ],
})
