import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array', 
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'pageMeta',
      group: 'seo',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  // },
})
