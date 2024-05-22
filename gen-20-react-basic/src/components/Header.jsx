import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom';
import icon_user from './images/user-icon.png'
import icon_trolley from './images/trolly-icon.png'
import icon_search from './images/search-icon.png'

function openNav() {
    return (
        <div id="sidenav" className="hidden flex-col align-top w-0 h-full absolute bg-sky-950 text-white z-10">
        <nav>
            <ul>
                <li><a href="javascript:void(0)" class="closebtn" onclick={toggle}>&times;</a></li>
                <li><a href="#">Home Electronics</a></li>
                <li><a href="#">Computers</a></li>
                <li><a href="#">Handphones</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Kitchen</a></li>
                <li><a href="#">Cameras</a></li>
            </ul>
        </nav>
        </div>
    );
};

function closeNav() {
    return (
    <>
    
    </>
    );
};


var check=false;
function test() {
    alert(check);
  };

function toggle() {
  check = !check;
  test();
  
};

const PageHeader = () => {

    return (
        <header>
            <div id="header-section"
                className="grid grid-cols-5 w-full h-1/6 text-sky-950 p-5 shadow-md place-content-between justify-between">
                <div id="header-logo" className="flex flex-row items-center pl-2 justify-between w-50">
                    <a href="index.html" class="text-2xl pl-4 font-semibold">E-TALASE</a>
                </div>
                <div className="col-span-3">
                    <div className="flex flex-row justify-center w-full">
                        <img className="w-max object-fit" src={icon_search} />
                        <input className="w-96" type="text" placeholder="Search.." />
                        <a className="bg-sky-950 text-center text-gray-100 p-2 hover:text-white hover:bg-red-500" href="#">Search</a>
                    </div>
                </div>
                <div class="items-end text-center">
                    <nav id="header-menu">
                        <ul className="flex flex-row justify-end">
                            <li className="px-4"><a href="#"><img src={icon_trolley} /></a></li>
                            <li className="px-4"><a href="#"><img src={icon_user} /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="w-full shadow-md content-center">
                <div class="flex flex-row bg-sky-950 text-white justify-around p-4 w-full">
                    <div className="flex flex-row w-1/4">
                        <div className="flex flex-col cursor-pointer mx-2 content-center" onClick={toggle}>
                            <div id="hamburger"></div>
                            <div id="hamburger"></div>
                            <div id="hamburger"></div>
                        </div>
                        <h2 className="px-4 text-xl">Browse Category</h2>
                    </div>
                    <div class="overflow-x-hidden h-fit w-3/4">
                        <nav class="justify-evenly">
                            <ul class="lg:flex hidden flex-row justify-evenly w-full text-center content-center">
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div>
            {//check ? openNav():closeNav()
            }
            </div>
        </header>
    );
};

export default PageHeader;