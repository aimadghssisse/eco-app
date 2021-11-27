/**
 * propertyType page
 *
 */

import React from "react"
import { propertyTypePage } from "hooks"

import Layout from "components/layout"
import PrismicSliceLoader from "../components/prismicSlices/prismicSliceLoader";
import Seo from "components/seo"

const PropertyType = () => {
    const propertyTypePageData = propertyTypePage();

    return (
        <Layout>
            <Seo title={propertyTypePageData.meta_title} description={propertyTypePageData.meta_description} />
            {propertyTypePageData.body && <PrismicSliceLoader slices={propertyTypePageData.body} />}
        </Layout>
    )
}

export default PropertyType
