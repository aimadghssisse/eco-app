import { useStaticQuery, graphql } from "gatsby"

export const propertyTypePage = () => {
  const data = useStaticQuery(
    graphql`
        query {
          allPrismicPage(filter: {id: {eq: "1f7144ff-1fb9-5801-87bb-13b963682093"}}) {
            nodes {
              id
              data {
                include_footer
                meta_description
                meta_title
                body {
                  __typename
                  ... on PrismicPageDataBodySimpleCard {
                    id
                    primary {
                      description {
                        text
                      }
                      title {
                        text
                      }
                    }
                    items {
                      title {
                        text
                      }
                      subtitle
                      image {
                        url
                        alt
                      }
                      link_target {
                        document {
                          ... on PrismicQuestion {
                            id
                            data {
                              header {
                                text
                              }
                              description {
                                text
                              }
                              body {
                                ... on PrismicQuestionDataBodyAnswer {
                                  id
                                  items {
                                    image {
                                      alt
                                      url
                                    }
                                    subtitle
                                    title {
                                      text
                                    }
                                    link_target {
                                      slug
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        slug
                        url
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
