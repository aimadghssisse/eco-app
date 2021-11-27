/**
 * Vehicle selection page
 *
 */

import React, {useEffect} from "react"
import Layout from "components/layout"
import Seo from "components/seo"
import Vehicle from "../models/vehicle"
import { vehicleSelectionPage } from "hooks"

const VehicleSelectionPage = () => {
    // Use vehicle mock
    let vehicle = new Vehicle

    // load vehicle selection page data
    const vehicleSelectionPageData = vehicleSelectionPage();

    // redirect to product list page directly on current stage
    if (typeof window !== 'undefined') {
        window.location = '/charger-options'
    }

    return (
        <Layout footer={vehicleSelectionPageData.include_footer}>
            <Seo title="Homecharge Journey" />

            {/*This is just an working check example*/}
            <p>Vehicle: {vehicle.props.title}, connector type: {vehicle.props.connector.uid}</p>
        </Layout>
    )
}

export default VehicleSelectionPage