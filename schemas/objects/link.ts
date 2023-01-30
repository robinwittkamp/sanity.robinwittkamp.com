export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "external",
      title: "Link to external URL",
      type: "boolean"
    },
    {
      name: "url",
      title: "URL",
      description:
        "For external links use the full url e.g. ‘https://google.com/’. For internal links use the page path e.g. ‘companies’",
      type: "string"
    }
  ]
};