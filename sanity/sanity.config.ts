import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'Saroj Vidyalaya Studio',

    projectId: 'fqzo20e9',
    dataset: 'production',
    apiVersion: '2024-01-01',

    plugins: [structureTool()],
    schema,
})
