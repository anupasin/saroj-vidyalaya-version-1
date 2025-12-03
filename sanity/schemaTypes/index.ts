import { type SchemaTypeDefinition } from 'sanity'
import { course } from './course'
import { lesson } from './lesson'
import { quiz } from './quiz'
import { topic } from './topic'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [course, lesson, quiz, topic],
}
