// migrate-courses.ts
import { createClient } from '@sanity/client'
import { courses } from './lib/data/courses'
import dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_TOKEN // We need to get this token

if (!projectId || !dataset || !token) {
    console.error('Error: Missing environment variables. Make sure Project ID, Dataset, and Token are set.')
    process.exit(1)
}

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token, // We need a write token to create data
    useCdn: false,
})

async function migrate() {
    console.log('🚀 Starting migration...')

    for (const course of courses) {
        console.log(`Processing course: ${course.title}...`)

        const doc = {
            _type: 'course',
            title: course.title,
            // Create a slug from the subject
            subject: {
                _type: 'slug',
                current: course.subject
            },
            description: course.description,
            lessons: course.lessons.map(lesson => ({
                _type: 'lesson', // Matches schema name
                _key: crypto.randomUUID(), // Unique key for array items
                title: lesson.title,
                content: lesson.content,
                analogy: lesson.analogy,
                example: lesson.example,
                order: lesson.order
            })),
            quiz: course.quiz ? {
                _type: 'quiz',
                title: course.quiz.title,
                questions: course.quiz.questions.map(q => ({
                    _key: crypto.randomUUID(),
                    question: q.question,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                    explanation: q.explanation
                }))
            } : undefined
        }

        try {
            const result = await client.create(doc)
            console.log(`✅ Created course: ${result.title} (ID: ${result._id})`)
        } catch (err) {
            console.error(`❌ Failed to create course ${course.title}:`, err)
        }
    }

    console.log('✨ Migration complete!')
}

migrate()