import {defineField, defineType} from 'sanity'

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "external",
      title: "Link to external URL",
      type: "boolean"
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: Rule => Rule.uri({ allowRelative: true }),
    }),
  ]
})