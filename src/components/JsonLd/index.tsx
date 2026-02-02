// Person schema for Google Knowledge Panel
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shah Nawaz',
  alternateName: ['msnawaz', 'heynawaz'],
  url: 'https://www.msnawaz.com',
  image: 'https://www.msnawaz.com/assets/shah-nawaz-about.png',
  jobTitle: 'Lead Full-Stack Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Cloud Analogy',
  },
  description: 'Lead Full-Stack Engineer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications, AI-powered solutions, and SaaS platforms.',
  knowsAbout: [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Nest.js',
    'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker',
    'Full-Stack Development', 'Web Development', 'Software Engineering',
  ],
  sameAs: [
    'https://linkedin.com/in/shahnawazz',
    'https://github.com/heynawaz',
    'https://twitter.com/heynawaz',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Integral University',
  },
  email: 'mailto:shahnawaz.com@hotmail.com',
  knowsLanguage: ['en', 'Hindi'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MCA' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'BCA' },
  ],
};

// WebSite schema for sitelinks and search
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shah Nawaz',
  alternateName: ['msnawaz', 'Shah Nawaz Portfolio', 'Shah Nawaz Developer'],
  url: 'https://www.msnawaz.com',
  description: 'Portfolio of Shah Nawaz - Lead Full-Stack Engineer specializing in React, Next.js, Node.js, TypeScript. Available for hire.',
  author: {
    '@type': 'Person',
    name: 'Shah Nawaz',
    url: 'https://www.msnawaz.com',
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://www.msnawaz.com/?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

// BreadcrumbList for rich snippets
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.msnawaz.com' },
  ],
};

// ProfilePage schema
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Shah Nawaz',
    jobTitle: 'Lead Full-Stack Engineer',
    description: 'Lead Full-Stack Engineer with expertise in building scalable web applications',
    url: 'https://www.msnawaz.com',
  },
  dateCreated: '2020-12-01',
  dateModified: new Date().toISOString().split('T')[0],
};

// Service schema for freelance/hiring
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Software Development',
  provider: {
    '@type': 'Person',
    name: 'Shah Nawaz',
    url: 'https://www.msnawaz.com',
  },
  name: 'Full-Stack Web Development Services',
  description: 'Professional full-stack web development services including React, Next.js, Node.js applications, SaaS platforms, and AI-powered solutions.',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SaaS Platform Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Powered Application Development',
        },
      },
    ],
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
