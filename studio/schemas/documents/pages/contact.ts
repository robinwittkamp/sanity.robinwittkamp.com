import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
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
      name: "paragraph",
      title: "Paragraph",
      type: "array",
      of: [{type: "block"}],
      group: 'content',
    }),
    defineField({
      name: "contactForm",
      title: "Contact Form",
      type: "contactForm",
      group: 'content',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'heading',
  //   },
  // },
})
