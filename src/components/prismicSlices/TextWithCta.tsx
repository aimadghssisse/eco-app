/**
 * Prismic Slice - Landing page Hero Component
 */

import * as React from "react"
import {Link} from "gatsby";

const TextWithCta = ({ data }) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl mt-12 mb-2 font-extrabold">{data.primary.title}</h1>
            <p className="mb-4">{data.primary.subtitle}</p>
            <div className="mb-4">
                <Link to="/property-type">
                    <button className="text-center px-4 py-2 text-xl font-extrabold text-white leading-normal bg-green-light rounded-lg hover:bg-green-dark">{data.primary.button_1_text}</button>
                </Link>
            </div>
            <a href={data.primary.button_2_link.url} className="text-green hover:underline">{data.primary.button_2_text}</a>
        </div>
    )
}

export default TextWithCta