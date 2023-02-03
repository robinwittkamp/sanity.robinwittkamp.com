import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {languageFilter} from '@sanity/language-filter'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import { documentI18n, withDocumentI18nPlugin, getDocumentList } from '@sanity/document-internationalization'

import {schemaTypes} from './studio/schemas'
import {deskStructure} from './studio/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'robinwittkamp.com',
  projectId: 'rx62v1yc',
  dataset: 'production',
  plugins: withDocumentI18nPlugin((pluginConfig) => ([
    deskTool({
      // Load custom desk structure
      // structure: deskStructure,
      // structure: (S, {schema}) => getDocumentList({S, schema, config: pluginConfig}),
      // defaultDocumentNode: (S) =>
      //   S.document().views([
      //     S.view.form(),
      //   ])
    }),
    // languageFilter({
    //   supportedLanguages: [
    //     {id: 'en', title: 'English'},
    //     {id: 'de', title: 'Deutsch'},
    //   ],
    //   defaultLanguages: ['en'],
    //   documentTypes: ['home', 'contact', 'imprint', 'privacy-policy', '404', '500'],
    //   filterField: (enclosingType, field, selectedLanguageIds) =>
    //     !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name),
    // }),
    media(),
    visionTool(),
  ]), {
    includeDeskTool: false,
    // i18n config:
    base: "en",
    languages: [
      {
        title: "English",
        id: "en"
      },
      {
        title: "Deutsch",
        id: "de"
      }
    ],
  }),
  schema: {
    types: schemaTypes,
  },
})
