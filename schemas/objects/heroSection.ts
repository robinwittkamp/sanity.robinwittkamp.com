export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: "button",
      title: "Button",
      type: "button",
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      // options: {
      //   hotspot: true,
      // },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text'
          type: 'string',
        }
      ]
    }
  ]
}