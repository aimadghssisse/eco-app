/**
 * Charger options page
 *
 */

import React, { useState, useEffect } from "react"
import _ from "lodash"

import Layout from "components/layout"
import Seo from "components/seo"
import MutedParagraph from "components/mutedParagraph"

import { chargerOptions } from "hooks"
import { products, categories } from "hooks/BigCommerce"

import {  Element, scroller } from 'react-scroll'
import { Link } from "gatsby"

const ChargerOptions = () => {

    const [data, setdata] =useState([]);
    const listCatgories = categories();
    const listproducts = products();
    const chargerOptionsData = chargerOptions();
    const dataBody = _.find(chargerOptionsData.body, { __typename : "PrismicPageDataBodyChargerOptions"})
    const staticRecommendation = _.find(chargerOptionsData.body, { __typename : "PrismicPageDataBodyStaticRecommendation"})
    const mutedParagraph = _.find(chargerOptionsData.body, { __typename : "PrismicPageDataBodyMutedParagraph"})
    const [variants, setvariants] = useState([]);
    const [selected, setSelected] = useState(false);
    let items = []
    const typeProduct = "type-1";

    listCatgories.map(category => {
        if(category.name =='Chargers') {
            listproducts.map(product => {
                if(product.custom_fields.length > 0) {
                    product.custom_fields.map(item => {
                        if(item.name === "connector" && item.value === typeProduct) {
                            items.push(product)
                        }
                    })
                }
            })
        }
    })

    function selectedVariants (variants, key) {
        setvariants(variants);
        setSelected(key);
        scrollTo()
    }

    function scrollTo() {
        scroller.scrollTo('variants-block', {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    useEffect(() => {
        setdata(items)
    }, []);

    return (
        <Layout footer={chargerOptionsData.include_footer}>
            <Seo title={chargerOptionsData.meta_title} description={chargerOptionsData.meta_description} />
            <div className="mt-6 mb-12 min-h-pp_cont">
                <h1 className="text-2xl mt-6 mb-2 font-extrabold">{dataBody.primary.product_selection_title.text}</h1>
                <div className="flex-none sm:flex flex-wrap justify-center my-5 mt-6">
                    {
                        data.map(product => (
                            <div key={product.id} className={'flex-1 flex-row-reverse flex-row flex flex-col md:mr-4 mb-4 p-5 rounded-md white-panel bg-white rounded-md' + (selected === product.id ? ' border-4 border-isRecommended' : '')}>
                                <img className="property-type-image w-full h-96 object-contain" src={product.images[0].url_zoom} alt={product.images[0].description} />

                                <div className="flex justify-between items-center py-5">
                                    <div>
                                        <h2 className="text-2xl mb-2 font-extrabold mb-3">{product.name}</h2>
                                        {
                                            product.price > 0 ?
                                            (
                                                <div>
                                                    <p className="text-base">From £{product.price}</p>
                                                    <p className="text-base">or from £{parseInt(product.price / 36)} per month*</p>
                                                </div>
                                            ) :
                                            (
                                                <p className="text-base">Free</p>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center">
                                        <button  onClick={() => selectedVariants(product.variants, product.id)}  className="text-center px-4 py-2 text-base font-extrabold text-white leading-normal bg-green-light rounded-lg py-1.5 px-3">Select</button>
                                    </div>
                                </div>
                                <div className="py-5">
                                    {
                                        product.custom_fields.map((item, index) => {
                                            if(item.name != "connector") {
                                                return (
                                                    <div key={index} className="flex">
                                                        <img className="w-7 mr-4 h-7 w-7" src={ dataBody.primary[item.name]?.url } height="28" />
                                                        <p className="mb-4">{item.value}</p>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Element className={variants.length ? "mt-12" : ""} name="variants-block">
                    {
                        variants.length > 0 &&
                        (
                            <div>
                                <h2 className="text-3xl font-semibold">{dataBody.primary.variant_selection_title.text}</h2>
                                <div className="flex md:flex-row-reverse flex-row flex-col justify-center">
                                    {
                                        variants.reverse().map((item, key) => (
                                            <PowerRating key={key} item={item} isRecommended={ key === 1 } dataBody={dataBody} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </Element>

                <h2 className={variants.length ? "mt-10 text-center" : "mt-4 text-center"} >
                    <Link to={dataBody.primary.what_choose_link.url} className="text-green">{dataBody.primary.what_coose.text}</Link>
                </h2>

                <div className="bg-white p-5 rounded-md mt-6">
                    <h2 className="text-3xl font-semibold">{staticRecommendation.primary.title.text}</h2>
                    <div className="flex flex-wrap">
                        {
                            staticRecommendation.items.map((item, key) => (
                                <div key={key} className="w-1/2 lg:w-1/4 mb-12">
                                    <img className="w-40 h-40 m-auto mb-2" src={ item.image.url } alt={ item.image.alt } />
                                    <p className="text-lg text-center font-semibold">{item.text.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <MutedParagraph paragraph={mutedParagraph.items} />
            </div>
        </Layout>
    )
}

const PowerRating = ({ item, isRecommended = false, dataBody}) => {
    return (
        <div className="flex-1 mt-6">
            { isRecommended === true && (<p className="text-center md:mr-4 py-1 bg-isRecommended rounded-t-md text-white font-bold">RECOMMENDED FOR YOU</p>)}
            <div className={!isRecommended ? "h-full md:mr-4 rounded-md white-panel bg-white rounded-md mt-8" : "h-full md:mr-4 rounded-b-md white-panel bg-white rounded-b-md border-4 border-t-0 border-isRecommended"}>
                <img className="m-auto mb-2 pt-6" src={ item.image_url } alt={ item.price } />
                <div className="p-5">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">£{item.price}</h2>
                        <p className="text-base">or from £{parseInt(item.price / 36)} per month*</p>
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/accessory">
                            <button className="text-center px-4 py-2 text-base font-extrabold text-white leading-normal bg-green-light rounded-lg py-2 px-3 hover:bg-green-dark">Select {item.option_values[0].label}</button>
                        </Link>
                        {dataBody.items.map((variant, index) => {
                            return variant.variant_label.text === item.option_values[0].label && (
                                <div key={index} className="flex flex-col items-center mt-2">
                                    <p className="text-xs w-2/4 text-footnote">{variant.variant_details.text}</p>
                                    <Link className="text-xs" to={variant.variant_link.url}>More info</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChargerOptions
