import { useParams } from "react-router-dom";
import { Img_data } from "../config/contants";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import useRestaurant from "../utils/useRestaurantMenu";
import { addItem ,removeItem,clearCart} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [restaurant,menu]=useRestaurant(id)
  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }
  const handleRemoveItem=()=>{
    dispatch(removeItem("mango"))
  }
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return !menu  ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-items flex">
        <div>
          <h1>Restaurant id is {restaurant?.id}</h1>
          <h2>Restaurant name is {restaurant.name}</h2>
          <img src={Img_data + restaurant.cloudinaryImageId} />
          <h2>city name is {restaurant.city}</h2>

          <h2>Area name is {restaurant.areaName}</h2>
          <h2>Avg rating is {restaurant.avgRating}</h2>
          <h2>cost for two is {restaurant.costForTwoMessage}</h2>
        </div>
        
        <div className="p-2 m-2 border border-black">
          <h1>Menu</h1>
          <ul>
            {menu.map((item,index) => {
              return <li key={index}>{item?.card?.info?.name} <button key={index} onClick={()=>handleAddItem(item?.card)} className="p-2 m-2 bg-green-100">Add</button></li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
