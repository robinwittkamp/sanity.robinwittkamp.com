import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'about',
      title: 'About',
    },
    {
      name: 'projects',
      title: 'Projects',
    },
    {
      name: 'contact',
      title: 'Contact',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'pageMeta',
      group: 'seo',
    }),
    defineField({
      name: "heroSection",
      title: "Hero section",
      type: "heroSection",
      group: 'hero',
    }),
    defineField({
      name: "aboutSection",
      title: "About section",
      type: "aboutSection",
      group: 'about',
    }),
    defineField({
      name: "projectsSection",
      title: "Projects section",
      type: "projectsSection",
      group: 'projects',
    }),
    defineField({
      name: "contactSection",
      title: "Contact section",
      type: "contactSection",
      group: 'contact',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  // },
})
