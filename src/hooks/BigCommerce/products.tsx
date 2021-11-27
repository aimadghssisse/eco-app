import { useStaticQuery, graphql } from "gatsby"


export const products = () => {
	const { allBigCommerceNodeProducts } = useStaticQuery(
		graphql`
			query {
			  allBigCommerceNodeProducts {
			    nodes {
			      id
			      name
			      price
			      type
			      description
			      categories
			      images {
				    image_file
			        url_thumbnail
					url_zoom
					url_standard
					url_tiny
			        description
			      }
			      variants {
			        id
			        sku
			        option_values {
			          label
			        }
			        price
					image_url
			      }
				  custom_fields {
					name
					value
				  }
			    }
			  }
			}
		`
	)
  return allBigCommerceNodeProducts.nodes
}
