import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "heroSection" }]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
