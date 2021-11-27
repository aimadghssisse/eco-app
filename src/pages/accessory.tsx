/**
 * Charger options page
 *
 */

import React, { useState, useEffect } from "react"
import _ from "lodash"
import { Link } from "gatsby"

import Layout from "components/layout"
import Seo from "components/seo"
import MutedParagraph from "components/mutedParagraph"

import { accessory } from "hooks"
import { products, categories } from "hooks/BigCommerce"

const ChargerOptions = () => {

    const accessoryData = accessory();
    const accessoryBody = _.find(accessoryData.body, { __typename : "PrismicPageDataBodyAccessory"})
    const mutedParagraph = _.find(accessoryData.body, { __typename : "PrismicPageDataBodyMutedParagraph"})

    const [show, setShow] =useState([]);


    return (
        <Layout footer={accessoryData.include_footer}>
            <Seo title={accessoryData.meta_title} description={accessoryData.meta_description} />
            <div className="mt-6 mb-12 min-h-pp_cont">
                <h1 className="text-2xl mt-6 mb-2 font-extrabold">{accessoryBody.primary.title.text}</h1>
                <p className="text-lg font-medium mt-5">{accessoryBody.primary.description.text}}</p>

                <div className="flex flex-wrap justify-center my-5 mt-6">
                {
                    ['a', 'b', 'c'].map((product, key) => (
                        <div key={key} className="w-1/2 lg:w-1/3 pr-4 mb-5">
                            <img className="w-full h-80 w-20 object-contain" src="" />
                            <h2 className="text-2xl sm:text-lg font-bold mt-5">4.8m Portable cable</h2>
                            <p className="text-base	font-medium mt-2">A portable charging cable designed for use with the Solo Smart Charger or on the Pod Point Network.</p>
                            <Link className="text-base mt-3" to="/">More info</Link>
                            <h2 className="text-lg font-bold mt-6">£190.00</h2>
                            <p className="text-sm mt-1.5 font-medium">or £4.97 per month</p>
                            {
                                show ?
                                (
                                    <button onClick={() => setShow(!show) }  className="text-green border border-green rounded-lg font-bold text-base py-2.5 px-5 mt-2.5 hover:bg-green hover:text-white">Add to order</button>
                                ) :
                                (
                                    <button onClick={() => setShow(!show) }  className="green-btn rounded-lg font-bold text-base py-2.5 px-5 mt-2.5">Added</button>
                                )
                            }
                        </div>
                    ))
                }
                </div>
                <MutedParagraph paragraph={mutedParagraph.items} />
                <div className="flex justify-center m-9">
                    <Link to="/email-capture">
                        <button  className="green-btn">{accessoryBody.primary.next_step_button_text.text}</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default ChargerOptions
