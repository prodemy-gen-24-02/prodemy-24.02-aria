import React from 'react'
import { useState, useEffect } from 'react'
import { useTable } from "react-table";
import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch'
import 'src/App.css';
import { Link } from 'react-router-dom';

function AdminPage() {

    //const { data: promoData, error: error0, isLoading: load0 } = useSWR("http://localhost:3001/products_promo", axiosFetch);
    const { data: prod1Data, error: error1, isLoading: load1 } = useSWR("http://localhost:3001/products_hp", axiosFetch);
    const { data: prod2Data, error: error2, isLoading: load2 } = useSWR("http://localhost:3001/products_pc", axiosFetch);
    const { data: prod3Data, error: error3, isLoading: load3 } = useSWR("http://localhost:3001/products_acc", axiosFetch);
    if (load1 || load2 || load3) return <h2>Loading...</h2>;
    //const tableHeads = Object.keys(prod1Data[0]);

    const DisplayData = prod1Data.map(
        (info) => {
            return (

                <tr className="border-b text-center">
                    <td className="p-4">{info.id}</td>
                    <td className="min-w-24">{info.title}</td>
                    <td className="min-w-24">{info.price - 1000}</td>
                    <td className="min-w-24">{info.brand}</td>
                    <td className="p-4">{info.rate}</td>
                    <td className="min-w-24"><img src={info.image} className="max-h-20"></img></td>
                    <td><button className='bg-gray-300'>edit</button>
                    
                    <button className='bg-gray-300'>delete</button></td>
                </tr>
            )
        }
    )
    return (
        <>
            <div>
                <div className="flex justify-center">
                <Link to="/adminform">
                    <a className="text-center bg-gray-300 p-2 hover:text-white hover:bg-gray-700"
                                        >Add Product</a>
                                        </Link>
                </div>
                <div className="flex">

                    <table className="table-auto bg-white my-10 mx-auto">
                        <thead className="bg-gray-300 h-10 min-w">
                            <tr className="p-4">
                                <th className="min-w-10">Id</th>
                                <th className="min-w-24">Product Name</th>
                                <th className="min-w-24">Price</th>
                                <th className="min-w-24">Brand</th>
                                <th className="min-w-24">Rating</th>
                                <th className="min-w-24">Image</th>
                                <th className="min-w-24">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DisplayData}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}



export default AdminPage;