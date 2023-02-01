import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imprint',
  title: 'Imprint',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array', 
      of: [{type: 'block'}]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
