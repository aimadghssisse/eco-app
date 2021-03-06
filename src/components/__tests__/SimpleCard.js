import React from "react"
import renderer from "react-test-renderer"

import SimpleCard from "../prismicSlices/SimpleCard"

describe("SimpleCard", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <div className="mt-6 mb-12">
                    <h1 className="text-2xl mt-6 mb-2 font-extrabold">this.primary.title.text</h1>
                    <p className="mb-4">this.primary.description.text</p>

                    <div className="flex-none sm:flex flex-wrap justify-center my-5">
                        <div key="key" onClick={() => answerHandler(card)} className="cssClasses">
                            <div className="w-3/5 sm:w-full">
                                <h3 className="mb-2 text-center sm:w-full font-extrabold text-base">card.title.text</h3>
                                <p>card.subtitle</p>
                            </div>
                            <img className="my-12 property-type-image" src="card.image.url" alt="card.image.alt" />
                        </div>
                    </div>
                </div>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})