import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "../config/contants";
export default useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();
  const [menu, setMenu] = useState();

  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const data = await fetch(RESTAURANT_API_URL + id);
    const json = await data.json();
    console.log(json.data.cards[0]?.card?.card?.info?.name);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    setMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
  return [restaurant, menu];
};
