import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imprint',
  title: 'Imprint',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
    }
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'pageMeta',
      group: 'seo',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array', 
      of: [{type: 'block'}],
      group: 'content',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  // },
})
