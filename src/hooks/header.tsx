import { useStaticQuery, graphql } from "gatsby"

export const headerConfig = () => {
  const data = useStaticQuery(
    graphql`
		query {
		  allPrismicHeader{
		    nodes {
				data {
                    logo {
                        url
                        alt
    		        }
                    shop_icon {
                        url
                        alt
    		        }
		        }
		    }
		  }
		}
    `
  )
  return data.allPrismicHeader.nodes[0]?.data
}
