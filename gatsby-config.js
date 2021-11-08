module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "noahhradek.me",
    socialLinks: [
        {
            site: 'github',
            url: 'http://github.com/nhrade/',
            color: '#000000'
        },
        {
            site: "linkedin",
            url: "https://www.linkedin.com/in/noah-hradek-a05570a2/",
            color: '#0e76a8'
        },
        {
            site: "envelope",
            url: "mailto: contact@noahhradek.me",
            color: '#000000'
        }
    ],
    navigation: {
        brandText: 'Noah Hradek',
        links: [
            {
                text: "Home",
                url: "/"
            },
            {
                text: "About",
                url: "/about"
            },
            {
                text: "Projects",
                url: "/projects"
            },
            {
                text: "Contact",
                url: "/contact"
            }
        ]
    }
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
        resolve: "gatsby-source-graphql",
        options: {
            typeName: 'GitHub',
            fieldName: 'github',
            url: "https://api.github.com/graphql",
            headers: {
                // Learn about environment variables: https://gatsby.dev/env-vars
                Authorization: `Bearer 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`,
            },
              // Additional options to pass to node-fetch
            fetchOptions: {},
        }
    },
    {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            trackingId: "G-2J0FK0CQKY",
            head: false,
            anonymize: true,
            enableWebVitalsTracking: true
        },
    }
  ],
};
