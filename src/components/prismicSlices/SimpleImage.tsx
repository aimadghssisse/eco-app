/**
 * Prismic Slice - Landing page Hero Component
 */

import * as React from "react"

const SimpleImage = ({ data }) => {
    return (
        <div className="text-center mt-6 flex justify-center">
            <img src={data.primary.image.url} alt={data.primary.image.alt} />
        </div>
    )
}

export default SimpleImage
