import React from "react"
import { graphql } from "gatsby"

export const BCProductsFragment = graphql`
  fragment BigCommerceAllCategoriesFragment on Query {
    categories: allBigCommerceNodeCategories (
      filter: {is_visible: {eq: $is_visible}}
    ) {
      list: nodes {
        id
        is_visible
        name
        bigcommerce_id
      }
    }
  }
`
