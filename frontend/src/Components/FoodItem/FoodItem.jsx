import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { storeContext } from "../Context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart,url } = useContext(storeContext);
  console.log(url+"/images")
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={url + "/images/" + image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={()=>addToCart(id)}
            src={assets?.add_icon}
            alt="add icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets?.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)} // Fixed typo here
              src={assets?.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating-starts" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
