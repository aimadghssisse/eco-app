import React from "react"
import { Element } from 'react-scroll'

const SecondLevelChoice = (levelData) => {
    const header = levelData.data.header ?? ''
    const items = levelData.data.items ?? []
    const tabIndex = levelData.minTagIndex + 1

    const selectAnswer = (item) => {
        if (item.link_target.slug) {
            window.location = '/'+item.link_target.slug
        }
    }

    return (
        <React.Fragment>
            {header && <h2 className="text-lg mt-6 mb-2 font-extrabold">{header.text}</h2>}

            {items.length > 0 &&
                <Element name={levelData.scrollToName}>
                    <div className="flex-none sm:flex flex-wrap justify-center my-5">
                        {items.map((item, index) => {
                            return (
                                <div key={index} className="flex-1 flex-row-reverse sm:flex-row flex sm:flex-col text-center items-center justify-center sm:mx-4 mb-4 p-5 rounded-md bg-white cursor-pointer sm:first:ml-0 sm:last:mr-0 hover:shadow-green-md" onClick={() => selectAnswer(item)}>
                                    <div className="w-3/5 sm:w-full">
                                        <h3 className="my-6 text-center sm:w-full font-extrabold text-base">{item.title.text}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                    <img src={item.image.url} className="h-24" alt={item.image.alt}/>
                                </div>
                            )
                        })}
                    </div>
                </Element>}
        </React.Fragment>
    )
}

export default SecondLevelChoice
