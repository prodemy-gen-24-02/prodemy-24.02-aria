import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom';
import icon_user from '/images/user-icon.png'
import icon_trolley from '/images/trolly-icon.png'


const HeaderAdmin = ({userToggle}) => {

    const [sidenavOpen, setSidenavOpen] = useState(false);

    const toggleSide = () => {
        setSidenavOpen(!sidenavOpen);
        //test(sidenavOpen);
    }

    return (
        <div className="mb-4 content-start w-screen" >
            <div id="header-section"
                className="grid grid-cols-2 w-full h-1/6 text-sky-950 p-5 shadow-md justify-between">
                <div id="header-logo" className="flex flex-row items-center pl-2 justify-between w-1/2">
                    <a href="/" className="text-2xl pl-4 font-semibold">ADMIN PAGE</a>
                </div>
                <div className="items-end text-center w-3/4">
                    <nav id="header-menu">
                        <ul className="flex flex-row justify-end">
                            <li className="px-4"><a href="#"><img src={icon_trolley} /></a></li>
                            <li className="px-4"><a onClick={userToggle}><img src={icon_user} /></a></li>
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

            <div id="sidenav" className={`${sidenavOpen ? "flex w-1/5 h-full" : "hidden  w-0"} align-top absolute bg-sky-950 text-white z-10 mb-4`}>
                <nav>
                    <ul className="flex flex-col space-x-4 px-4">
                        <li><a href="/admin">Products</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Brand</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default HeaderAdmin;