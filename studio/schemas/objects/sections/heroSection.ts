import {defineField, defineType} from 'sanity'

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      // options: {
      //   hotspot: true,
      // },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'logosDescription',
      title: 'Logos Description',
      type: 'string',
    }),
  ]
})