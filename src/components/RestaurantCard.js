import { Img_data } from "../config/contants";
export const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img src={Img_data + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(" ,")}</h3>
        <h4>{lastMileTravelString}</h4>
      </div>
    );
  };