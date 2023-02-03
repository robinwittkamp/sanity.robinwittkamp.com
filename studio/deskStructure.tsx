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
    .title('Content')
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
            // List item: Home
            S.listItem()
              .title('Home')
              .icon(emoji('🏠'))
              .child(
                // Document: Home
                S.document().title('Home').schemaType('home').documentId('home')
              ),
            // List item: About
            // S.listItem()
            //   .title('About')
            //   .icon(emoji('👨‍💻'))
            //   .child(
            //     // Document: About
            //     S.document().title('About').schemaType('about').documentId('about')
            //   ),
            // List item: Contact 
            S.listItem()
              .title('Contact')
              .icon(emoji('📞'))
              .child(
                // Document: Contact
                S.document().title('Contact').schemaType('contact').documentId('contact')
              ),
            // List item: Imprint
            S.listItem()
              .title('Imprint')
              .icon(emoji('📜'))
              .child(
                // Document: Imprint
                S.document().title('Imprint').schemaType('imprint').documentId('imprint')
              ),
            // List item: Privacy Policy
            S.listItem()
              .title('Privacy Policy')
              .icon(emoji('🔒'))
              .child(
                // Document: Privacy Policy
                S.document().title('Privacy Policy').schemaType('privacyPolicy').documentId('privacyPolicy')
              ),
            // List item: Error 404
            S.listItem()
            .title('404')
            .icon(emoji('❗'))
            .child(
              // Document: 404
              S.document().title('404').schemaType('404').documentId('404')
            ),
            // List item: Error 500
            S.listItem()
            .title('500')
            .icon(emoji('❗'))
            .child(
              // Document: 500
              S.document().title('500').schemaType('500').documentId('500')
            ),
          ])
        ),
      // S.divider(),
      // List item: Navigations
      S.listItem()
        .title('Navigations')
        .icon(emoji('🧭'))
        .child(
          // Document List: Navigations
          S.documentTypeList('navigation').title('Navigations')
        ),
      // S.divider(),
      // List out the rest of the document types, but filter out the singletons from above
      ...S.documentTypeListItems().filter(
        listItem => ![
          'home',
          'contact',
          'imprint',
          'privacyPolicy',
          '404',
          '500',
          'navigation'
        ].includes(listItem.getId())
      )
    ])