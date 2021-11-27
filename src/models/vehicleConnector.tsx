/**
 * Connector Object
 */

import PropTypes from "prop-types"
import * as React from "react"

class VehicleConnector extends React.Component {
    constructor(props) {
        super(props)

        this.props = {
            uid: 'type-1'
        }
    }
}

VehicleConnector.propTypes = {
    uid: PropTypes.string.isRequired
}

export default VehicleConnector