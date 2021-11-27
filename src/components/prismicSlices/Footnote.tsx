/**
 * Prismic Slice - Landing page Price Note Component
 */

import * as React from "react"

const Footnote = ({ data }) => {
    return (
        <p className="text-xs mb-4 text-gray-dark">{data.primary.paragraph.text}</p>
    )
}

export default Footnote