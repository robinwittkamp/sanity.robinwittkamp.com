import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageMeta',
  title: 'Page Meta',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ], 
  preview: {
    select: {
      title: 'title',
    },
  },
})