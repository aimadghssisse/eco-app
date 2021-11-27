/**
 * Prismic Slice - Landing page Badge List
 */

import * as React from "react"

const IconList = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center mt-12 px-6">
            {data.items.map((icon, index) => (
                <div key={index} className="flex-1 flex-auto flex-col items-center justify-center text-center mb-16">
                    <img className="h-10 mb-4 inline-block" src={icon.icon.url} alt={icon.icon.alt}/>
                    <p>{icon.text}</p>
                </div>
            ))}
        </div>
    )
}

export default IconList