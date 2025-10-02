const DEFAULT_TITLE = 'Follooow'
const DEFAULT_DESC = 'Social media highlight'
const DEFAULT_IMAGE = '/images/MCDG v3 - icon only - square.png'
const DEFAULT_URL = 'https://follooow.com'

export const metaGeneratorHTML = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
}: MetaGeneratorParams): string => {
  return `
    <!-- HTML Meta Tags -->
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="image" content="${image}">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="follooow.com">
    <meta property="twitter:url" content="${url}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    `
}

export const metaGeneratorObject = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
}: MetaGeneratorParams): object => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'image',
      name: 'image',
      content: image,
    },
    // opengraph
    {
      hid: 'og:url',
      name: 'og:url',
      content: url,
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: image,
    },
    // twitter meta
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:domain',
      name: 'twitter:domain',
      content: 'follooow.com',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: url,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: image,
    },
  ]
}
