/**
 * Header component
 *
 */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby"
import { headerConfig } from "hooks"

import supermarket from "assets/images/supermarket.svg";

function Header() {

    const headerConfigData = headerConfig();

    const node = useRef();
    const [open, setOpen] = useState(false);

    const handleClick = e => {
        // check if target is contain element
        if (node.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return  (
        <nav className="py-2 px-4">
            <div className="container px-4">
                <div className="relative flex items-center justify-between h-10">
                    <div className="flex-1 flex sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img className="w-auto h-8" src={headerConfigData.logo.url} alt={headerConfigData.logo.alt} />
                            </Link>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative">
                            <div className="flex">
                                <a className="font-extrabold text-base mr-4 hover:text-black-hover" href="#">Sign In</a>
                                <button ref={node} onClick={e => setOpen(!open)} type="button" className="flex text-sm rounded-full" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <img className="h-5 w-5 icon-shop" src={headerConfigData.shop_icon.url} alt={headerConfigData.shop_icon.alt} />
                                </button>
                            </div>
                            {
                                open && (
                                    <div className="cart-shop origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none p-4 flex flex-col items-center" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                                        <img className="w-20 h-20" src={supermarket} alt="pod-point" height="20" />
                                        <p className="gray-50 text-opacity-5 w-32 text-center mb-4 font-extrabold">Your cart is empty</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
          </div>
        </nav>
    )
}

export default Header
