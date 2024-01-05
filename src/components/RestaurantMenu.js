import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const param = useParams();
    const {resId} = param;
    //console.log({resId});

    const restaurant = useRestaurant(resId);
    
//{console.log(Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards))}
return (!restaurant)? <Shimmer /> : (
    <div className="menu">  
        <div> 
        <h1>Restaurant id : {resId} </h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name} </h2>
        <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="rest" />
        <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        </div> 
        <div>
            <h1>MENU</h1>
            <ul>
                
                {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item) =>(
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                ))}
            </ul>
        </div>
    </div>
    );

};
export default RestaurantMenu;