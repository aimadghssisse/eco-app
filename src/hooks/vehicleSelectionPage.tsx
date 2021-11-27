import { useStaticQuery, graphql } from "gatsby"


export const vehicleSelectionPage = () => {
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
              }
            }
          }
        }
    `
  )
  return data.allPrismicPage.nodes[0]?.data
}
