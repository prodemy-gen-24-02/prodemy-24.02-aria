import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom';
import icon_user from '/images/user-icon.png'
import icon_trolley from '/images/trolly-icon.png'
import icon_search from '/images/search-icon.png'

function test(test) {
    alert(test);
};

const HeaderAdmin = () => {

    const [sidenavOpen, setSidenavOpen] = useState(false);

    const toggleSide = () => {
        setSidenavOpen(!sidenavOpen);
        //test(sidenavOpen);
    }

    return (
        <header className='mb-4'>
            <div id="header-section"
                className="grid grid-cols-5 w-full h-1/6 text-sky-950 p-5 shadow-md place-content-between justify-between">
                <div id="header-logo" className="flex flex-row items-center pl-2 justify-between w-50">
                    <a href="/" className="text-2xl pl-4 font-semibold">E-TALASE</a>
                </div>
                <div className="items-end text-center">
                    <nav id="header-menu">
                        <ul className="flex flex-row justify-end">
                            <li className="px-4"><a href="#"><img src={icon_trolley} /></a></li>
                            <li className="px-4"><a href="#"><img src={icon_user} /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="w-full shadow-md content-center">
                <div className="flex flex-row bg-sky-950 text-white justify-around p-4 w-full">
                    <div className="flex flex-row w-1/4">
                        <div className="flex flex-col cursor-pointer mx-2 content-center" onClick={toggleSide}>
                            <div id="hamburger"></div>
                            <div id="hamburger"></div>
                            <div id="hamburger"></div>
                        </div>
                        <h2 className="px-4 text-xl"></h2>
                    </div>
                    <div className="overflow-x-hidden h-fit w-3/4">
                        <nav className="justify-evenly">
                            <ul className="lg:flex hidden flex-row justify-evenly w-full text-center content-center">
                                <li><a href="/">Dashboard</a></li>
                                <li><a href="/">Setting</a></li>
                                <li><a href="/">Pages</a></li>
                                <li><a href="/">Blog</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div id="sidenav" className={`${sidenavOpen ? "flex w-1/5 lg:w-full" : "hidden  w-0"} align-top static bg-sky-950 text-white z-10 mb-4`}>
                <nav>
                    <ul className="flex lg:flex-row flex-col space-x-4 px-4">
                    <li><a href="#">Computers</a></li>
                        <li><a href="#">Handphones</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Brand</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default HeaderAdmin;