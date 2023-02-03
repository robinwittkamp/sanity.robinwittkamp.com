import {defineField, defineType} from 'sanity'

export default defineType({
  name: '500',
  title: '500',
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
      name: "heading",
      title: "Heading",
      type: "string",
      group: 'content',
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
      group: 'content',
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
      group: 'content',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'heading',
  //   },
  // },
})
