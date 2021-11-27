import React from "react"
import renderer from "react-test-renderer"

import IconList from "../prismicSlices/IconList"

describe("IconList", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <div className="flex flex-wrap justify-center my-12">
                    <div key="key" className="flex-1 flex flex-col items-center justify-center mx-1 mb-9 min-w-max">
                        <img className="icon-height42 mb-4" src="icon.icon.url" alt="icon.icon.alt" />
                        <p>icon.text</p>
                    </div>
                </div>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})