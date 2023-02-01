import {defineField, defineType} from 'sanity'

export default defineType({
  name: "projectsSection",
  title: "Projects Section",
  type: "object",
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array', 
      of: [{type: 'project'}]
    }),
  ]
})