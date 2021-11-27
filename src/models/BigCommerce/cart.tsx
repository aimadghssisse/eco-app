/**
 * Cart Object
 *
 */

import * as React from "react";
import Fetch from "./fetch";

class Cart extends React.Component {
    MAX_BASE_PRODUCT: number = 1

    useBigCommerceCart: boolean = false

    cart_id: string // UUID
    customer_id: number
    line_items: []
    data: object // TODO: define data object type for validation

    constructor(props) {
        super(props)

        /*console.log('@@@@@@@@@@@@@')
debugger
        const fetch = new Fetch;
        const prr = fetch.get('/catalog/products')
        console.log(prr)*/

        //this.props = props
        this.loadData()
    }

    /**
     * Add customer to cart
     * @param Customer
     */
    setCustomer(Customer) {
        this.customer_id = Customer.id
    }

    /**
     * Add item to cart
     * @param CartItem
     */
    addLineItem(CartItem) {
        this.line_items.push(CartItem)
    }

    /**
     * Return cart items
     */
    getItems() {
        return this.line_items
    }

    /**
     * Clear cart data
     */
    clear() {
        this.data = {}
    }

    /**
     * Create Cart in BigCommerce
     */
    createInBC() {
        const cartData = {
            "customer_id": this.customer_id,
            "line_items": this.line_items
        }

        const cartDetails = Fetch.post('/carts', cartData)
        this.cart_id = cartDetails.id
    }

    /**
     * Add line item to Cart in BigCommerce
     * @param Product
     */
    addLineItemInBC(Product) {
        const newLineItemData = {
            "quantity": this.MAX_BASE_PRODUCT,
            "product_id": Product.id,
            "variant_id": Product.variant.id
        }

        Fetch.post('/carts/' + this.cart_id + '/items', newLineItemData)
    }

    loadData() {
        let savedCustomerData = {} //localStorage.getItem('vehicle')
        if (savedCustomerData && savedCustomerData.props) {
            this.data = savedCustomerData.props;
        } else {
            this.data = {
                "first_name": "Jane1",
                "last_name": "Doe",
                "email": "janedoe@example.com"
            }
        }
    }
}

export default Cart
