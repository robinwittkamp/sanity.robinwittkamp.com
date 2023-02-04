import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "localItems",
      title: "Local Items",
      type: "array",
      of: [{ type: "localItem" }]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})