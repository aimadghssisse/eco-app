import React from "react"
import renderer from "react-test-renderer"

import Footnote from "../prismicSlices/Footnote"

describe("Footnote", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <p className="text-xs px-8 mb-4 text-muted">data.primary.paragraph.text</p>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})