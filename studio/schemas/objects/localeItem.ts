import {defineField, defineType} from 'sanity'

export default defineType({
  name: "localItem",
  title: "Local Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "locale",
      title: "Locales",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "German", value: "de" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    }
  }
})