import { restaurantData } from "../config/contants";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import { filterData } from "../utils/helper";

import useOnline from "../utils/useOnline";
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurant] = useState(null);
  const [filterRestaurants, setFilterRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8036533&lng=75.8084579&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
const isOnline=useOnline();
  if(!isOnline){
    return(
      <>
      <h1> 🔴 you are offline</h1>
      </>
    )
  }

if(filterRestaurants===null){
  return <Shimmer/>
}
  if ((filterRestaurants.length === 0) &&(allRestaurants.length!==0)) {
    return <h1>No restaurant Found</h1>
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 m-2">
        <input 
          type="text"
          className="focus:bg-green-200"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        
            
        
        />
        <button className="mx-2 hover:bg-pink-600 bg-blue-500 text-white rounded p-2"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap ">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link key={restaurant.data.id}className="m-2" to={"/restaurant/"+restaurant.data.id}> <RestaurantCard {...restaurant.data} key={restaurant.data.id} /></Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
