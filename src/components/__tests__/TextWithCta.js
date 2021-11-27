import React from "react"
import renderer from "react-test-renderer"

import TextWithCta from "../prismicSlices/TextWithCta"
import {Link} from "gatsby";

describe("TextWithCta", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <div className="text-center mt-6">
                    <h1 className="text-2xl mt-12 mb-2 font-extrabold">data.primary.title</h1>
                    <p className="mb-4">data.primary.subtitle</p>
                    <div className="mb-4">
                        <Link to="/property-type">
                            <button type="link" className="btn-lg">data.primary.button_1_text</button>
                        </Link>
                    </div>
                    <a href="data.primary.button_2_link.url">data.primary.button_2_text</a>
                </div>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})