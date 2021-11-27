/**
 * Footer component
 *
 */
import React from "react"
import { footerConfig } from "hooks"

function Footer () {

    const footerConfigData = footerConfig();

    return (
        <footer className="bg-gray text-white py-5">
            <div className="container px-4 mx-auto">
                <div className="md:flex md:flex-wrap text-center">
                    <ul className="md:flex-1 md:flex md:flex-wrap">
                        { footerConfigData.footer_menu.map((item, key) => (
                            <li className="mt-4 md:mt-0" key={key}>
                                <a href={item.link_target.url} className="text-white font-extrabold uppercase text-xs mr-6 whitespace-nowrap hover:text-green hover:underline">{item.link_text}</a>
                            </li>
                        )) }
                    </ul>
                    <div className="md:flex-3">
                        <p className="font-extrabold text-xs mt-24 md:mt-1">{footerConfigData.copyrights}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
