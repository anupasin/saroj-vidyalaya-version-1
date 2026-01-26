import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './schemaTypes'
import { projectId, dataset, apiVersion } from './env'

export default defineConfig({
    name: 'default',
    title: 'Saroj Vidyalaya Studio',

    projectId,
    dataset,
    apiVersion,

    plugins: [structureTool()],

    schema,
})
