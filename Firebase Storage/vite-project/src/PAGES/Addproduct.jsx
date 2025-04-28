import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../SERVICE/firebase';



const Addproduct = () => {

  const [userdata, setuserdata] = useState({
  
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });
  function adddata(e) {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  }

 async function submitData(e) {
    e.preventDefault();
 
  
    try {
        const docRef = await addDoc(collection(db, "product"), userdata);
          console.log(docRef);

    } catch (error) {
        console.log(error)
    }
  }
  

  return (

      <div className="form-container">
        <h1>Post Data</h1>
        <form onSubmit={submitData}>
          <input
            type="text"
            placeholder="Enter title Here.."
            value={userdata.title}
            name="title"
            onChange={adddata}
          />
          <input
            type="number"
            placeholder="Enter price Here.."
            value={userdata.price}
            name="price"
            onChange={adddata}
          />
          <input
            type="text"
            placeholder="Enter description Here.."
            value={userdata.description}
            name="description"
            onChange={adddata}
          />
          <select value={userdata.category} name="category" onChange={adddata}>
            <option value="">Select category</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
          <input
            name="image"
            placeholder="Enter image URL Here.."
            value={userdata.image}
            type="text"
            onChange={adddata}
          />
          <input type="submit" className='button' value="Add Product" />
        </form>
      </div>
  )
}

export default Addproduct;