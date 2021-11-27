import { useStaticQuery, graphql } from "gatsby"

export const siteConfig = () => {
  const data = useStaticQuery(
    graphql`
		query {
		  allPrismicSiteConfig {
		    nodes {
		      data {
		        favicon {
                    url
                    alt
		        }
		      }
		    }
		  }
		}
    `
  )
  return data.allPrismicSiteConfig.nodes[0]?.data
}
