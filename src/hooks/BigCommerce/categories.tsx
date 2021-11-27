import { useStaticQuery, graphql } from "gatsby"


export const categories = () => {
	const { allBigCommerceNodeCategories } = useStaticQuery(
		graphql`
			query {
			  allBigCommerceNodeCategories {
			    nodes {
			      id
			      name
			      bigcommerce_id
			    }
			  }
			}
		`
	)
  return allBigCommerceNodeCategories.nodes
}
