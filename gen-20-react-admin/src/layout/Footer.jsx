import React from 'react'
import { useState } from 'react'


function Footer() {

    return (
        <div className="bg-sky-950 text-white text-start">
            <div className="container p-8 h-auto m-auto">
                <div id="footer_icon" className="flex flex-row content-between justify-between mx-auto relative">
                    <div className="footer-logo"><a href="index.html">
                        <h1 className='text-xl lg:text-4xl font-semibold'>E-TALASE</h1>
                    </a></div>
                    <div className="social-icon">
                        <ul className="flex flex-row">
                            <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                            <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                            <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                            <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                            <li><a href="#"><img src="images/youtub-icon.png" /></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 mx-auto justify-between">
                        <div id="col" className="flex-[0_0_50%] relative max-w-1/2 py-4 pr-12">
                            <h4 className="text-2xl">About</h4>
                            <p className="Truncate">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                        </div>
                        <div id="col" className="flex-[0_0_50%] relative max-w-1/2 py-4 pr-12">
                            <h4 className="text-2xl">Menu</h4>
                            <div className="footer_menu">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="computers.html">Computers</a></li>
                                    <li><a href="Mans_clothes.html">Gadgets</a></li>
                                    <li><a href="womans_clothes.html">Electronics</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="col" className="flex-[0_0_50%] relative max-w-1/2 py-4 pr-12">
                            <h4 className="text-2xl">Useful Link</h4>
                            <div className="footer_menu">
                                <ul>
                                    <li><a href="#">Adipiscing</a></li>
                                    <li><a href="#">Elit, sed do</a></li>
                                    <li><a href="#">Eiusmod</a></li>
                                    <li><a href="#">Tempor</a></li>
                                    <li><a href="#">incididunt</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="col" className="flex-[0_0_50%] relative max-w-1/2 py-4 pr-12">
                            <div className="footer_menu">
                                <h4 className="text-2xl">Contact</h4>
                                <div className="call_text"><img src="images/map-icon.png" /><span className="paddlin_left_0"><a
                                    href="#">London 145 United Kingdom</a></span></div>
                                <div className="call_text"><img src="images/call-icon.png" /><span className="paddlin_left_0"><a
                                    href="#">+7586656566</a></span></div>
                                <div className="call_text"><img src="images/mail-icon.png" /><span className="paddlin_left_0"><a
                                    href="#">volim@gmail.com</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        );
};

export default Footer;