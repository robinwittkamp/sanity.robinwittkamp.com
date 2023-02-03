import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "navigation",
    }),
    // defineField({
    //   name: "navigation",
    //   title: "Navigation",
    //   type: "array",
    //   of: [{ type: "navigationItem" }]
    // }),
  ],
})