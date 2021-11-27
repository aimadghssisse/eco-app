/**
 * CartItem Object
 *
 */

import * as React from "react"

class CartItem extends React.Component {
    data: object // TODO: set object type definition

    constructor(props) {
        super(props)
    }

    /**
     * Add new data for cart item
     * @param data
     */
    fillNewData(data) {
        this.data = data
    }

    /**
     * Return cart item data
     */
    getData() {
        return this.data
    }
}

export default CartItem