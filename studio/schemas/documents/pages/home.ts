import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero',
      default: true,
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
    {
      name: 'seo',
      title: 'SEO',
    }
  ],
  fields: [
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
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'pageMeta',
      group: 'seo',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  // },
})
