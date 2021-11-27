/**
 * Layout component
 *
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, footer }) => {
    return (
        <>
            <Header/>
                <div className="container px-4">{children}</div>
            {footer && (
                <Footer/>
            )}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    footer: PropTypes.bool
}

Layout.defaultProps = {
  footer: true
}

export default Layout
