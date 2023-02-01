// Function for creating an emoji icon
const emoji = (emoji: String) => {
  return () => (
    <span role="img" style={{ fontSize: "1.5rem" }}>
      {emoji}
    </span>
  )
}

export const deskStructure = (S) =>
  S.list()
    .title('Website')
    .items([
      // List item: Pages
      S.listItem()
        .title('Pages')
        .icon(emoji('📄'))
        .child(
          // List: Pages
          S.list()
          .title('Pages')
          .items([
            // S.listItem()
            //   .title('Home')
            //   .child(S.documentId().schemaType('home').documentId('home')),
            // S.listItem()
            //   .title('Contact')
            //   .child(S.documentId().schemaType('contact').documentId('contact')),
            // S.listItem()
            //   .title('Imprint')
            //   .child(S.documentId().schemaType('imprint').documentId('imprint')),
            // S.listItem()
            //   .title('Privacy Policy')
            //   .child(S.documentId().schemaType('privacy-policy').documentId('privacy-policy')),
          ])
        ),
      S.divider(),
      // List item: Navigations
      S.listItem()
        .title('Navigations')
        .icon(emoji('🧭'))
        .child(S.documentTypeList('navigation').title('Navigations')),
      S.divider(),
      // List out the rest of the document types, but filter out the singletons from above
      ...S.documentTypeListItems().filter(
        listItem => !['home', 'navigation'].includes(listItem.getId())
      )
    ])