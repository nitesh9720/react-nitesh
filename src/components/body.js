import { restaurantData } from "../config/contants";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";


function filterData(searchInput,restaurants){

    const filterData=restaurants.filter((restaurant)=>
        restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    return filterData;
}
const Body = () => {
  
  const [searchInput, setSearchInput] = useState("");
  const [restaurants,setRestaurant]=useState(restaurantData);

  return (
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
        <button onClick={()=>{
            const data=filterData(searchInput,restaurantData);
            setRestaurant(data)
        } }>Search</button>
      </div>
      <div className="restaurantList">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
