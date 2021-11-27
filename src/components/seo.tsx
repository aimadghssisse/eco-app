/**
 * SEO component
 *
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { siteConfig } from "hooks"

function Seo({ description, lang, meta, title }) {
    const siteConfigData = siteConfig()

    const metaDescription = description || '';
    const defaultTitle = title || '';

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            bodyAttributes={{
                class: 'bg-gray-light text-blue-dark'
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: siteConfigData?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        >
        <link href={siteConfigData.favicon.url} rel="icon" type="image/x-icon" />
        </Helmet>
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default Seo
