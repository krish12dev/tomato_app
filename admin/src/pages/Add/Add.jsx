import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const Changehandler = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("description", data?.description);
    formData.append("price", Number(data?.price));
    formData.append("category", data?.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response?.data?.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        toast.success("Food item added successfully!");
      } else {
        toast.error(`Error adding food item: ${response?.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error adding food item:', error);
      toast.error(`Error adding food item: ${error.message}`);
    }
  };

  return (
    <div className="add">
      
      <form className="flex-col" onSubmit={submitHandler}>
        <div className="add-image-upload flex-col">
          <p>upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input
            type="text"
            onChange={Changehandler}
            value={data?.name}
            name="name"
            placeholder="type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>product description</p>
          <textarea
            name="description"
            onChange={Changehandler}
            value={data?.description}
            cols="30"
            rows="10"
            placeholder="write content here"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select
              onChange={Changehandler}
              value={data?.category}
              name="category"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price-flex-col">
            <p>Product price</p>
            <input
              type="number"
              onChange={Changehandler}
              value={data?.price}
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
