import React from "react"
import renderer from "react-test-renderer"

import FeatureCard from "../prismicSlices/FeatureCard"

describe("FeatureCard", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <div class="flex-none sm:flex flex-wrap mb-12">
                    <div key="key" class="flex-auto sm:flex-1 sm:mr-4 mb-6 sm:mb-0 rounded-md white-panel">
                        <div class="p-5">
                            <h1 class="text-2xl mb-3">card.title</h1>
                            <p className="mb-4">card.description</p>
                            <a href="card.link_target.url">card.link_text</a>
                        </div>
                        <img className="h-auto w-full border border-transparent rounded-md" src="card.image.url" alt="card.image.alt" />
                    </div>
                </div>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})