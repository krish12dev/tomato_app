import React, { useContext, useEffect } from "react";
import "./FoodDisplay.css";
import { storeContext } from "../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item?.category) {
             return (
             <FoodItem
              key={index}
              id={item?._id}
              price={item?.price}
              name={item?.name}
              image={item?.image}
              description={item?.description}
            />);
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
