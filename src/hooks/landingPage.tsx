import { useStaticQuery, graphql } from "gatsby"

export const landingPage = () => {
  const data = useStaticQuery(
    graphql`
        query {
          allPrismicPage(filter: {id: {eq: "44af860c-b135-5fd4-8443-406dcea0202f"}}) {
            nodes {
              id
              data {
                meta_title
                meta_description
                body {
                  __typename
                  ... on PrismicPageDataBodyTextWithCta {
                    id
                    primary {
                      button_1_text
                      button_1_link {
                        url
                      }
                      button_2_text
                      button_2_link {
                        url
                      }
                      title
                      subtitle
                    }
                  }
                  ... on PrismicPageDataBodySimpleImage {
                    id
                    primary {
                      image {
                        alt
                        url
                      }
                    }
                  }
                  ... on PrismicPageDataBodyFeatureCard {
                    items {
                      description
                      image {
                        alt
                        url
                      }
                      link_text
                      title
                      link_target {
                        url
                      }
                    }
                  }
                  ... on PrismicPageDataBodyIconList {
                    items {
                      icon {
                        url
                        alt
                      }
                      text
                    }
                  }
                  ... on PrismicPageDataBodyFootnote {
                    id
                    primary {
                      paragraph {
                        richText
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `
  )
  return data.allPrismicPage.nodes[0]?.data
}
