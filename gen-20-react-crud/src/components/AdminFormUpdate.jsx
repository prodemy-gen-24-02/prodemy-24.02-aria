import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch'
import axios from 'axios';
import { useParams } from 'react-router-dom';



function AdminFormUpdate() {
  let { paramId } = useParams();
  //const { data: prod1Data, error: error1, isLoading: load1 } = useSWR(`http://localhost:3001/products_hp/${paramId}`, axiosFetch);
  //const [idState, setIdState] = useState(0);
  //if (load1) return <h2>Loading...</h2>;
  //const [idState, setIdState] = useState(0);

  const [formData, setFormData] = useState(
    {
      id: 0,
      image: "",
      title: "",
      price: 0,
      rate: 0,
      thumbs: [],
      brand: "",
      discount: 0,
      desc: "",
      stock: 0
    }
  );

  const onClickEdit = async () => {
    await axios.get(`http://localhost:3001/products_hp/${paramId}`).then((res) => {
      const payload = res.data;
      //console.log(payload);
      setValue("title", res.data.title);
      setValue("price", res.data.price);
      setValue("category", res.data.category);
      setValue("brand", res.data.brand);
      setValue("discount", res.data.discount);
      setValue("desc", res.data.desc);
      setValue("image", res.data.image);
      setValue("stock", res.data.stock);
      //setModalTitle("Edit Item");
      //setFormData(res.data);
    });
  };

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
    //console.log(formData);
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
    axios
      .put(`http://localhost:3001/products_hp/${paramId}`, data)
      .then(() => {
        reset();
        mutate();
      })
      .catch((error) => {
        console.log("Error", error);
      });

  };

  const onChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(()=>{  
  onClickEdit();
  console.log(formData);
  });
  return (
    <>

      <div className="flex flex-col justify-center w-1/2 bg-white border p-4 mx-auto">

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className='flex flex-col space-y-4'>
            <label>Product Name:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                defaultValue={formData.title}
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
                defaultValue={formData.price}
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
                defaultValue={formData.category}
                {...register("category")}
                name="category"
                id="category"
                
              >
                <option value="Smartphone">Smartphone</option>
                <option value="Computers">Computers</option>
                <option value="Accessories">Accessories</option>
                <option value="Others">Others</option>
              </select>
              <p className="text-red-500">{errors.category?.message}</p>
            </div>
            <label>Brand:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                defaultValue={formData.brand}
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
                defaultValue={formData.discount}
                {...register("discount")}
                name="discount"
                id="discount"
                type="number"
                
              />
            </div>
            <label>Enter description:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                defaultValue={formData.desc}
                {...register("desc")}
                name="desc"
                id="desc"
                type="text"
                
              />
              <p className="text-red-500">{errors.desc?.message}</p>
            </div>
            <label>Image URL:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                defaultValue={formData.image}
                {...register("image")}
                name="image"
                id="image"
                type="text"
                
              />
            </div>
            <label>Stock Quantity:</label>
            <div>
              <input className='border-2 border-gray-300 p-2 w-full'
                defaultValue={formData.stock}
                {...register("stock")}
                name="stock"
                id="stock"
                type="number"
                
              />
            </div>

          </div>


          <button className="my-2" type="submit" value="submit">Submit</button>

        </form>
      </div>
    </>
  )
}

export default AdminFormUpdate;