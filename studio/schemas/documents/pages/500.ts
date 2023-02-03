import {defineField, defineType} from 'sanity'

export default defineType({
  name: '500',
  title: '500',
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
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'pageMeta',
      group: 'seo',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'heading',
  //   },
  // },
})
