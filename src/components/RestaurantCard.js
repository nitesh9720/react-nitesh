import { Img_data } from "../config/contants";
export const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="w-56 p-3 shadow-lg bg-pink-50">
        <img src={Img_data + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(" ,")}</h3>
        <h4>{lastMileTravelString}</h4>
      </div>
    );
  };