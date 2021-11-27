/**
 * Customer Object
 *
 */

import * as React from "react";
import Fetch from "./fetch"

class Customer extends React.Component {
    id: number
    first_name: string
    last_name: string
    email: string
    phone: string

    constructor(props) {
        super(props)

        this.loadData()
    }

    /**
     * Fill new Customer data
     * @param data
     */
    fillNewData(data) {
        this.first_name = data.first_name
        this.last_name = data.last_name
        this.email = data.email
        this.phone = data?.phone
    }

    /**
     * Create Customer in BigCommerce
     */
    createInBC() {
        // Create single customer
        // BigCommerce allow batches, see docs - https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customerspost

        const customerData = Fetch.post('/customers', [
            {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email
            }
        ])

        this.id = customerData.id
    }

    /**
     * Update Customer account in BigCommerce
     */
    updateInBC() {
        Fetch.put('/customers/' + this.id, {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone
        })
    }

    /**
     * Load Customer data from BigCommerce
     * @param Customer
     */
    loadFromBC(Customer) {
        const customerData = Fetch.get('/customers/' + Customer.id)

        this.id = customerData.id
        this.first_name = customerData.first_name
        this.last_name = customerData.last_name
        this.email = customerData.email
    }

    /**
     * Load Customer data from localStorage
     */
    loadData() {
        let savedCustomerData = {} //localStorage.getItem('vehicle')
        if (savedCustomerData && savedCustomerData.props) {
            this.props = savedCustomerData.props;
        } else {
            this.props = {
                "id": 5,
                "first_name": "Jane1",
                "last_name": "Doe",
                "email": "janedoe@example.com"
            }
        }

        //localStorage.setItem('vehicle', JSON.stringify(this))
    }
}

export default Customer