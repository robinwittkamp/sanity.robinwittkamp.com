export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "link", // referenc to custom link object
    }
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "link"
    }
  }
};