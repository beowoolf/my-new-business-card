export default function (
    computedPageTitle : String,
    computedPageDescription : String,
    keywords : Array<String>,
    heroUnitImg : String) {
    const { websiteBaseUrl, companyName } = useAppConfig()
    const currentPath = useRoute().path
    //const heroUnitImg = currentPath + '__og_image__/og.png'
    const articlePagePrefix = '/blog'
    const categoryPagePrefix = articlePagePrefix + '/category/'
    const isBlog = (
        currentPath.indexOf(articlePagePrefix) === 0 &&
        currentPath.length > articlePagePrefix.length + 1 &&
        !currentPath.includes(categoryPagePrefix)
    )
    // defineRobotMeta()
    useHead({
        title: `${computedPageTitle} | ${companyName}`,
        meta: [
            {
                name: 'description',
                content: `${computedPageDescription}`
            },
            {
                name: 'keywords',
                content: `${keywords.join(', ')}`
            },
            // {
            //   name: 'robots',
            //   content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
            // },
            {
              name: 'author',
              content: `${companyName}`,
            },
            {
              name: 'copyright',
              content: `${companyName}`,
            },
            {
              name: 'publisher',
              content: `${companyName}`,
            },
            // Twitter Card
            {
              name: 'twitter:title',
              content: `${computedPageTitle} | ${companyName}`,
            },
            {
              name: 'twitter:description',
              content: `${computedPageDescription}`,
            },
            // {
            //   name: 'twitter:card',
            //   content: 'summary_large_image',
            // },
            {
              name: 'twitter:image',
              content: `${websiteBaseUrl}${heroUnitImg}`,
            },
            {
              name: 'twitter:url',
              content: `${websiteBaseUrl}${currentPath}`,
            },
            // Open Graph
            {
              property: 'og:title',
              content: `${computedPageTitle} | ${companyName}`,
            },
            // {
            //   property: 'og:description',
            //   content: `${computedPageDescription}`,
            // },
            {
              property: 'og:type',
              content: isBlog ? 'article' : 'website',
            },
            {
              property: 'og:image',
              content: `${websiteBaseUrl}${heroUnitImg}`,
            },
            {
              property: 'og:image:secure_url',
              content: `${websiteBaseUrl}${heroUnitImg}`,
            },
            {
              property: 'og:url',
              content: `${websiteBaseUrl}${currentPath}`,
            },
            // itemprops
            {
              itemprop: 'name',
              content: `${computedPageTitle} | ${companyName}`,
            },
            {
              itemprop: 'description',
              content: `${computedPageDescription}`,
            },
            {
              itemprop: 'url',
              content: `${websiteBaseUrl}${currentPath}`,
            },
            {
              itemprop: 'image',
              content: `${websiteBaseUrl}${heroUnitImg}`,
            },
            {
              itemprop: 'thumbnailUrl',
              content: `${websiteBaseUrl}${heroUnitImg}`,
            }
        ],
        link: [
            {
              rel: 'image_src',
              href: `${websiteBaseUrl}${heroUnitImg}`,
            },
          {
            rel: 'canonical',
            href: `${websiteBaseUrl}${currentPath}`,
          },
        ]
    })
}
