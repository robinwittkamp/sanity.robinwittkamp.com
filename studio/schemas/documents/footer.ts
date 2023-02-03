import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "mainNavigation",
      title: "Main Navigation",
      type: "navigation",
    }),
    defineField({
      name: "legalNavigation",
      title: "Legal Navigation",
      type: "navigation",
    }),
    defineField({
      name: "usedTechnologies",
      title: "Note about used Technologies",
      type: "string",
    }),
    defineField({
      name: "RepoHint",
      title: "Note about repository",
      type: "string",
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  // },
})