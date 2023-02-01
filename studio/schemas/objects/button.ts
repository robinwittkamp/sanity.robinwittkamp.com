import {defineField, defineType} from 'sanity'

export default defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: 'text',
      title: 'text',
      type: 'string',
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "link",
    }),
  ],
  preview: {
    select: {
      title: "text",
    }
  }
})