import React from "react"
import renderer from "react-test-renderer"

import SimpleImage from "../prismicSlices/SimpleImage"

describe("SimpleImage", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <div className="text-center">
                    <img className="mt-6" src="data.primary.image.url" alt="data.primary.image.alt" />
                </div>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})