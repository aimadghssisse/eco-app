/**
 * Order Object
 *
 */

import * as React from "react";
import Fetch from "./fetch";

class Order extends React.Component {
    MAX_BASE_PRODUCT: number = 1

    id: number
    status_id: number = 0
    customer_id: number

    billing_address: object // TODO: define data object type for validation
    shipping_addresses: object // TODO: define data object type for validation
    products: [] // TODO: define data object type for validation

    constructor(props) {
        super(props)

        //this.props = props
        this.loadData()
    }

    /**
     * Add customer to order
     * @param Customer
     */
    setCustomer(Customer) {
        this.customer_id = Customer?.id
    }

    /**
     * Add product to order
     * @param Product
     */
    addProduct(Product) {
        let product = {
            product_id: Product.id,
            quantity: this.MAX_BASE_PRODUCT,
            product_options: []
        }

        // TODO: add options here - watch out for the warranty modificator

        this.products.push(product)
        this.updateInBC()
    }

    removeProduct(Product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id == Product.id) {
                this.products.slice(i, 1);
                break;
            }
        }
        this.updateInBC()
    }

    /**
     * Return order products
     */
    getProducts() {
        return this.products
    }

    /**
     * Get order from BigCommerce
     */
    loadFromBC() {
        const orderData = Fetch.get('/orders/' + this.id)

        this.id = orderData.id
        this.status_id = orderData.status_id
        this.billing_address = orderData.billing_address
        this.shipping_addresses = orderData.shipping_addresses
        this.products = orderData.products
    }

    /**
     * Create order in BigCommerce
     */
    createInBC() {
        let order = {
            "status_id": this.status_id,
            "customer_id": this.customer_id,
            "billing_address": this.billing_address,
            "shipping_addresses": this.shipping_addresses,
            "products": [
                {
                    "product_id": 184,
                    "quantity": 5,
                    "product_options": [
                        {
                            "id": 200,
                            "value": "180"
                        },
                        {
                            "id": 230,
                            "value": "192"
                        }
                    ]
                }
            ]
        }

        const orderResponse = Fetch.post('/orders', order)
        this.id = orderResponse.id
    }

    /**
     * Update order data in BigCommerce
     */
    updateInBC() {
        if (!this.id) {
            this.createInBC()
            return
        }

        let orderData = { "products": [] }

        this.products.map(product => {
            orderData.products.push(
                {
                    "product_id": product.id,
                    "quantity": this.MAX_BASE_PRODUCT,
                    "product_options": {
                        "id": product.variant.option_id,
                        "value": product.variant.option_value
                    },
                }
            )
        })

        Fetch.put('/orders/' + this.id, orderData)
    }

    loadData() {
        // TODO: load data from localStorage or similar alternative
    }
}

export default Order
