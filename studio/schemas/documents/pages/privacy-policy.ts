import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
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
