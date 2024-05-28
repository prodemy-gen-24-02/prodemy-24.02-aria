
import React from 'react'
import { useState } from 'react'
import toRupiah from './ToRupiah'
import StarRatings from "react-star-ratings";


const ProductDetail = ({product}) => {

    //const [clickState, setClickState] = useState("img1");
    const [imgState, setImgState] = useState(product.image);
    const [quantity, setQuantity] = useState(0);

    return (
        <>
        <div class="flex flex-row items-center pl-4">
            <a href="/">Product</a>{'>'}
            <a href="#">Mobile</a>{'>'}
            <a href="#">Smartphone</a>{'>'}
            <a href="#">Samsung</a>{'>'}
            <span tabindex="0">{product.title}</span>
      </div>
            <div class="w-11/12 m-auto shadow-xl">
                <div
                    class="flex lg:flex-row flex-col justify-items-center content-center align-middle items-center h-fit bg-white px-4 w-full">

                    <div class="flex lg:flex-col flex-row lg:w-1/2 lg:mx-auto p-8">
                        <div id="imgslider" class="flex w-full lg:h-96 justify-center lg:order-first order-last">
                            <div id="carousel_item" class="align-bottom max-w-md max-h-80">
                                <img id="imgview" src={imgState} class="lg:max-h-80" />
                            </div>

                        </div>
                        <div id="imgmini" class="flex lg:flex-row flex-col lg:flex-wrap my-1 lg:order-last order-first h-1/2">
                        {product.thumbs.map(thumb => (
                            <img onClick={() => { setImgState(thumb); }} src={thumb}
                                class={`max-w-24 cursor-pointer align-middle object-contain h-24 hover:border-solid border border-black rounded mx-2 ${(imgState === thumb) ? " border-solid" : " border-none"}`} />
                            ))}
                        </div>
                    </div>

                    <div class="flex flex-col min-h-96 shadow-xl lg:w-1/2 w-full lg:my-4 p-4">
                        <div class="mx-auto">
                            <div class="flex flex-col space-y-4 content-center p-4">
                                <h1 class="font-semibold text-xl">{product.title}</h1>
                                <div class="flex flex-row">
                                    <div className="mx-2">
                                        <StarRatings
                                        rating={product.rate}
                                        starDimension="16px"
                                        starSpacing="1px"
                                        starRatedColor="yellow"
                                        numberOfStars={5}
                                    />
                                    </div> {product.rate}
                                    <div class="border-x-2 mx-1 px-1">
                                        100 Penilaian
                                    </div>
                                    <div>100 Terjual
                                    </div>
                                </div>

                                <h2 class="font-bold text-2xl font-sans">{toRupiah(product.price-1501000)}</h2>
                                <h2 class="text-gray-500 text-lg line-through">{toRupiah(product.price-1000)}</h2>
                                <div class="flex h-fit items-center">
                                    <h4>Warna: </h4>
                                    <div class="mx-2 justify-around space-x-2">
                                        <button
                                            class="bg-white text-center text-black p-2 hover:text-red-500 hover:border-red-500 border border-black border-solid"
                                            href="#">Hitam</button>
                                        <button
                                            class="bg-white text-center text-black p-2 hover:text-red-500 hover:border-red-500 border border-black border-solid"
                                            href="#">Putih</button>
                                    </div>
                                </div>
                                <div class="flex h-fit items-center">
                                    <h4>Varian:</h4>
                                    <div class="mx-2 justify-around space-x-2">
                                        <button
                                            class="bg-white text-center text-black p-2 hover:text-red-500 hover:border-red-500 border border-black border-solid"
                                            href="#">6/128 GB</button>
                                        <button
                                            class="bg-white text-center text-black p-2 hover:text-red-500 hover:border-red-500 border border-black border-solid"
                                            href="#">8/256 GB</button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row items-center">
                                <section class="flex items-center p-2">
                                    <h3>Kuantitas</h3>
                                    <div class="flex items-center">
                                    
                                        <button aria-label="Decrease" class="h-8 px-4 m-2 text-sm text-gray-900 bg-gray-100"
                                            onClick={() => {setQuantity(quantity-1)}}>-</button>
                                        <input id="quantity" class="w-1/4 text-center" type="number" value={quantity} />
                                        <button aria-label="Increase" class="h-8 px-4 m-2 text-sm text-gray-900 bg-gray-100"
                                            onClick={() => {setQuantity(quantity+1)}}>+</button>
                                    </div>
                                </section>
                                <div id="cart_bt" class="flex p-1 h-fit items-center">
                                    <a class="bg-red-500 text-center text-gray-100 p-2 hover:text-white hover:bg-gray-700"
                                        href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col content-center w-11/12 mx-auto shadow-xl my-5 p-4  bg-white">
                <span class="flex p-4 bg-gray-100 w-full">Spesifikasi Produk</span>
                <div class="flex p-6 flex-col bg-white">
                    <h4>Kategori:</h4>
                    <h4>Stok:</h4>
                    <h4> Dikirim dari:</h4>
                </div>
                <span class="flex p-4 bg-gray-100 w-full">Deskripsi Produk</span>
                <div class="flex p-6 flex-col bg-white">
                    <h4>Spesifikasi:</h4>
                    <div>
                        <ul class="list-none flex flex-col space-y-4">
                            <li>CPU Speed : 2.2GHz, 2GHz </li>
                            <li>RAM : 8 GB</li>
                            <li>Storage : 128GB/256GB</li>
                            <li>Size (Main_Display) :
                                6.5" full rectangle /
                                6.3" rounded corners</li>
                            <li>Weight (g) : 200</li>
                        </ul>
                    </div>
                    <div class="flex flex-row justify-center content-center">
                        <img src="det1.avif" class="w-1/4" />
                    </div>
                </div>
            </div>

            <div class="flex flex-col content-center w-11/12 mx-auto shadow-xl my-5 p-4  bg-white">
                Penilaian & Review

            </div>
        </>
    );
};

export default ProductDetail;