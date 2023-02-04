import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  i18n: true,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
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
      group: 'content',
    }),
    defineField({
      name: "aboutSection",
      title: "About section",
      type: "aboutSection",
      group: 'content',
    }),
    defineField({
      name: "projectsSection",
      title: "Projects section",
      type: "projectsSection",
      group: 'content',
    }),
    defineField({
      name: "contactSection",
      title: "Contact section",
      type: "contactSection",
      group: 'content',
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
