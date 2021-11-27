/**
 * Vehicle Object
 *
 */

import PropTypes from "prop-types";
import * as React from "react";
import VehicleConnector from "./vehicleConnector";

class Vehicle extends React.Component {
    constructor(props) {
        super(props)

        this.props = props
        this.loadData()
    }

    loadData() {
        let savedVehicleData = typeof window !== 'undefined' ? localStorage.getItem('vehicle') : {}
        if (savedVehicleData && savedVehicleData.props) {
            this.props = savedVehicleData.props;
        } else {
            const connector = new VehicleConnector
            this.props = {
                name: 'Model 3',
                brand: 'Tesla',
                condition: 'New',
                capacity: 3.6,
                batteryCapacity: 7.6,
                connector: connector.props
            }
        }

        if (typeof window !== 'undefined') {
            localStorage.setItem('vehicle', JSON.stringify(this.props))
        }
    }
}

Vehicle.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    brand: PropTypes.string.isRequired,
    condition: PropTypes.oneOf(['New', 'Used']),
    capacity: PropTypes.number.isRequired,
    batteryCapacity: PropTypes.number.isRequired,
    connector: PropTypes.object.isRequired
}

export default Vehicle;