import {defineField, defineType} from 'sanity'

export default defineType({
  name: "contactForm",
  title: "Contact Form",
  type: "object",
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
})