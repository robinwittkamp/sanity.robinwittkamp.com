import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './studio/schemas'
import {deskStructure} from './studio/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'robinwittkamp.com',
  projectId: 'rx62v1yc',
  dataset: 'production',
  plugins: [
    deskTool({
      // Load custom desk structure
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
