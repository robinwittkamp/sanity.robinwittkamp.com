import {defineField, defineType} from 'sanity'

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    // defineField({
    //   name: 'profilImage',
    //   title: 'Profil Image',
    //   type: 'image',
    //   fields: [
    //     {
    //       name: 'alt',
    //       title: 'Alternative Text',
    //       type: 'string',
    //     }
    //   ]
    // }),
  ]
})