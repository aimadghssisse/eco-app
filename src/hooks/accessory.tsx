import { useStaticQuery, graphql } from "gatsby"

export const accessory = () => {
  const { allPrismicPage } = useStaticQuery(
    graphql`
        query {
			  allPrismicPage(filter: {data: {page_type: {eq: "accessory"}}}) {
			    nodes {
			      id
			      data {
			        include_footer
			        meta_description
			        meta_title
			        page_type
			        body {
			          ... on PrismicPageDataBodyMutedParagraph {
			            __typename
			            items {
			              paragraph {
			                text
			              }
			            }
			          }
			          ... on PrismicPageDataBodyAccessory {
			            id
						__typename
			            primary {
			              title {
			                text
			              }
			              description {
			                text
			              }
			              next_step_button_text {
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
