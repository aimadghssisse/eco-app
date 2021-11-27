/**
 * landing page
 *
 */

import * as React from "react"

import Layout from "components/layout"
import Seo from "components/seo"
import { landingPage } from "hooks"
import PrismicSliceLoader from "../components/prismicSlices/prismicSliceLoader";
import "hooks/BigCommerce/instance"

const IndexPage = () => {
    const landingPageData = landingPage();

    return (
        <Layout footer={landingPageData.display_footer}>
            <Seo title={landingPageData.meta_title} description={landingPageData.meta_description} />
            {landingPageData.body && <PrismicSliceLoader slices={landingPageData.body} />}
        </Layout>
    )
}

export default IndexPage
