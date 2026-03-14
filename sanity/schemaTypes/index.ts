// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import course from './course'
import lesson from './lesson'
import quiz from './quiz'
import topic from './topic'
import horizon from './horizon'   // ← add this

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [course, lesson, quiz, topic, blockContent, horizon],
}