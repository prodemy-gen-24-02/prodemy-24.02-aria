import React from 'react'
import { useState, useEffect } from 'react'
import { useTable } from "react-table";
import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch'
import 'src/App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux"
import { resetAuthData } from "../store/authSlice.js"

function AdminPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
    const { setValue, register, handleSubmit, formState: { errors }, } = useForm();
    const [formData, setFormData] = useState();
    //const { data: promoData, error: error0, isLoading: load0 } = useSWR("http://localhost:3001/products_promo", axiosFetch);
    const { data: prod1Data, error: error1, isLoading: load1 } = useSWR("http://localhost:3001/products", axiosFetch);
    if (load1) return <h2>Loading...</h2>;
    //const tableHeads = Object.keys(prod1Data[0]);

    let prodData = [...prod1Data];
    prodData.sort((a, b) => a.id - b.id);
	const handleLogout = () => {
		dispatch(resetAuthData())
		navigate('/')
	}

    const onClickEdit = async (id) => {
        await axios.get(`http://localhost:3001/products/${id}`).then((res) => {
            const payload = res.data;
          setValue("title", res.data.name);
          setValue("price", res.data.price);
          setValue("category", res.data.category);
          setValue("brand", res.data.brand);
          setValue("discount", res.data.discount);
          setValue("desc", res.data.desc);
          setValue("image", res.data.image);
          setValue("stock", res.data.stock);
          //setModalTitle("Edit Item");

          setFormData(payload);
          console.log(formData);
        });
      };
    async function onClickDelete(id){
        await axios.delete(`http://localhost:3001/products/${id}`).then(response => {
            alert(`Deleted post with ID ${id}`);
            mutate();
          })
          .catch(error => {
            console.error(error);
          });;
    }


    const DisplayData = prodData.map(
        (info) => {
            return (

                <tr className="border-b text-center" key={info.id}>
                    <td className="p-4">{info.id}</td>
                    <td className="min-w-24">{info.title}</td>
                    <td className="min-w-24">{info.price - 1000}</td>
                    <td className="min-w-24">{info.category}</td>
                    <td className="min-w-24">{info.brand}</td>
                    <td className="p-4">{info.rate}</td>
                    <td className="min-w-24"><img src={info.image} className="max-h-20"></img></td>
                    <td><Link to={`/adminupdate/${info.id}`} state={{passData: formData}}><button className='bg-gray-300'>edit</button></Link>
                   
                    <button className='bg-gray-300' onClick={() =>onClickDelete(info.id)}>delete</button></td>
                </tr>
            )
        }
    )
    return (
        <>
            <div>
            <button onClick={handleLogout}>
			Logout
		</button>
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
                                <th className="min-w-24">Category</th>
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