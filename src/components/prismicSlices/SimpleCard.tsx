/**
 * Prismic Slice - Product Type Page Component
 */

import React from "react"
import { scroller } from 'react-scroll'
import SecondLevelChoice from "./SimpleCard/SecondLevelChoice"

class SimpleCard extends React.Component {

    constructor(props) {
        super(props)

        this.primary = props.data.primary
        this.items = props.data.items
        //this.secondLevelData = {}

        this.state = {
            selectedSlug: '',
            secondLevelData: {}
        }
    }

    componentDidUpdate() {
        if (this.state.selectedSlug.length > 0) {
            scroller.scrollTo('second-level-cont', {
                duration: 1500,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        }
    }

    selectAnswer(card) {
         let newSelectedSlug = ''
         let secondLevelData = {}

         if (card.link_target.slug) {
             newSelectedSlug = card.link_target.slug
             secondLevelData = card.link_target.document.data
             secondLevelData.items = card.link_target.document.data.body[0].items

             this.setState({
                 selectedSlug: newSelectedSlug,
                 secondLevelData
             })
         } else {
             if (card.link_target.url) {
                 window.location = card.link_target.url
             }
         }
    }

    selectAnswerByKey(card, event) {
        if (event.code == 'Space' || event.code == 'Enter') {
            this.selectAnswer(card)
        }
    }
    getAnswerClassName(card) {
        let cssClasses = 'flex-1 flex-row-reverse sm:flex-row flex sm:flex-col text-center items-center justify-center sm:mx-4 mb-4 p-4 rounded-md bg-white h-72 cursor-pointer sm:first:ml-0 sm:last:mr-0 hover:shadow-green-md'
        if (this.state.selectedSlug.length > 0 && card.link_target.slug === this.state.selectedSlug) {
            cssClasses += ' shadow-green-md'
        }
        return cssClasses
    }

    render () {
        return (
            <div className="mt-6 mb-12 sm:min-h-screen">
                <h1 className="text-2xl mt-6 mb-2 font-extrabold text-2xl">{this.primary.title.text}</h1>
                <p className="mb-4">{this.primary.description.text}</p>

                <div className="flex-none sm:flex flex-wrap justify-center mt-6 mb-12">
                    {this.items.map((card, index) => {
                        let answerHandler = this.selectAnswer.bind(this)
                        let answerHandlerByKey = this.selectAnswerByKey.bind(this)
                        let answerClassName = this.getAnswerClassName.bind(this)
                        return (
                            <div key={index} tabIndex={index+1} onKeyPress={(e) => answerHandlerByKey(card, e)} onClick={() => answerHandler(card)} className={answerClassName(card)}>
                                <div className="w-3/5 sm:w-full">
                                    <h3 className="mb-2 text-center sm:w-full font-extrabold text-base">{card.title.text}</h3>
                                    <p>{card.subtitle}</p>
                                </div>
                                <img src={card.image.url} className="h-24 my-12" alt={card.image.alt} />
                            </div>
                        )
                    })}
                </div>

                {/*Tova mai ne e nuvno da minava datata prez state-a*/}
                {this.state.selectedSlug.length > 0 && <SecondLevelChoice data={this.state.secondLevelData} minTagIndex={this.items.length} scrollToName="second-level-cont" />}
            </div>
        )
    }
}

export default SimpleCard
