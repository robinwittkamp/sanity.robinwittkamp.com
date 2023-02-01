import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "array",
      of: [{type: "block"}]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
