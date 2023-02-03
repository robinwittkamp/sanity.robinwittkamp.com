import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {languageFilter} from '@sanity/language-filter'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import { withDocumentI18nPlugin, getDocumentList } from '@sanity/document-internationalization'

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
    languageFilter({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'de', title: 'Deutsch'},
      ],
      defaultLanguages: ['en'],
      // Only show language filter for document type `page` (schemaType.name)
      documentTypes: ['home', 'contact', 'imprint', 'privacy-policy', '404', '500'],
      filterField: (enclosingType, field, selectedLanguageIds) =>
        !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name),
    }),
    media(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
