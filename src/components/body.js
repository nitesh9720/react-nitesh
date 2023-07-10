import { restaurantData } from "../config/contants";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurant] = useState([]);

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


  if ((filterRestaurants.length === 0)) {
    return <h1>No restaurant Found</h1>
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        
            
        
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant.data.id}> <RestaurantCard {...restaurant.data} key={restaurant.data.id} /></Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
