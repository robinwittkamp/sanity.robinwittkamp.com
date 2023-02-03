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
      name: "navigationItems",
      title: "Navigation Items",
      type: "array",
      of: [{ type: "navigationItem" }]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})