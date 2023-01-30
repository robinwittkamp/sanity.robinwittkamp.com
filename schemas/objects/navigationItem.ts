import {defineField, defineType} from 'sanity'

export default defineType({
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: Rule => Rule.uri({ allowRelative: true }),
    }),
  ],
  preview: {
    select: {
      title: "title",
    }
  }
})