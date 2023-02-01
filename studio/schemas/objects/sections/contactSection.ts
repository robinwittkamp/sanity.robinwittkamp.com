import {defineField, defineType} from 'sanity'

export default defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  fields: [
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
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ]
})