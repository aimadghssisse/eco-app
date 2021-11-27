/**
 * muted Paragraph component
 *
 */

import React from "react"
import PropTypes from "prop-types"

const MutedParagraph = ({ paragraph }) => {
    return (
		<div className="mt-12 text-footnote">
			{
				paragraph.map((item, key) => (
					<p className="text-xs mb-0" key={key}>{item.paragraph.text}</p>
				))
			}
		</div>
    )
}

export default MutedParagraph
