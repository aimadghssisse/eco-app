/**
 * Fetch Object
 *
 */

import * as React from "react";
// import {useEffect, useState} from "react";

class Fetch extends React.Component {
    HASH: string = 'uy6zkv5dq4'

    /*constructor(props) {
        super(props)
    }*/

    async get(url:string) {
        return await this.fetch(url, 'GET')
    }

    async post(url:string, data: object = {}) {
        return await this.fetch(url, 'POST', data)
    }

    async put(url:string, data: object = {}) {
        return await this.fetch(url, 'PUT', data)
    }

    async delete(url:string, ) {
        return await this.fetch(url, 'DELETE')
    }

    getUrl(url: string) {
        return `https://api.bigcommerce.com/stores/${this.HASH}/v3${url}`
    }

    async fetch(url:string, method: string = 'GET', data: object = {}) {
        //const [submitStatus, setSubmitStatus] = useState( 'standby');
        let options = {
            method: method,
            mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-type, Accept, Authorization, X-Request-With",
                "Access-Control-Allow-Credentials": "true",



                'X-Client-Type': 'Gatsby',
                'X-Client-Name': 'gatsby-source-bigcommerce',


                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Auth-Client": "cidpqcpkvlfmsbl97hgeq04fe7hmki3",
                "X-Auth-Token": "d9lh7ux2np1tl3edz9oygdkyvkrkxbc"
            },
            //withCredentials: true,
            //redirect: "follow", // manual, *folslow, error
            //referrer: "no-referrer", // no-referrer, *client

            //body: JSON.stringify(data), // body data type must match "Content-Type" header
            body: undefined
        }

        if (data && (method == 'POST' || method == 'PUT')) {
            options.body = JSON.stringify(data)
        }

        const response = await fetch(this.getUrl(url), options);

        const json = await response.json()
            .then(response => {
                    //setSubmitStatus(response.status == 200 ? 'success' : 'error')
                    console.log(response)
                    console.log(response.status)
                }
            );
        console.log(data);
        console.log(json);
        //}
        /*useEffect(() => {
            if(submitClick) {
                setSubmitStatus('working');
                fetchUrl();
            };
        }, [submitClick]);*/
        //return [submitStatus, setSubmitStatus];
    }

}

export default Fetch