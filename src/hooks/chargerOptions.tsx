import { useStaticQuery, graphql } from "gatsby"

export const chargerOptions = () => {
  const { allPrismicPage } = useStaticQuery(
    graphql`
        query {
              allPrismicPage(filter: {data: {page_type: {eq: "charger-options"}}}) {
                nodes {
                  id
                  data {
                    include_footer
                    meta_description
                    meta_title
                    page_type
                    body {
                      ... on PrismicPageDataBodyChargerOptions {
                        __typename
                        id
                        primary {
                          cable_type {
                            url
                            alt
                          }
                          charge_time_icon {
                            url
                            alt
                          }
                          plug_type {
                            url
                            alt
                          }
                          power_type {
                            url
                            alt
                          }
                          product_selection_title {
                            text
                          }
                          range_1_icon {
                            url
                            alt
                          }
                          range_2_icon {
                            url
                            alt
                          }
                          range_3_icon {
                            url
                            alt
                          }
                          variant_selection_title {
                            text
                          }
                          what_coose {
                            text
                          }
                          what_choose_link {
                            id
                            url
                          }

                        }
                        items {
    					   variant_label {
    						text
    					  }
                          variant_details {
                            text
                          }
                          variant_link {
                            id
                            url
                          }
                        }
                      }
                      ... on PrismicPageDataBodyStaticRecommendation {
                        __typename
                        id
                        primary {
                          title {
                            text
                          }
                        }
                        items {
                          text {
                            text
                          }
                          image {
                            url
                            alt
                          }
                        }
                      }
                      ... on PrismicPageDataBodyMutedParagraph {
                        __typename
                        items {
                          paragraph {
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
  return allPrismicPage.nodes[0]?.data
}
