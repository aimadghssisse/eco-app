/**
 * Prismic Slice - Landing page Card Container
 */

import * as React from "react"

const FeatureCard = ({ data }) => {
    return (
        <div className="flex-none sm:flex flex-wrap mb-12">
            {data.items.map((card, key) => (
                <div key={key} className="sm:w-2/4 flex-1 sm:ml-4 mb-6 sm:mt-6 sm:mb-0 rounded-md bg-white sm:first:ml-0 sm:first:mr-4">
                    <div className="p-5">
                        <h1 className="text-2xl mb-3 font-extrabold">{card.title}</h1>
                        <p className="mb-4">{card.description}</p>
                        <a href={card.link_target.url ?? '/'} className="text-green hover:underline">{card.link_text}</a>
                    </div>
                    <img className="h-auto w-full border border-transparent rounded-md" src={card.image.url} alt={card.image.alt} />
                </div>
            ))}
        </div>
    )
}

export default FeatureCard