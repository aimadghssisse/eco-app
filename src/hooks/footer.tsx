import { useStaticQuery, graphql } from "gatsby"

export const footerConfig = () => {
  const data = useStaticQuery(
    graphql`
		query {
		  allPrismicFooter {
		    nodes {
              data {
                copyrights
                footer_menu {
                  link_text
                  link_target {
                    url
                  }
                }
              }
		    }
		  }
		}
    `
  )
  return data.allPrismicFooter.nodes[0]?.data
}
