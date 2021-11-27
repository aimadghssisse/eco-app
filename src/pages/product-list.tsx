/**
 * Product list page
 *
 */

import React, { useState, useEffect } from "react"
import Layout from "components/layout"
import Seo from "components/seo"
import Vehicle from "../models/vehicle";
import { vehicleSelectionPage } from "hooks"
import { graphql } from "gatsby";

const ProductSelectionPage = ({ data }) => {
    // Use vehicle mock
    let vehicle = new Vehicle

    const allProducts = data.products.list

    const vehicleSelectionPageData = vehicleSelectionPage()

    // TODO: remove this console.log when apply product filtering
    console.log(vehicle)

    return (
        <Layout footer={vehicleSelectionPageData.include_footer}>
            <Seo title="Homecharge Journey - Product Selection" />

            {allProducts && allProducts.map((product, index) => {
                return (
                    <div key={index}>
                        <h3>{product.name} - {product.calculated_price}</h3>
                        <ul>
                            {product.variants.map((variant, vIndex) => {
                                return (
                                    <li key={vIndex}>&nbsp;&nbsp;&nbsp;{variant.option_values[0]?.option_display_name} {variant.option_values[0]?.label} - {variant.calculated_price}</li>
                                )
                            })}
                        </ul>
                        <br /><hr /><br />
                    </div>
                )
            })}
        </Layout>
    )
}

export const query = graphql`
  query (
    $is_visible: Boolean = true
    $category_id: Int = 24
    $limit: Int = 2
  ) {
      ...BigCommerceAllProductsFragment
      ...BigCommerceAllCategoriesFragment
  }
`

export default ProductSelectionPage
