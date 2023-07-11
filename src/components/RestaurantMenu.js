import { useParams } from "react-router-dom";
import { Img_data } from "../config/contants";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [restaurant, setRestaurant] = useState();
  const [menu, setMenu] = useState();

  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8056462&lng=75.8025492&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json.data.cards[0]?.card?.card?.info?.name);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    setMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return !menu  ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-items">
        <div>
          <h1>Restaurant id is {restaurant?.id}</h1>
          <h2>Restaurant name is {restaurant.name}</h2>
          <img src={Img_data + restaurant.cloudinaryImageId} />
          <h2>city name is {restaurant.city}</h2>

          <h2>Area name is {restaurant.areaName}</h2>
          <h2>Avg rating is {restaurant.avgRating}</h2>
          <h2>cost for two is {restaurant.costForTwoMessage}</h2>
        </div>
        <div>
          <ul>
            {menu.map((item,index) => {
              return <li key={index}>{item?.card?.info?.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
