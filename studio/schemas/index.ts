// Array types
import blockContent from './arrays/blockContent'

// Document types
import error404 from './documents/pages/404'
import error500 from './documents/pages/500'
// import author from './documents/author'
import contact from './documents/pages/contact'
import home from './documents/pages/home'
import imprint from './documents/pages/imprint'
import navigation from './documents/navigation'
// import post from './documents/post'
import privacyPolicy from './documents/pages/privacy-policy'

// Object types
import aboutSection from './objects/sections/aboutSection'
import button from './objects/button'
import contactForm from './objects/contactForm'
import contactSection from './objects/sections/contactSection'
import heroSection from './objects/sections/heroSection'
import link from './objects/link'
import navigationItem from './objects/navigationItem'
import pageMeta from './objects/pageMeta'
import project from './objects/project'
import projectsSection from './objects/sections/projectsSection'

export const schemaTypes = [
  // Array types
  blockContent,

  // Document types
  // author,
  contact,
  error404,
  error500,
  home,
  imprint,
  navigation,
  // post,
  privacyPolicy,

  // Object types
  aboutSection,
  button,
  contactForm,
  contactSection,
  heroSection,
  link,
  navigationItem,
  pageMeta,
  project,
  projectsSection,
]
