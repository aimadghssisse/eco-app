/**
 * Prismic Slice Loader Component
 */
import * as React from "react"
import TextWithCta from "./TextWithCta";
import SimpleImage from "./SimpleImage";
import IconList from "./IconList";
import FeatureCard from "./FeatureCard";
import Footnote from "./Footnote";
import SimpleCard from "./SimpleCard";

const PrismicSliceLoader = ({ slices }) => {
    const SUPPORT_SLICES_TYPES = {
        PrismicPageDataBodyTextWithCta: TextWithCta,
        PrismicPageDataBodySimpleImage: SimpleImage,
        PrismicPageDataBodyIconList: IconList,
        PrismicPageDataBodyFeatureCard: FeatureCard,
        PrismicPageDataBodyFootnote: Footnote,
        PrismicPageDataBodySimpleCard: SimpleCard
    }
    return (
        <div>
            {slices.map((slice, index) => {
                try {
                    const CustomSlice = SUPPORT_SLICES_TYPES[slice.__typename]
                    return <CustomSlice key={index} data={slice}/>
                } catch(error) {
                    console.log(error)
                }
            })}
        </div>
    )
}

export default PrismicSliceLoader