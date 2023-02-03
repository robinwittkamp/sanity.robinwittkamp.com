import { DocumentIcon, DocumentsIcon, HomeIcon, MenuIcon } from '@sanity/icons'

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // List item: Pages
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(
          // List: Pages
          S.list()
          .title('Pages')
          .items([
            // List item: Home
            S.listItem()
              .title('Home')
              .icon(HomeIcon)
              .child(
                // Document: Home
                S.document().title('Home').schemaType('home').documentId('home')
              ),
            // List item: About
            // S.listItem()
            //   .title('About')
            //   .icon(DocumentIcon)
            //   .child(
            //     // Document: About
            //     S.document().title('About').schemaType('about').documentId('about')
            //   ),
            // List item: Contact 
            S.listItem()
              .title('Contact')
              .icon(DocumentIcon)
              .child(
                // Document: Contact
                S.document().title('Contact').schemaType('contact').documentId('contact')
              ),
            // List item: Imprint
            S.listItem()
              .title('Imprint')
              .icon(DocumentIcon)
              .child(
                // Document: Imprint
                S.document().title('Imprint').schemaType('imprint').documentId('imprint')
              ),
            // List item: Privacy Policy
            S.listItem()
              .title('Privacy Policy')
              .icon(DocumentIcon)
              .child(
                // Document: Privacy Policy
                S.document().title('Privacy Policy').schemaType('privacyPolicy').documentId('privacyPolicy')
              ),
            // List item: Error 404
            S.listItem()
            .title('404')
            .icon(DocumentIcon)
            .child(
              // Document: 404
              S.document().title('404').schemaType('404').documentId('404')
            ),
            // List item: Error 500
            S.listItem()
            .title('500')
            .icon(DocumentIcon)
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
        .icon(MenuIcon)
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