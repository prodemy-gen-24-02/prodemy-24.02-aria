import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch'
import axios from 'axios';



function AdminForm() {

  //const [idState, setIdState] = useState(0);
  const [formData, setFormData] = useState(
    {
      id: 0,
      image: "",
      title: "",
      price: 0,
      rate: 0,
      thumbs: [],
      category: "",
      brand: "",
      discount: 0,
      desc: "",
      stock: 0
    }
  );


  const schema = yup.object().shape({
    title: yup.string().required("Name is required").min(5, "Name too short"),
    price: yup.number().required("Price is required").min(1000, "Invalid price"),
    category: yup.string().required("Category is required"),
    brand: yup.string().required("Brand is required"),
    desc: yup.string().required("Description is required"),
    image: yup.string().required("Image is required"),
  });
  const { setValue, register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitForm = (data) => {
    data.rate = 0;
    console.log(data);
    alert(`Entered Data: 
    Product name: ${data.title}
    Price: ${data.price}
    Category: ${data.category}
    Brand: ${data.brand}
    Discount: ${data.discount}
    Description: ${data.desc}
    Image URL: ${data.image}
    Stock: ${data.stock}`
    );
    axios.post("http://localhost:3001/products", data).then(() => {
      mutate();
    })
      .catch((error) => {
        console.log("Error", error);
      });
  };


  return (
    <>

      <div className="flex flex-col justify-center w-1/2 bg-white border p-4 mx-auto">

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className='flex flex-col space-y-4'>
            <label>Product Name:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                placeholder="Required"
                {...register("title")}
                name="title"
                id="title"
                type="text"

              />
              <p className="text-red-500">{errors.title?.message}</p>
            </div>
            <label>Price:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                {...register("price")}
                name="price"
                id="price"
                type="number"

              />
              <p className="text-red-500">{errors.price?.message}</p>
            </div>
            <label>Category:</label>
            <div>
              <select className='border-2 border-gray-300 p-2 w-full'
                placeholder="Required"
                {...register("category")}
                name="category"
                id="category">
                <option value="Smartphone">Smartphone</option>
                <option value="Computer">Computer</option>
                <option value="Accessories">Accessories</option>
                <option value="Others">Others</option>
              </select>
              <p className="text-red-500">{errors.category?.message}</p>
            </div>
            <label>Brand:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                placeholder="Required"
                {...register("brand")}
                name="brand"
                id="brand"
                type="text"

              />
              <p className="text-red-500">{errors.brand?.message}</p>
            </div>
            <label>Discount:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                {...register("discount")}
                name="discount"
                id="discount"
                type="number"

              />
            </div>
            <label>Enter description:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                placeholder="Required"
                {...register("desc")}
                name="desc"
                id="desc"
                type="text"

              />
              <p className="text-red-500">{errors.desc?.message}</p>
            </div>
            
            <label>Stock Quantity:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                {...register("stock")}
                name="stock"
                id="stock"
                type="number"

              />
            </div>
            <label>Image1 URL:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                {...register("image")}
                name="image"
                id="image"
                type="text"

              />
            </div>
            <label>Image2 URL:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                {...register("image")}
                name="image"
                id="image"
                type="text"

              />
            </div>
            <label>Image3 URL:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                {...register("image")}
                name="image"
                id="image"
                type="text"

              />
            </div>
            <label>Image4 URL:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                {...register("image")}
                name="image"
                id="image"
                type="text"

              />
            </div>
          </div>


          <button className="my-2" type="submit" value="submit">Submit</button>

        </form>
      </div>
    </>
  )
}

export default AdminForm;