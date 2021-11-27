import React from "react"
import { graphql } from "gatsby"

export const BCProductsFragment = graphql`
  fragment BigCommerceAllProductsFragment on Query {
    products: allBigCommerceNodeProducts (
      filter: {is_visible: {eq: $is_visible}, categories: {eq: $category_id}},
      limit: $limit
    ) {
      list: nodes {
        bigcommerce_id
        id
        name
        is_visible
        calculated_price
        variants {
          id
          sku
          calculated_price
          option_values {
            id
            label
            option_display_name
          }
        }
        categories
        custom_fields {
          id
          name
          value
        }
      }
    }
  }
`
